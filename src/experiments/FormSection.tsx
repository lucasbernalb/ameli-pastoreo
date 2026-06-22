import { useState } from 'react';
import { motion } from 'framer-motion';

type FormData = {
  nombre: string;
  email: string;
  telefono: string;
  localidad: string;
  plan: string;
};

const planChips: ChipData[] = [
  { value: 'Plan Individual (12 huevos por semana)', label: '12 HUEVOS', subtitle: 'Plan Individual' },
  { value: 'Plan Amigo (18 huevos por semana)', label: '18 HUEVOS', subtitle: 'Más elegido' },
  { value: 'Plan Estándar (24 huevos por semana)', label: '24 HUEVOS', subtitle: 'Ideal para familias pequeñas' },
  { value: 'Plan Familiar (30 huevos por semana)', label: '30 HUEVOS', subtitle: 'Plan Familiar' },
  { value: 'Plan Personalizado (+30 huevos por semana)', label: '+30 HUEVOS', subtitle: 'Personalizado' },
];

const benefits = [
  'Gallinas criadas en pastoreo natural',
  'Huevos frescos con entrega semanal',
  'Producción familiar de calidad premium',
  'Entregamos en Montevideo, Canelones y Costa',
  'Te contactamos en menos de 24 horas',
  'Sin compromiso de compra',
];

type ChipData = { value: string; label: string; subtitle: string };

const Chip = ({ chip, selected, onChange, name }: { chip: ChipData; selected: boolean; onChange: React.ChangeEventHandler<HTMLInputElement>; name: string }) => (
  <motion.label
    animate={{
      boxShadow: selected
        ? [
            '0 0 0px rgba(245,194,66,0), 0 0 0px rgba(245,194,66,0)',
            '0 0 10px rgba(245,194,66,0.4), 0 0 20px rgba(245,194,66,0.15)',
            '0 0 0px rgba(245,194,66,0), 0 0 0px rgba(245,194,66,0)',
          ]
        : undefined,
    }}
    transition={selected ? { duration: 2.5, repeat: Infinity, ease: 'easeInOut' } : undefined}
    className={`cursor-pointer rounded-full border px-4 py-3 transition-all duration-200 ${
      selected
        ? 'bg-[#89B178] text-white border-gold shadow-md -translate-y-0.5'
        : 'bg-[#F0EBE6] text-brown border-gold/30 hover:border-gold/60 hover:shadow-sm hover:-translate-y-0.5'
    }`}
  >
    <input
      type="radio" name={name} value={chip.value}
      checked={selected} onChange={onChange}
      className="hidden"
    />
    <div className="text-center">
      <span className={`text-sm font-bold block leading-tight ${
        selected ? 'text-white' : 'text-brown'
      }`}>
        {chip.label}
      </span>
      <span className={`text-[11px] font-medium block mt-0.5 ${
        selected ? 'text-white/75' : 'text-brown-mid'
      }`}>
        {chip.subtitle}
      </span>
    </div>
  </motion.label>
);

