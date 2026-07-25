import { motion } from 'framer-motion';
import { PLANS_DATA, PLAN_VALUE_MAP } from './data/plans';
import { usePlanContext } from './PlanContext';
import { scrollToSection } from '../lib/scrollTo';

const plans = PLANS_DATA;

export const PlansSection = () => {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden" style={{ backgroundColor: '#4A3426' }}>
      <div
        className="absolute inset-0 opacity-[0.2] pointer-events-none"
        style={{
          backgroundImage: 'url("/texturas/#5C4033dark-wood.png")',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: 'url("/texturas/brown-gravel.png")',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'url("/texturas/278759-egg-shell.png")',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block relative mb-3">
            <span
              className="absolute inset-0 scale-110 scale-x-[1.15] pointer-events-none"
              style={{
                background: 'rgba(245,194,66,0.8)',
                borderRadius: '12% 6% 18% 6% / 6% 16% 4% 18%',
                transform: 'rotate(-1deg) scale(1.08) scaleX(1.12)',
              }}
            />
            <span className="relative text-lg md:text-xl tracking-[0.2em] uppercase font-semibold text-white">
              Nuestros planes
            </span>
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Elegí el que mejor se adapte a vos
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mt-4">
            Entregas semanales en Montevideo, Ciudad de la costa y La costa de Oro
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto justify-items-center">
          {plans.slice(0, 3).map((plan, i) => (
            <PlanCard key={plan.value} plan={plan} index={i} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-full md:max-w-3xl mx-auto mt-8 justify-items-center">
          {plans.slice(3).map((plan, i) => (
            <PlanCard key={plan.value} plan={plan} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PlanCard = ({ plan, index }: { plan: (typeof plans)[number]; index: number }) => {
  const { onSelectPlan } = usePlanContext();
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
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
            className="relative z-10 inline-block text-[11px] uppercase tracking-[0.2em] font-bold text-brown bg-gold px-3 py-1 rounded-full mb-4"
          >
            Más elegido
          </motion.span>
        </>
      ) : (
        <div className="mb-4">
          <div className="h-[21px]" />
        </div>
      )}

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

      <div className={`relative z-10 flex flex-col flex-1`}>
          <div
            className={`inline-block px-4 py-2.5 rounded-xl mb-4 ${
              plan.popular
                ? 'bg-white/20'
                : 'bg-[#5C7A4E]/15'
            }`}
          >
            <p
              className={`text-6xl md:text-7xl font-bold leading-[0.9] mb-0.5 ${
                plan.popular ? 'text-white' : 'text-brown'
              }`}
            >
              {plan.label}
            </p>
            <p
              className={`text-[13px] uppercase tracking-[0.25em] font-semibold ${
                plan.popular ? 'text-white/90' : 'text-[#7A5F4F]'
              }`}
            >
              huevos por semana
            </p>
          </div>

          <h3
            className={`text-xl font-playfair font-bold ${
              plan.popular ? 'text-white' : 'text-brown'
            }`}
          >
            {plan.title}
          </h3>

          {plan.price ? (
            <p
              className={`text-3xl md:text-4xl font-bold mt-1 mb-5 ${
                plan.popular ? 'text-white' : 'text-brown'
              }`}
            >
              ${plan.price.toLocaleString()}
            </p>
          ) : (
            <p
              className={`text-base font-medium italic mt-1 mb-5 ${
                plan.popular ? 'text-white/70' : 'text-[#6B4F3F]/80'
              }`}
            >
              {plan.customPriceLabel}
            </p>
          )}

          <ul className="space-y-2 mb-5">
            {plan.benefits.map((benefit) => (
              <li
                key={benefit}
                className={`flex items-center gap-2 text-sm ${
                  plan.popular ? 'text-white/85' : 'text-brown font-medium'
                }`}
              >
                <svg
                  className={`w-3.5 h-3.5 flex-shrink-0 ${
                    plan.popular ? 'text-[#C7E0B8]' : 'text-green'
                  }`}
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

export default PlansSection;
