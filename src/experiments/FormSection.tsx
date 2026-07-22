import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePlanContext } from './PlanContext';
import { WHATSAPP_ORDER_URL } from '../config';
import whatsappIcon from '../assets/icons/whatsapp.svg';

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

type CountryCode = { code: string; flag: string; label: string };

const countryCodes: CountryCode[] = [
  { code: '+598', flag: '🇺🇾', label: 'Uruguay' },
  { code: '+54', flag: '🇦🇷', label: 'Argentina' },
  { code: '+55', flag: '🇧🇷', label: 'Brasil' },
  { code: '+56', flag: '🇨🇱', label: 'Chile' },
  { code: '+595', flag: '🇵🇾', label: 'Paraguay' },
  { code: '+591', flag: '🇧🇴', label: 'Bolivia' },
  { code: '+51', flag: '🇵🇪', label: 'Perú' },
  { code: '+1', flag: '🇺🇸', label: 'EE.UU.' },
  { code: '+34', flag: '🇪🇸', label: 'España' },
];

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
      <span className={`text-[10px] font-semibold block leading-tight ${
        selected ? 'text-white/80' : 'text-brown-mid/90'
      }`}>
        por semana
      </span>
      <span className={`text-xs font-semibold block mt-0.5 ${
        selected ? 'text-white/80' : 'text-brown-mid'
      }`}>
        {chip.subtitle}
      </span>
    </div>
  </motion.label>
);

