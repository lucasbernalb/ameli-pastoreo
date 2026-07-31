import { motion } from 'framer-motion';

export const PhotoHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src="/images/optimized/hero-bg.webp"
        alt="Campo Ameli Pastoreo"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img
            src="/logo-ameli/logo-blanco.png"
            alt="Ameli Pastoreo"
            className="w-48 mx-auto mb-8 drop-shadow-lg"
            loading="eager"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6"
        >
          Huevos de{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5C242] to-[#E8944A]">
            Pastoreo
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 font-light"
        >
          Naturales, frescos y producidos con amor. Del campo a tu mesa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#"
            className="bg-gradient-to-r from-[#7B9E6B] to-[#5C7A4E] text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-98"
          >
            Conocé nuestros productos
          </a>
          <a
            href="#"
            className="border-2 border-white/40 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
          >
            Nuestra historia
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PhotoHero;