export const FormSection = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '', email: '', telefono: '', localidad: '', plan: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = (data: FormData) =>
    Boolean(data.nombre.trim() && data.email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) && data.telefono.trim() && data.localidad.trim() && data.plan);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate(formData)) {
      setMessage({ type: 'error', text: 'Completá todos los campos correctamente.' });
      return;
    }
    setLoading(true);
    setMessage(null);
    try {
      const params = new URLSearchParams({ ...formData, origen: 'Landing Cinematic' });
      const res = await fetch(import.meta.env.VITE_GOOGLE_SCRIPT_URL, { method: 'POST', body: params });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || 'Error al guardar');
      setMessage({ type: 'success', text: '¡Gracias! Te contactaremos en menos de 48 hs.' });
      setFormData({ nombre: '', email: '', telefono: '', localidad: '', plan: '' });
    } catch {
      setMessage({ type: 'error', text: 'Error de conexión. Intentá de nuevo.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: '#1C140E' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(rgba(28,20,14,.88), rgba(28,20,14,.88))',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'url("/texturas/brown-gravel.png")',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'url("/texturas/278759-egg-shell.png")',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'multiply',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block relative mb-4">
              <span
                className="absolute inset-0 scale-110 scale-x-[1.15] pointer-events-none"
                style={{
                  background: 'rgba(245,194,66,0.8)',
                  borderRadius: '12% 6% 18% 6% / 6% 16% 4% 18%',
                  transform: 'rotate(-1deg) scale(1.08) scaleX(1.12)',
                }}
              />
              <span className="relative text-sm md:text-base tracking-[0.25em] uppercase font-semibold text-white">
                Sumate
              </span>
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8F5F0] leading-tight mb-6">
              Recibí{' '}
              <span className="text-gold">huevos frescos</span>{' '}
              cada semana
            </h2>
            <p className="text-lg leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(248,245,240,.85)' }}>
              Completá tus datos y te contactamos para coordinar tu entrega semanal.
            </p>

            <ul className="space-y-3 mb-10">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3" style={{ color: 'rgba(248,245,240,.92)' }}>
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-gold" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 10 8 15 17 5" />
                  </svg>
                  <span className="text-base">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div
              className="relative rounded-[28px] overflow-hidden"
              style={{
                backgroundColor: '#FAF5EC',
                backgroundImage: 'url("/texturas/E4D9C4-low-contrast-linen.png")',
                backgroundRepeat: 'repeat',
                border: '1px solid rgba(92,64,51,.12)',
                boxShadow: '0 20px 60px rgba(0,0,0,.12)',
              }}
            >
              <div
                className="absolute inset-0 rounded-[28px] opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: 'url("/texturas/278759-egg-shell.png")',
                  backgroundRepeat: 'repeat',
                  mixBlendMode: 'multiply',
                }}
              />
              <form className="p-8 md:p-10 relative" onSubmit={handleSubmit}>
                <div className="space-y-5">
                  <div>
                    <label htmlFor="form-nombre" className="block text-sm font-medium text-brown mb-1.5">Nombre</label>
                    <input
                      id="form-nombre" type="text" name="nombre"
                      value={formData.nombre} onChange={handleChange}
                      className="w-full h-14 border border-brown/10 rounded-[20px] px-5 bg-white text-brown text-base focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="form-email" className="block text-sm font-medium text-brown mb-1.5">Email</label>
                    <input
                      id="form-email" type="email" name="email"
                      value={formData.email} onChange={handleChange}
                      className="w-full h-14 border border-brown/10 rounded-[20px] px-5 bg-white text-brown text-base focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="form-telefono" className="block text-sm font-medium text-brown mb-1.5">Teléfono</label>
                    <input
                      id="form-telefono" type="tel" name="telefono"
                      value={formData.telefono} onChange={handleChange}
                      className="w-full h-14 border border-brown/10 rounded-[20px] px-5 bg-white text-brown text-base focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="form-localidad" className="block text-sm font-medium text-brown mb-1.5">Localidad</label>
                    <input
                      id="form-localidad" type="text" name="localidad"
                      value={formData.localidad} onChange={handleChange}
                      className="w-full h-14 border border-brown/10 rounded-[20px] px-5 bg-white text-brown text-base focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition-all"
                    />
                  </div>
                </div>

                <p className="text-sm font-semibold text-brown mt-8 mb-4">
                  Elegí tu plan de huevos
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {planChips.slice(0, 3).map((chip) => (
                    <Chip key={chip.value} chip={chip} selected={formData.plan === chip.value} onChange={handleChange} name="plan" />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3 max-w-[66%] mx-auto mt-3">
                  {planChips.slice(3).map((chip) => (
                    <Chip key={chip.value} chip={chip} selected={formData.plan === chip.value} onChange={handleChange} name="plan" />
                  ))}
                </div>

                {message && (
                  <p className={`text-sm text-center mt-5 py-3 px-4 rounded-2xl ${
                    message.type === 'success' ? 'bg-green/10 text-green-dark' : 'bg-red-50 text-red-600'
                  }`}>
                    {message.text}
                  </p>
                )}

                <motion.button
                  type="submit" disabled={loading}
                  className="w-full mt-8 h-16 rounded-full font-bold text-sm uppercase tracking-[0.125em] shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-[0_12px_30px_rgba(0,0,0,.18)] active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: '#7EA96F',
                    color: '#fff',
                  }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? 'Enviando…' : 'QUIERO MIS HUEVOS'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
