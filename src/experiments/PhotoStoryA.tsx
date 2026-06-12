import { motion } from 'framer-motion';

export const PhotoStoryA = () => {
  return (
    <section className="py-20 md:py-32 bg-[#FFFEF7]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="text-sm tracking-widest text-[#7B9E6B] uppercase font-semibold mb-3 block">
              El origen
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5C4033] mb-6 leading-tight">
              Criadas con{' '}
              <span className="text-[#7B9E6B]">respeto</span>
            </h2>
            <p className="text-lg text-[#8B6F5C] mb-6 leading-relaxed">
              En Ameli Pastoreo, nuestras gallinas viven en libertad. Recorren el campo
              todos los días, se alimentan de pastura fresca y descansan cuando el sol se
              pone.
            </p>
            <p className="text-lg text-[#8B6F5C] leading-relaxed">
              Creemos que un huevo de calidad empieza por el bienestar del animal. Por eso
              priorizamos el espacio, la luz natural y una alimentación balanceada.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <img
              src="/images/optimized/story-farm.webp"
              alt="Gallinas en el gallinero"
              className="w-full rounded-2xl shadow-xl"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhotoStoryA;
