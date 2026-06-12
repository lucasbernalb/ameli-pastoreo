import { motion } from 'framer-motion';

export const PhotoQualityA = () => {
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
            <img
              src="/images/optimized/quality-yolk.webp"
              alt="Yema de huevo Ameli"
              className="w-full rounded-2xl shadow-xl"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="order-1 md:order-2"
          >
            <span className="text-sm tracking-widest text-[#E8944A] uppercase font-semibold mb-3 block">
              La calidad
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5C4033] mb-6 leading-tight">
              La diferencia está en la{' '}
              <span className="text-[#E8944A]">yema</span>
            </h2>
            <p className="text-lg text-[#8B6F5C] mb-6 leading-relaxed">
              Una yema de color naranja intenso no es casualidad. Es el resultado de una
              alimentación natural, pastura fresca y gallinas que viven felices.
            </p>
            <p className="text-lg text-[#8B6F5C] mb-8 leading-relaxed">
              Nuestros huevos tienen cáscara firme, yema cremosa y un sabor auténtico que
              nota apenas los probás.
            </p>
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-[#7B9E6B] to-[#5C7A4E] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-98"
            >
              Pedí tus huevos
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhotoQualityA;
