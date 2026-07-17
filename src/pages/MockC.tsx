import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FormData = {
  nombre: string;
  email: string;
  telefono: string;
  localidad: string;
  plan: string;
};

const planOptions = [
  { value: 'Plan Individual (12 huevos por semana)', label: '12', desc: 'Individual', emoji: '🥚', qtyLabel: '12 huevos' },
  { value: 'Plan Amigo (18 huevos por semana)', label: '18', desc: 'Amigo', emoji: '🐔', qtyLabel: '18 huevos' },
  { value: 'Plan Estándar (24 huevos por semana)', label: '24', desc: 'Estándar', emoji: '🍳', qtyLabel: '24 huevos' },
  { value: 'Plan Familiar (30 huevos por semana)', label: '30', desc: 'Familiar', emoji: '👨‍👩‍👧‍👦', qtyLabel: '30 huevos' },
  { value: 'Plan Personalizado (+30 huevos por semana)', label: '+30', desc: 'Personalizado', emoji: '✨', qtyLabel: '+30 huevos' },
];

export const MockC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    localidad: '',
    plan: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error' | null; text: string }>({
    type: null,
    text: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (data: FormData): boolean => {
    if (!data.nombre.trim()) return false;
    if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return false;
    if (!data.telefono.trim()) return false;
    if (!data.localidad.trim()) return false;
    if (!data.plan) return false;
    return true;
  };

  const resetForm = () => {
    setFormData({ nombre: '', email: '', telefono: '', localidad: '', plan: '' });
  };

  const handleSubmit = async () => {
    if (!validate(formData)) {
      setMessage({ type: 'error', text: 'Por favor completá todos los campos correctamente.' });
      return;
    }

    setLoading(true);
    setMessage({ type: null, text: '' });

    const payload = {
      ...formData,
      origen: 'Landing Form',
    };

    try {
      const params = new URLSearchParams(payload);
      const response = await fetch(import.meta.env.VITE_GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: params,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Error al guardar el registro.');
      }

      setMessage({ type: 'success', text: '¡Gracias! Te contactaremos en menos de 48 hs.' });
      resetForm();
    } catch (err: unknown) {
      setMessage({ type: 'error', text: err instanceof Error ? err.message : 'Error de conexión. Intentá de nuevo.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F5EE] flex items-center justify-center p-6">
      <section className="grid md:grid-cols-2 gap-8 max-w-5xl w-full bg-[url('/fondo/background-form.png')] bg-cover bg-center p-8 rounded-xl shadow-lg">
        {/* ----- LADO IZQUIERDO: branding ----- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <img src="/logo-ameli/ameli-grande.png" alt="Amelí" className="w-52 mb-5 drop-shadow-lg" />
          <h1 className="font-playfair text-4xl md:text-5xl text-[#278759] mb-3">Lista de espera Amelí</h1>
          <p className="text-lg text-brown-dark italic max-w-sm">
            Déjanos tus datos y te contactaremos<br />
            en menos de 48 horas para confirmar<br />
            disponibilidad y plan recomendado.
          </p>
        </motion.div>

        {/* ----- LADO DERECHO: formulario ----- */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#278759] text-white rounded-xl shadow-lg p-5 flex flex-col space-y-4 max-w-sm w-full font-sans"
        >
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full border border-white/40 rounded-lg p-2 bg-white/10 placeholder-white text-white text-base focus:outline-none focus:ring-2 focus:ring-[#F7C665] focus:border-white/70"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-white/40 rounded-lg p-2 bg-white/10 placeholder-white text-white text-base focus:outline-none focus:ring-2 focus:ring-[#F7C665] focus:border-white/70"
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full border border-white/40 rounded-lg p-2 bg-white/10 placeholder-white text-white text-base focus:outline-none focus:ring-2 focus:ring-[#F7C665] focus:border-white/70"
          />
          <input
            type="text"
            name="localidad"
            placeholder="Localidad"
            value={formData.localidad}
            onChange={handleChange}
            className="w-full border border-white/40 rounded-lg p-2 bg-white/10 placeholder-white text-white text-base focus:outline-none focus:ring-2 focus:ring-[#F7C665] focus:border-white/70"
          />

          <h2 className="text-base font-medium font-sans text-white mb-1">Elija su plan (huevos/semana)</h2>
          <motion.div
            className="grid grid-cols-2 gap-2 mt-1"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05 } },
            }}
            initial="hidden"
            animate="visible"
          >
            {planOptions.map((p) => (
              <motion.label
                key={p.value}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className={`rounded-lg cursor-pointer text-center py-1.5 px-2 transition-all ${
                  formData.plan === p.value
                    ? 'border border-[#F7C665] bg-[#F7C665]/20 shadow-sm ring-1 ring-[#F7C665]'
                    : 'border border-white/20 bg-white/[0.07]'
                } hover:bg-[#F7C665]/20 ${p.value.includes('Personalizado') ? 'col-span-2' : ''}`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <input
                  type="radio"
                  name="plan"
                  value={p.value}
                  checked={formData.plan === p.value}
                  onChange={handleChange}
                  className="hidden"
                />
                <div className="flex items-center justify-center gap-1.5 mb-0.5">
                  <span className="text-lg shrink-0">{p.emoji}</span>
                  <span className="text-sm font-bold text-white">{p.desc}</span>
                </div>
                <div className="text-[13px] font-semibold text-white/85 leading-tight uppercase">
                  {p.qtyLabel}
                </div>
                <div className="text-[10px] font-medium text-white/70 leading-tight">
                  por semana
                </div>
              </motion.label>
            ))}
          </motion.div>

          <AnimatePresence>
            {message.text && (
              <motion.p
                key={message.text}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className={`text-sm text-center px-3 py-1.5 rounded-md ${
                  message.type === 'success' ? 'bg-green-900/40 text-green-300' : 'bg-red-900/40 text-red-300'
                }`}
              >
                {message.text}
              </motion.p>
            )}
          </AnimatePresence>

          <motion.button
            type="button"
            disabled={loading}
            onClick={handleSubmit}
            className="w-full bg-[#F7C665] text-[#5C4033] py-2 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-[#e6b353] transition disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? 'Enviando…' : 'Enviar'}
          </motion.button>
        </motion.form>
      </section>
    </div>
  );
};

export default MockC;