export const FormSection = () => {
  const { selectedPlan, onSelectPlan } = usePlanContext();
  const [formData, setFormData] = useState<FormData>({
    nombre: '', email: '', telefono: '', localidad: '', plan: '',
  });
  const [countryCode, setCountryCode] = useState('+598');
  const [customQuantity, setCustomQuantity] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const isPersonalized = formData.plan.includes('Personalizado');

  const sanitizeName = (value: string) => value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]/g, '').slice(0, 50);
  const sanitizeLocalidad = (value: string) => value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s\-]/g, '').slice(0, 50);
  const sanitizeTelefono = (value: string) => value.replace(/\D/g, '').slice(0, 15);
  const stripHtml = (value: string) => value.replace(/<[^>]*>/g, '');

  useEffect(() => {
    if (selectedPlan) {
      setFormData((prev) => ({ ...prev, plan: selectedPlan }));
      if (!selectedPlan.includes('Personalizado')) {
        setCustomQuantity('');
      }
    }
  }, [selectedPlan]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let sanitized = value;
    if (name === 'nombre') sanitized = sanitizeName(value);
    else if (name === 'localidad') sanitized = sanitizeLocalidad(value);
    else if (name === 'telefono') sanitized = sanitizeTelefono(value);
    setFormData((prev) => ({ ...prev, [name]: sanitized }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
    if (name === 'plan') {
      onSelectPlan(value);
    }
  };

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'nombre':
        if (!value.trim()) return 'El nombre es obligatorio.';
        if (value.trim().length < 2) return 'El nombre debe tener al menos 2 caracteres.';
        return '';
      case 'email':
        if (!value.trim()) return 'El email es obligatorio.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Ingresá un email válido.';
        if (value.length > 100) return 'El email es demasiado largo.';
        return '';
      case 'telefono':
        if (!value.trim()) return 'El teléfono es obligatorio.';
        if (value.length < 4) return 'Ingresá al menos 4 dígitos.';
        return '';
      case 'localidad':
        if (!value.trim()) return 'La localidad es obligatoria.';
        if (value.trim().length < 2) return 'Ingresá una localidad válida.';
        return '';
      default:
        return '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fieldErrors: Record<string, string> = {};
    let hasError = false;
    for (const field of ['nombre', 'email', 'telefono', 'localidad'] as const) {
      const err = validateField(field, formData[field]);
      if (err) { fieldErrors[field] = err; hasError = true; }
    }
    if (!formData.plan) {
      fieldErrors.plan = 'Seleccioná un plan.';
      hasError = true;
    }
    if (isPersonalized) {
      const qty = parseInt(customQuantity, 10);
      if (!qty || qty < 31) {
        fieldErrors.customQuantity = 'Indicá una cantidad mínima de 31 huevos por semana.';
        hasError = true;
      }
    }
    if (hasError) {
      setErrors(fieldErrors);
      return;
    }
    setLoading(true);
    setMessage(null);
    try {
      const finalPlan = isPersonalized && customQuantity
        ? `Personalizado - ${customQuantity} huevos/semana`
        : formData.plan;
      const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
      if (!scriptUrl) {
        setMessage({ type: 'error', text: 'Error de configuración. Contactanos por WhatsApp.' });
        setLoading(false);
        return;
      }
      const sanitizedData = {
        nombre: stripHtml(formData.nombre.trim()),
        email: stripHtml(formData.email.trim()),
        telefono: `${countryCode} ${formData.telefono.trim()}`,
        localidad: stripHtml(formData.localidad.trim()),
        plan: finalPlan,
      };
      const params = new URLSearchParams({ ...sanitizedData, origen: 'Landing Cinematic' });
      await fetch(scriptUrl, { method: 'POST', mode: 'no-cors', body: params });
      setMessage({ type: 'success', text: '¡Gracias! Te contactaremos en menos de 48 hs.' });
      setFormData({ nombre: '', email: '', telefono: '', localidad: '', plan: '' });
      setCustomQuantity('');
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

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left max-w-3xl mx-auto"
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
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F8F5F0] leading-tight mb-6 uppercase">
            Del{' '}
            <span className="text-gold">campo</span>{' '}
            a tu mesa
          </h2>
          <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0" style={{ color: 'rgba(248,245,240,.85)' }}>
            Completá tus datos y te contactamos para coordinar tu entrega semanal.
          </p>

          <ul className="space-y-3 mb-10 max-w-2xl mx-auto md:mx-0">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3" style={{ color: 'rgba(248,245,240,.92)' }}>
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-gold" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 10 8 15 17 5" />
                </svg>
                <span className="text-base">{benefit}</span>
              </li>
            ))}
          </ul>

          <a
            href={WHATSAPP_ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-full font-semibold text-sm shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
          >
            <img
              src={whatsappIcon}
              alt="WhatsApp"
              className="w-5 h-5"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            Hablar por WhatsApp
          </a>
        </motion.div>

        <motion.div id="contact-form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 md:mt-16 max-w-2xl mx-auto"
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
              <form className="p-6 md:p-10 relative" onSubmit={handleSubmit}>
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
                {/* Mobile: 2+2+1 */}
                <div className="grid grid-cols-2 gap-3 sm:hidden">
                  {planChips.slice(0, 2).map((chip) => (
                    <Chip key={chip.value} chip={chip} selected={formData.plan === chip.value} onChange={handleChange} name="plan" />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3 mt-3 sm:hidden">
                  {planChips.slice(2, 4).map((chip) => (
                    <Chip key={chip.value} chip={chip} selected={formData.plan === chip.value} onChange={handleChange} name="plan" />
                  ))}
                </div>
                <div className="mt-3 sm:hidden flex justify-center">
                  <Chip chip={planChips[4]} selected={formData.plan === planChips[4].value} onChange={handleChange} name="plan" />
                </div>
                {/* Desktop/tablet: 3+2 */}
                <div className="hidden sm:grid sm:grid-cols-3 gap-3">
                  {planChips.slice(0, 3).map((chip) => (
                    <Chip key={chip.value} chip={chip} selected={formData.plan === chip.value} onChange={handleChange} name="plan" />
                  ))}
                </div>
                <div className="hidden sm:grid sm:grid-cols-2 gap-3 max-w-[66%] mx-auto mt-3">
                  {planChips.slice(3).map((chip) => (
                    <Chip key={chip.value} chip={chip} selected={formData.plan === chip.value} onChange={handleChange} name="plan" />
                  ))}
                </div>

                <AnimatePresence>
                  {isPersonalized && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="mt-6">
                        <label htmlFor="custom-quantity" className="block text-sm font-medium text-brown mb-1.5">
                          ¿Cuántos huevos necesitás por semana?
                        </label>
                        <input
                          id="custom-quantity"
                          type="number"
                          value={customQuantity}
                          onChange={(e) => setCustomQuantity(e.target.value.replace(/\D/g, ''))}
                          placeholder="Ej: 36, 45 o 60"
                          min="31"
                          className="w-full h-14 border border-brown/10 rounded-[20px] px-5 bg-white text-brown text-base focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition-all"
                        />
                        <p className="text-xs text-brown-mid/70 mt-2 leading-relaxed">
                          Indicá una cantidad aproximada. Nuestro equipo calculará el plan ideal y te enviará una propuesta personalizada.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

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
                  {loading ? 'Enviando…' : 'QUIERO MI PLAN'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
  );
};

export default FormSection;
