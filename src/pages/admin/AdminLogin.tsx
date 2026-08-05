import { useState } from 'react';

interface AdminLoginProps {
  onSuccess: () => void;
}

export const AdminLogin = ({ onSuccess }: AdminLoginProps) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        onSuccess();
        return;
      }

      const json = (await res.json().catch(() => null)) as { error?: string } | null;
      setError(json?.error || 'Error de conexión. Intentá de nuevo.');
    } catch {
      setError('Error de conexión. Intentá de nuevo.');
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F5EE] flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-[#278759] text-white rounded-xl shadow-lg p-8 max-w-sm w-full"
      >
        <img
          src="/logo-ameli/logo-blanco.png"
          alt="Amelí"
          className="w-40 mx-auto mb-6 drop-shadow-lg"
        />
        <h1 className="font-playfair text-3xl text-center text-white mb-6">
          Acceso Administrativo
        </h1>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          autoComplete="off"
          className="w-full border border-white/40 rounded-lg p-2 bg-white/10 placeholder-white/70 text-white text-base focus:outline-none focus:ring-2 focus:ring-[#F7C665] mb-4"
          autoFocus
        />

        {error && (
          <p className="text-red-300 text-sm text-center mb-4">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-[#F7C665] text-[#5C4033] py-2 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-[#e6b353] transition"
        >
          Acceder
        </button>

        <a
          href="/"
          className="block text-center text-white/60 text-sm mt-4 hover:text-white transition"
        >
          Volver al inicio
        </a>
      </form>
    </div>
  );
};
