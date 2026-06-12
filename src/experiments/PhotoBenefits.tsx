import { motion } from 'framer-motion';

const benefits = [
  {
    image: '/images/optimized/benefit-chickens.webp',
    title: 'Gallinas felices',
    description:
      'Criadas en pastoreo libre, con espacio, luz natural y alimentación balanceada. Su bienestar es nuestra prioridad.',
    alt: 'Gallinas en pastoreo libre',
  },
  {
    image: '/images/optimized/benefit-field.webp',
    title: 'Campo abierto',
    description:
      'Nuestras gallinas recorren libremente el campo todos los días. Eso hace que sus huevos sean más naturales y sabrosos.',
    alt: 'Gallinero al aire libre',
  },
  {
    image: '/images/optimized/benefit-eggs.webp',
    title: 'Huevos de calidad',
    description:
      'Yemas de color naranja intenso, cáscara firme y sabor auténtico. Así son los huevos de gallinas criadas con respeto.',
    alt: 'Huevos frescos en maple',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export const PhotoBenefits = () => {
  return (
    <section className="py-20 md:py-32 bg-[#FFFEF7]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5C4033] mb-4">
            Por qué elegirnos
          </h2>
          <p className="text-lg text-[#8B6F5C] max-w-2xl mx-auto">
            Todo empieza con gallinas felices. De eso se trata Ameli Pastoreo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
              className="group"
            >
              <div className="rounded-2xl overflow-hidden mb-5 shadow-lg">
                <img
                  src={benefit.image}
                  alt={benefit.alt}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#5C4033] mb-2">{benefit.title}</h3>
              <p className="text-[#8B6F5C] leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoBenefits;
