import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WHATSAPP_ORDER_URL } from '../config';
import { VideoOnHover } from './VideoOnHover';

const heroSlides = [
  { image: '/images/optimized/hero-sunset.webp', video: '/videos/video-gallinero-pasto-moviendose.mp4' },
  { image: '/images/optimized/chickens-group.webp' },
  { image: '/images/optimized/chickens-group2.webp' },
];

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const benefits = [
  { text: 'Gallinas criadas a campo abierto' },
  { text: 'Alimentación 100% natural' },
  { text: 'Entregas semanales sin compromiso' },
];

export const CinematicHero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={heroSlides[index].image}
          className="absolute inset-0"
          initial={{ x: '100%', scale: 1 }}
          animate={{ x: 0, scale: [1, 1.03] }}
          exit={{ x: '-100%', scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {heroSlides[index].video ? (
            <VideoOnHover
              image={heroSlides[index].image}
              video={heroSlides[index].video}
              alt="Campo Ameli Pastoreo"
              className="w-full h-full object-cover"
              containerClassName="w-full h-full"
            />
          ) : (
            <img
              src={heroSlides[index].image}
              alt="Campo Ameli Pastoreo"
              className="w-full h-full object-cover"
              loading="eager"
            />
          )}
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
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: 'rgba(245,194,66,.03)' }}
      />

      <div className="relative z-10 min-h-screen flex flex-col px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <motion.img
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          src="/logo-ameli/logo ameli corregido blanco.png"
          alt="Ameli Pastoreo"
          className="self-start w-28 md:w-36 pt-6 md:pt-10 drop-shadow-lg"
          loading="eager"
        />

        <div className="flex-1 flex flex-col justify-center">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.12, delayChildren: 0.25 }}
            className="max-w-2xl"
          >
            <motion.div variants={item}>
              <div className="w-12 h-px bg-gold/60 mb-3" />
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
                  className="relative text-xs md:text-sm tracking-[0.35em] uppercase font-semibold text-white"
                  style={{ textShadow: '0 1px 4px rgba(0,0,0,.4)' }}
                >
                  PRODUCTO ARTESANAL · PASTOREO LIBRE
                </span>
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-playfair font-bold text-white leading-[0.88] tracking-[-0.02em] mt-6 md:mt-8"
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
              className="text-white/90 max-w-lg mt-5 leading-relaxed font-semibold"
              style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.15rem)' }}
            >
              Naturales, frescos y producidos con amor.
              <br />
              Gallinas felices para una vida más sana.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap items-center gap-5 mt-8">
              <a
                href={WHATSAPP_ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
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

              <a
                href="#nosotros"
                className="inline-flex items-center gap-3 text-white/85 hover:text-white font-quincho text-lg transition-all duration-300 group"
              >
                Conocé nuestra historia
                <span className="w-8 h-px bg-gold/60 group-hover:w-12 transition-all duration-300" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex gap-2 pb-6 md:pb-8 justify-center"
        >
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ir a slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? 'bg-white w-8' : 'bg-white/40 w-1.5'
              }`}
            />
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-6 md:bottom-10 right-6 md:right-12 lg:right-20 backdrop-blur-md bg-black/30 border border-white/10 rounded-xl p-4 md:p-5 space-y-2.5 max-w-[200px] md:max-w-[220px]"
      >
        {benefits.map((b, i) => (
          <div key={i} className="flex items-center gap-2.5 text-white/80">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D4A544"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-xs md:text-sm leading-snug font-medium">{b.text}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default CinematicHero;
