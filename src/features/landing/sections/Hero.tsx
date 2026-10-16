import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToSection } from '@/lib/scrollTo';
const heroSlides = [
  { image: '/images/optimized/chickens-group.webp' },
  { image: '/images/optimized/chickens-group2.webp' },
];

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const benefits = [
  { text: 'Bienestar animal' },
  { text: 'Pastoreo rotativo regenerativo' },
  { text: 'Entregas semanales (producto fresco)' },
  { text: '+ Vitaminas' },
  { text: '+ OMEGA 3' },
];

export const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={heroSlides[index].image}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        >
          <motion.img
            src={heroSlides[index].image}
            alt="Campo Ameli Pastoreo"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 7, ease: 'linear' }}
          />
        </motion.div>
      </AnimatePresence>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(0,0,0,.6) 0%, rgba(0,0,0,.3) 50%, rgba(0,0,0,.1) 100%)',
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 180px rgba(0,0,0,.45)' }}
      />

      <div
        className="absolute inset-x-0 bottom-0 h-56 md:h-44 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(26,17,12,.82) 0%, rgba(26,17,12,.45) 55%, transparent 100%)' }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: 'rgba(245,194,66,.03)' }}
      />

      <div className="relative z-10 min-h-screen flex flex-col px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <motion.img
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          src="/logo-ameli/logo-blanco.png"
          alt="Ameli Pastoreo"
          className="self-start w-28 md:w-36 pt-6 md:pt-10 drop-shadow-lg"
          loading="eager"
        />

        <div className="flex-1 min-h-0 flex flex-col">
          {/* Badge - anchored at top on mobile, animated as part of stagger */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.12, delayChildren: 0.25 }}
            className="max-w-2xl pt-10 md:pt-6"
          >
            <motion.div variants={item}>
              <span className="inline-block relative">
                <span
                  className="absolute inset-0 scale-110 scale-x-[1.15] pointer-events-none"
                  style={{
                    background: 'rgba(245,194,66,0.8)',
                    borderRadius: '12% 6% 18% 6% / 6% 16% 4% 18%',
                    transform: 'rotate(-1deg) scale(1.08) scaleX(1.12)',
                  }}
                />
                <span
                  className="relative text-[0.8rem] md:text-lg tracking-[0.22em] md:tracking-[0.35em] uppercase font-semibold text-white"
                  style={{ textShadow: '0 1px 4px rgba(0,0,0,.4)' }}
                >
                  gallinas libres en pastoreo rotativo
                </span>
              </span>
            </motion.div>
          </motion.div>

          {/* H1, subtitle, CTA - vertically centered */}
          <div className="flex-1 min-h-0 flex flex-col justify-center -mt-[95px] pb-16 md:mt-0 md:pb-12">
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.12, delayChildren: 0.25 }}
              className="max-w-2xl"
            >
              <motion.h1
                variants={item}
                className="font-playfair font-bold text-white leading-[0.88] tracking-[-0.02em] mt-0 md:mt-8"
                style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
              >
                HUEVOS DE
                <br />
                <span className="relative inline-block">
                  <span
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'rgba(92,64,51,0.8)',
                      borderRadius: '16% 4% 20% 4% / 4% 18% 4% 20%',
                      transform: 'rotate(-1.5deg) scaleX(1.15)',
                    }}
                  />
                  <span
                    className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#F3D27A] via-[#D4A544] to-[#F6E09B]"
                    style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,.4))' }}
                  >
                    CAMPO
                  </span>
                </span>
              </motion.h1>

              <motion.p
                variants={item}
                className="text-white/90 max-w-lg mt-6 md:mt-5 leading-relaxed font-semibold"
                style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}
              >
                Producto artesanal, calidad superior
              </motion.p>

              <motion.div variants={item} className="flex items-center gap-5 mt-10 md:mt-8">
                <a
                  href="#planes"
                  onClick={(e) => { e.preventDefault(); scrollToSection('planes'); }}
                  className="relative inline-flex items-center justify-center bg-[#5C7A4E] text-white px-8 py-5 rounded-full font-bold text-base shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-3xl active:translate-y-0 overflow-hidden"
                >
                  <div
                    className="absolute inset-0 opacity-[0.08] pointer-events-none"
                    style={{
                      backgroundImage: 'url("/texturas/F5F0E8-black-thread-light.png")',
                      backgroundRepeat: 'repeat',
                      mixBlendMode: 'multiply',
                    }}
                  />
                  <span className="relative z-10">Hacé tu pedido</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="shrink-0 pb-7 md:pb-9 pr-16 md:pr-0"
        >
          <div className="flex gap-2 mb-5">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ir a slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? 'bg-gold w-8' : 'bg-white/40 w-1.5'
                }`}
              />
            ))}
          </div>

          <ul className="flex flex-wrap gap-x-7 gap-y-2.5 border-t border-white/15 pt-4">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-center gap-2 text-white/90">
                <svg
                  className="shrink-0"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F5C242"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span
                  className="text-[0.8rem] md:text-sm leading-snug font-medium"
                  style={{ textShadow: '0 1px 3px rgba(0,0,0,.5)' }}
                >
                  {b.text}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
