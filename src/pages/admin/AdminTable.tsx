import { useState } from 'react';
import type { Lead } from '@/types/lead';
import { ImSpinner2 } from 'react-icons/im';

interface AdminTableProps {
  onLogout: () => void;
  onRetry: () => void;
  leads: Lead[];
  loading: boolean;
  error: string | null;
}

export const AdminTable = ({ onLogout, onRetry, leads, loading, error }: AdminTableProps) => {
  const [search, setSearch] = useState('');

  const filteredLeads = search.trim()
    ? leads.filter((lead) => {
        const q = search.toLowerCase();
        return (
          String(lead.nombre).toLowerCase().includes(q) ||
          String(lead.email).toLowerCase().includes(q) ||
          String(lead.telefono).toLowerCase().includes(q) ||
          String(lead.localidad).toLowerCase().includes(q) ||
          String(lead.plan).toLowerCase().includes(q)
        );
      })
    : leads;

  const exportCSV = () => {
    const headers = ['Fecha', 'Nombre', 'Email', 'Teléfono', 'Localidad', 'Plan', 'Origen'];
    const rows = leads.map((lead) => [
      lead.fecha,
      lead.nombre,
      lead.email,
      lead.telefono,
      lead.localidad,
      lead.plan,
      lead.origen ?? '',
    ]);
    const csv = [headers.join(','), ...rows.map((r) => r.map((c) => `"${c}"`).join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'amelipastoreo-registros.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#F7F5EE]">
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <img
              src="/logo-ameli/logotipo1.png"
              alt="Amelí"
              className="w-14 drop-shadow-lg"
            />
            <div>
              <h1 className="text-2xl font-playfair text-[#278759]">
                Registros
              </h1>
              <p className="text-sm text-[#5C4033]/60">
                {loading ? 'cargando…' : `${leads.length} registro${leads.length !== 1 ? 's' : ''}`}
              </p>
            </div>
          </div>

          <button
            onClick={onLogout}
            className="text-sm text-[#5C4033]/60 hover:text-[#5C4033] transition"
          >
            Cerrar sesión
          </button>
        </div>

        {!loading && !error && (
          <div className="mb-4 flex gap-2">
            <input
              type="text"
              placeholder="Buscar por nombre, email, teléfono, localidad o plan…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 border border-[#278759]/30 rounded-lg p-2 bg-white text-[#5C4033] text-sm focus:outline-none focus:ring-2 focus:ring-[#F7C665]"
            />
            <button
              onClick={exportCSV}
              className="bg-[#278759] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#1f6e4a] transition shrink-0"
            >
              Exportar CSV
            </button>
          </div>
        )}

        {loading && (
          <div className="bg-white rounded-xl shadow-lg p-16 text-center">
            <ImSpinner2 className="animate-spin text-3xl text-[#278759] mx-auto mb-3" />
            <p className="text-[#5C4033]/60">Cargando registros…</p>
          </div>
        )}

        {!loading && error && (
          <div className="bg-white rounded-xl shadow-lg p-16 text-center">
            <p className="text-red-500 mb-4">Error: {error}</p>
            <button
              onClick={onRetry}
              className="bg-[#F7C665] text-[#5C4033] px-6 py-2 rounded-full font-semibold shadow hover:shadow-lg hover:bg-[#e6b353] transition"
            >
              Reintentar
            </button>
          </div>
        )}

        {!loading && !error && filteredLeads.length === 0 && (
          <div className="bg-white rounded-xl shadow-lg p-16 text-center">
            <p className="text-[#5C4033]/60 text-lg">No hay registros todavía.</p>
          </div>
        )}

        {!loading && !error && filteredLeads.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="px-4 pt-3 pb-1 text-sm text-[#5C4033]/60">
              Mostrando {filteredLeads.length} de {leads.length} registro{leads.length !== 1 ? 's' : ''}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#278759] text-white">
                    <th className="text-left p-3 font-semibold whitespace-nowrap">Fecha</th>
                    <th className="text-left p-3 font-semibold whitespace-nowrap">Nombre</th>
                    <th className="text-left p-3 font-semibold whitespace-nowrap">Email</th>
                    <th className="text-left p-3 font-semibold whitespace-nowrap">Teléfono</th>
                    <th className="text-left p-3 font-semibold whitespace-nowrap">Localidad</th>
                    <th className="text-left p-3 font-semibold whitespace-nowrap">Plan</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map((lead, i) => (
                    <tr
                      key={`${lead.fecha}-${lead.email}`}
                      className={`${
                        i % 2 === 0 ? 'bg-white' : 'bg-[#F7F5EE]'
                      } hover:bg-[#F7C665]/10 transition`}
                    >
                      <td className="p-3 text-[#5C4033] whitespace-nowrap">{lead.fecha}</td>
                      <td className="p-3 text-[#5C4033] font-medium">{lead.nombre}</td>
                      <td className="p-3 text-[#5C4033]">{lead.email}</td>
                      <td className="p-3 text-[#5C4033] whitespace-nowrap">{lead.telefono}</td>
                      <td className="p-3 text-[#5C4033]">{lead.localidad}</td>
                      <td className="p-3 text-[#5C4033]">{lead.plan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
