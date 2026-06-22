import { motion } from 'framer-motion';

export const PhotoProductHero = () => {
  return (
    <section className="py-20 md:py-32 bg-[#FFF5E6]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="text-sm tracking-widest text-[#7B9E6B] uppercase font-semibold mb-3 block">
              El producto
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5C4033] mb-6 leading-tight">
              Huevos de{' '}
              <span className="text-[#E8944A]">pastoreo</span>
            </h2>
            <p className="text-lg text-[#8B6F5C] mb-6 leading-relaxed">
              Yema naranja intensa, cáscara firme, sabor auténtico. Así son los huevos de
              gallinas criadas con respeto y alimentación natural.
            </p>
            <p className="text-lg text-[#8B6F5C] mb-8 leading-relaxed">
              Producimos semanalmente. Entregamos en Montevideo, Canelones y la costa.
            </p>
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-[#7B9E6B] to-[#5C7A4E] text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-98"
            >
              Pedí tus huevos
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[#F5C242]/10 to-[#E8944A]/10 rounded-3xl blur-2xl" />
            <img
              src="/images/optimized/product-eggs.webp"
              alt="Huevos Ameli Pastoreo"
              className="w-full rounded-2xl shadow-2xl relative"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhotoProductHero;
