import { useState, useEffect, useCallback } from 'react';
import { AdminLogin } from './AdminLogin';
import { AdminTable } from './AdminTable';
import type { Lead } from '@/types/lead';

type AuthStatus = 'checking' | 'unauthenticated' | 'authenticated';

type LoadResult =
  | { kind: 'success'; leads: Lead[] }
  | { kind: 'unauthenticated' }
  | { kind: 'error'; message: string };

export const AdminPage = () => {
  const [status, setStatus] = useState<AuthStatus>('checking');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const parseFecha = (f: string | null | undefined): Date => {
    if (!f) return new Date(0);
    const [date, time] = f.split(' ');
    const [dd, MM, yyyy] = date.split('/');
    const [hh = '0', mm = '0'] = time?.split(':') ?? [];
    return new Date(+yyyy, +MM - 1, +dd, +hh, +mm);
  };

  const loadLeads = useCallback(async (): Promise<LoadResult> => {
    try {
      const res = await fetch('/api/admin/leads');
      if (res.status === 401) {
        return { kind: 'unauthenticated' };
      }
      const json = (await res.json()) as { ok?: boolean; data?: unknown; error?: string };
      if (!res.ok || !json.ok) {
        return { kind: 'error', message: json.error || 'Error al obtener registros' };
      }
      if (!Array.isArray(json.data)) {
        return { kind: 'error', message: 'Formato de respuesta inválido' };
      }

      const sorted = [...(json.data as Lead[])].sort(
        (a: Lead, b: Lead) => parseFecha(b.fecha).getTime() - parseFecha(a.fecha).getTime()
      );

      return { kind: 'success', leads: sorted };
    } catch (err: unknown) {
      return { kind: 'error', message: err instanceof Error ? err.message : 'Error de conexión' };
    }
  }, []);

  const applyResult = useCallback((result: LoadResult) => {
    if (result.kind === 'unauthenticated') {
      setStatus('unauthenticated');
      return;
    }
    if (result.kind === 'error') {
      setError(result.message);
      setStatus('authenticated');
      return;
    }
    setLeads(result.leads);
    setStatus('authenticated');
  }, []);

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    setError(null);
    await loadLeads().then(applyResult);
    setLoading(false);
  }, [loadLeads, applyResult]);

  useEffect(() => {
    loadLeads().then(applyResult);
  }, [loadLeads, applyResult]);

  if (status === 'checking') {
    return null;
  }

  if (status === 'unauthenticated') {
    return <AdminLogin onSuccess={() => { setStatus('authenticated'); fetchLeads(); }} />;
  }

  return (
    <AdminTable
      onLogout={() => setStatus('unauthenticated')}
      onRetry={fetchLeads}
      leads={leads}
      loading={loading}
      error={error}
    />
  );
};
