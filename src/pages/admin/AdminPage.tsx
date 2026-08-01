import { useState, useCallback } from 'react';
import { AdminLogin } from './AdminLogin';
import { AdminTable } from './AdminTable';
import type { Lead } from '@/types/lead';

export const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(import.meta.env.VITE_GOOGLE_SCRIPT_URL);
      const json = await res.json();
      if (!json.success) throw new Error(json.error || 'Error al obtener registros');
      if (!Array.isArray(json.data)) throw new Error('Formato de respuesta inválido');

      const sorted = [...json.data].sort(
        (a: Lead, b: Lead) => parseFecha(b.fecha).getTime() - parseFecha(a.fecha).getTime()
      );

      setLeads(sorted);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Error de conexión');
    } finally {
      setLoading(false);
    }
  }, []);

  if (!isAuthenticated) {
    return <AdminLogin onSuccess={() => { setIsAuthenticated(true); fetchLeads(); }} />;
  }

  return (
    <AdminTable
      onLogout={() => setIsAuthenticated(false)}
      onRetry={fetchLeads}
      leads={leads}
      loading={loading}
      error={error}
    />
  );
};
