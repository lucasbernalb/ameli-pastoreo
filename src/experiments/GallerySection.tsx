import { motion } from 'framer-motion';

const items = [
  {
    image: '/images/optimized/hero-field.webp',
    alt: 'Campo y cielo abierto',
    size: 'large',
  },
  {
    image: '/images/optimized/chickens-group2.webp',
    alt: 'Gallinas pastoreando en libertad',
    size: 'small',
  },
  {
    image: '/images/optimized/food-eggs.webp',
    alt: 'Huevos frescos de pastoreo',
    size: 'small',
  },
];

const containerVariants = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const GallerySection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: '#F5F0E8' }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'url("/texturas/278759-egg-shell.png")',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'multiply',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-col md:grid md:grid-cols-[1.4fr_1fr] gap-6 md:gap-8 items-start"
        >
          <motion.div
            variants={itemVariants}
            className="order-1 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 rounded-[24px] p-6 md:p-8 shadow-md"
            style={{
              backgroundColor: '#5C7A4E',
              backgroundImage: 'url("/texturas/5C7A4E-low-contrast-linen.png")',
              backgroundRepeat: 'repeat',
            }}
          >
            <span className="inline-block relative">
              <span
                className="absolute inset-0 scale-110 scale-x-[1.15] pointer-events-none"
                style={{
                  background: 'rgba(245,194,66,0.8)',
                  borderRadius: '12% 6% 18% 6% / 6% 16% 4% 18%',
                  transform: 'rotate(-1deg) scale(1.08) scaleX(1.12)',
                }}
              />
              <span className="relative text-xs tracking-[0.25em] uppercase font-semibold text-white">
                Galería
              </span>
            </span>
            <h2 className="font-playfair text-4xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mt-2">
              Vida en<br />Ameli Pastoreo
            </h2>
            <p className="text-white/75 text-base leading-relaxed mt-4">
              Cada imagen cuenta una historia de respeto por la naturaleza,
              alimentación consciente y gallinas que viven en libertad.
            </p>
            <a
              href="#nosotros"
              className="inline-flex items-center gap-3 text-gold font-medium mt-6 group/link"
            >
              Descubrí nuestra historia
              <span className="w-6 h-px bg-gold/60 group-hover/link:w-10 transition-all duration-300" />
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="order-2 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 relative rounded-[24px] overflow-hidden shadow-xl group"
          >
            <img
              src={items[0].image}
              alt={items[0].alt}
              className="w-full h-full object-cover min-h-[320px] lg:min-h-[600px] transition-transform duration-700 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>

          <div className="contents md:flex md:flex-col md:gap-6 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3">
            {items.slice(1).map((item, i) => (
              <motion.div
                key={item.alt}
                variants={itemVariants}
                className={`relative rounded-[24px] overflow-hidden shadow-md group ${i === 0 ? 'order-3' : 'order-4'} md:order-none`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover min-h-[200px] md:min-h-[220px] transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
