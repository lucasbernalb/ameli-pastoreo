import { motion } from 'framer-motion';

export const PhotoFullBleed = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src="/images/optimized/story-farm.webp"
        alt="Gallinas en pastoreo libre"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />

      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-widest text-[#F5C242] uppercase font-semibold mb-4 block"
        >
          Producción natural
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
        >
          El campo es su hogar
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-white/80 max-w-2xl mx-auto mt-6 font-light"
        >
          Nuestras gallinas recorren libremente más de una hectárea de campo natural todos
          los días. Eso hace que sus huevos sean más sabrosos, más naturales y de mejor
          calidad.
        </motion.p>
      </div>
    </section>
  );
};

export default PhotoFullBleed;
