import { motion } from 'framer-motion';
import { PLANS_DATA, PLAN_VALUE_MAP } from './data/plans';
import { usePlanContext } from './plan-context';
import { scrollToSection } from '@/lib/scrollTo';

type Plan = (typeof PLANS_DATA)[number];

/** 1400 -> "1.400". Manual para que se vea igual en cualquier celular, sin depender del idioma del dispositivo. */
const formatPrice = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');

export const PlanCard = ({ plan, index, carousel }: { plan: Plan; index: number; carousel?: boolean }) => {
  const { onSelectPlan } = usePlanContext();
  return (
    <motion.div
      initial={{ opacity: 0, y: carousel ? 30 : 40 }}
      {...(carousel
        ? { animate: { opacity: 1, y: 0 } }
        : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-50px' } }
      )}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      {...(carousel ? {} : { whileHover: { y: -4, transition: { duration: 0.3 } } })}
      className={`relative w-full max-w-sm rounded-[28px] px-6 md:px-8 py-6 md:py-8 transition-all duration-300 flex flex-col h-full ${
        plan.popular
          ? 'text-white shadow-[0_25px_60px_rgba(0,0,0,0.18)]'
          : 'bg-card-texture text-brown shadow-xl'
      }`}
    >
      {plan.popular ? (
        <>
          <div className="absolute inset-0 rounded-[28px] overflow-hidden bg-gradient-to-b from-[#89B178] to-[#729563]">
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: 'url("/texturas/278759-egg-shell.png")',
                backgroundRepeat: 'repeat',
                mixBlendMode: 'multiply',
              }}
            />
          </div>
          <motion.span
            animate={{
              boxShadow: [
                '0 0 0px rgba(245,194,66,0)',
                '0 0 14px rgba(245,194,66,0.5), 0 0 30px rgba(245,194,66,0.2)',
                '0 0 0px rgba(245,194,66,0)',
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap text-[11px] uppercase tracking-[0.2em] font-bold text-brown bg-gold px-4 py-1.5 rounded-full"
          >
            Más elegido
          </motion.span>
        </>
      ) : null}

      <div
        className={`absolute inset-0 rounded-[28px] pointer-events-none ${
          plan.popular ? 'opacity-[0.04] z-0' : 'opacity-[0.07]'
        }`}
        style={{
          backgroundImage: 'url("/texturas/E4D9C4-low-contrast-linen.png")',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'multiply',
        }}
      />
      {!plan.popular && (
        <div
          className="absolute inset-0 rounded-[28px] opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: 'url("/texturas/278759-egg-shell.png")',
            backgroundRepeat: 'repeat',
            mixBlendMode: 'multiply',
          }}
        />
      )}

      <div className="relative z-10 flex flex-col flex-1">
        <div className="mb-5">
          <p
            className={`font-playfair font-bold leading-[0.85] text-7xl md:text-[5.5rem] [font-variant-numeric:lining-nums] ${
              plan.popular ? 'text-white' : 'text-brown'
            }`}
          >
            {plan.label}
          </p>
          {/* Subrayado de marcador, dibujado a mano */}
          <svg viewBox="0 0 100 10" className="w-24 h-2.5 mt-1.5 overflow-visible" aria-hidden="true">
            <path
              d="M2 6 C 20 2, 40 9, 62 5 S 92 4, 98 6"
              fill="none"
              stroke="#F5C242"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <p
            className={`text-[12px] uppercase tracking-[0.25em] font-semibold mt-2.5 ${
              plan.popular ? 'text-white/90' : 'text-[#7A5F4F]'
            }`}
          >
            huevos por semana
          </p>
        </div>

        <h3
          className={`text-2xl font-playfair font-bold leading-tight ${
            plan.popular ? 'text-white' : 'text-brown'
          }`}
        >
          {plan.title}
        </h3>

        {plan.price ? (
          <p
            className={`text-3xl md:text-4xl font-bold mt-1 ${
              plan.popular ? 'text-white' : 'text-brown'
            }`}
          >
            ${formatPrice(plan.price)}
          </p>
        ) : (
          <p
            className={`text-base font-medium italic mt-1 ${
              plan.popular ? 'text-white/70' : 'text-[#6B4F3F]/80'
            }`}
          >
            {plan.customPriceLabel}
          </p>
        )}

        <div className={`h-px my-5 ${plan.popular ? 'bg-white/25' : 'bg-brown/10'}`} />

        <ul className="space-y-1.5 mb-6 flex-1">
          {plan.benefits.map((benefit) => (
            <li
              key={benefit}
              className={`flex items-center gap-2 text-[13px] ${
                plan.popular ? 'text-white/90' : 'text-brown/85 font-medium'
              }`}
            >
              <svg
                className={`w-3 h-3 flex-shrink-0 ${plan.popular ? 'text-[#C7E0B8]' : 'text-green'}`}
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="2 7 5.5 10.5 12 4" />
              </svg>
              {benefit}
            </li>
          ))}
        </ul>

        <button
          onClick={() => {
            onSelectPlan(PLAN_VALUE_MAP[plan.value]);
            scrollToSection('contact-form');
          }}
          className={`inline-flex items-center justify-center w-full h-14 md:h-12 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 ${
            plan.popular
              ? 'bg-white text-[#5C7A4E] shadow-md'
              : 'bg-gradient-to-r from-green to-green-dark text-white shadow-md'
          }`}
          aria-label={`Lo quiero: ${plan.title}`}
        >
          Lo quiero
        </button>
      </div>
    </motion.div>
  );
};
