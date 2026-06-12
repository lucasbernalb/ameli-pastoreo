import { motion } from 'framer-motion';

export const PhotoProduct = () => {
  return (
    <section className="py-20 md:py-32 bg-[#FFF5E6]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="order-2 md:order-1"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5C4033] mb-6">
              Huevos de pastoreo
            </h2>
            <p className="text-lg text-[#8B6F5C] mb-6 leading-relaxed">
              Nuestros huevos vienen de gallinas criadas en libertad, alimentadas con
              granos naturales y pastura fresca. El resultado es un huevo de cáscara firme,
              yema color naranja intenso y un sabor que lo dice todo.
            </p>
            <p className="text-lg text-[#8B6F5C] mb-8 leading-relaxed">
              Producimos semanalmente y entregamos en Montevideo, Canelones y la costa.
              Pedí el tuyo y probá la diferencia.
            </p>
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-[#7B9E6B] to-[#5C7A4E] text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-98"
            >
              Comprar ahora
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="order-1 md:order-2"
          >
            <motion.img
              src="/images/optimized/product-eggs.webp"
              alt="Maple de huevos Ameli"
              className="w-full rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhotoProduct;
