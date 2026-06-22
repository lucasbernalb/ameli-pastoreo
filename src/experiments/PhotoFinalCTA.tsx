import { motion } from 'framer-motion';

export const PhotoFinalCTA = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <img
        src="/images/optimized/hero-alt.webp"
        alt="Campo Ameli Pastoreo"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          ¿Listo para probar{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5C242] to-[#E8944A]">
            la diferencia
          </span>
          ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light"
        >
          Pedí tus huevos de pastoreo y recibilos frescos en tu casa. Del campo a tu mesa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#"
            className="bg-gradient-to-r from-[#7B9E6B] to-[#5C7A4E] text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-98"
          >
            Hacé tu pedido
          </a>
          <a
            href="#"
            className="border-2 border-white/40 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
          >
            Contactanos
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-white/50 text-sm"
        >
          Montevideo, Canelones y costa — Entrega semanal
        </motion.p>
      </div>
    </section>
  );
};

export default PhotoFinalCTA;
