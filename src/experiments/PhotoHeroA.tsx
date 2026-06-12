import { motion } from 'framer-motion';

export const PhotoHeroA = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src="/images/optimized/hero-alt.webp"
        alt="Campo Ameli Pastoreo"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/5" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img
            src="/logo-ameli/ameli-grande.png"
            alt="Ameli Pastoreo"
            className="w-56 mx-auto mb-8 drop-shadow-lg"
            loading="eager"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="text-lg sm:text-xl text-white/70 tracking-widest uppercase mb-4 font-light"
        >
          Del campo a tu mesa
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight mb-8"
        >
          Huevos de{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5C242] to-[#E8944A]">
            Pastoreo
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
        >
          <a
            href="#"
            className="inline-block bg-white text-[#5C4033] px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-98"
          >
            Conocé nuestra historia
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PhotoHeroA;
