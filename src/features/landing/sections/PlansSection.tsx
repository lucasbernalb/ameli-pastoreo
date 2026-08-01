import { motion } from 'framer-motion';
import { PLANS_DATA } from '../plans/data/plans';
import { PlanCard } from '../plans/PlanCard';
import { PlansCarousel } from '../plans/PlansCarousel';

const plans = PLANS_DATA;

export const PlansSection = () => {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden" style={{ backgroundColor: '#4A3426' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url("/images/gallery/Maples%20packaging.webp")',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-[rgba(28,20,14,0.7)] pointer-events-none" />
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

        <div className="md:hidden mb-8">
          <PlansCarousel />
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto justify-items-center">
          {plans.slice(0, 3).map((plan, i) => (
            <PlanCard key={plan.value} plan={plan} index={i} />
          ))}
        </div>

        <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-full md:max-w-3xl mx-auto mt-8 justify-items-center">
          {plans.slice(3).map((plan, i) => (
            <PlanCard key={plan.value} plan={plan} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
