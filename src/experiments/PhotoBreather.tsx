import { motion } from 'framer-motion';

export const PhotoBreather = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <img
        src="/images/optimized/gallery-field.webp"
        alt="Vista del campo"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/30" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4"
      >
        <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-light italic max-w-3xl mx-auto leading-relaxed">
          "Así de simple: gallinas felices, huevos increíbles."
        </p>
      </motion.div>
    </section>
  );
};

export default PhotoBreather;
