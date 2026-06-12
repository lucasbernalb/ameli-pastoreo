import { motion } from 'framer-motion';

const gallery = [
  {
    image: '/images/optimized/gallery-eating.webp',
    alt: 'Gallina alimentándose en el campo',
    label: 'Alimentación natural',
  },
  {
    image: '/images/optimized/gallery-egg.webp',
    alt: 'Huevo cocido',
    label: 'Pureza y sabor',
  },
  {
    image: '/images/optimized/gallery-field.webp',
    alt: 'Vista del gallinero en el campo',
    label: 'Vida al aire libre',
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export const PhotoGalleryA = () => {
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
            Vida en el campo
          </h2>
          <p className="text-lg text-[#8B6F5C] max-w-2xl mx-auto">
            Así es el día a día en Ameli Pastoreo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {gallery.map((item, i) => (
            <motion.div
              key={item.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={itemVariants}
              className="group relative rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="text-white font-semibold text-lg">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGalleryA;
