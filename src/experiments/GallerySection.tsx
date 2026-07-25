import { motion } from 'framer-motion';

const images = [
  { src: '/images/gallery/3 gallinas.webp', alt: 'Tres gallinas pastoreando' },
  { src: '/images/gallery/Gallina en el pasto.webp', alt: 'Gallina en el pasto' },
  { src: '/images/gallery/Gallinas en el pasto.webp', alt: 'Gallinas pastoreando' },
  { src: '/images/gallery/Docenas.webp', alt: 'Docenas de huevos' },
  { src: '/images/gallery/Maples packaging.webp', alt: 'Maples para entrega' },
  { src: '/images/gallery/Huevos duros.webp', alt: 'Huevos duros' },
  { src: '/images/gallery/Tortilla de papas.webp', alt: 'Tortilla de papas' },
  { src: '/images/gallery/Maple.webp', alt: 'Maple de huevos' },
  { src: '/images/gallery/Yema compacta.webp', alt: 'Yema compacta' },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const Img = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
  <div className={`relative rounded-[16px] overflow-hidden shadow-md group aspect-[4/3] ${className ?? ''}`}>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
  </div>
);

export const GallerySection = () => {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden" style={{ backgroundColor: '#F5F0E8' }}>
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4"
        >
          {/* Img 1 - large, spans 3 rows on left */}
          <motion.div
            variants={itemVariants}
            className="md:col-start-1 md:row-span-3 relative rounded-[16px] overflow-hidden shadow-xl group"
          >
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-full object-cover min-h-[220px] lg:min-h-[380px] transition-transform duration-700 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>

          {/* Text card - top right */}
          <motion.div
            variants={itemVariants}
            className="md:col-start-2 md:row-start-1 rounded-[16px] p-5 md:p-6 shadow-md"
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
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mt-2">
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

          {/* Img 2 - right column, row 2 */}
          <motion.div variants={itemVariants} className="md:col-start-2 md:row-start-2">
            <Img src={images[1].src} alt={images[1].alt} />
          </motion.div>

          {/* Img 3 - right column, row 3 */}
          <motion.div variants={itemVariants} className="md:col-start-2 md:row-start-3">
            <Img src={images[2].src} alt={images[2].alt} />
          </motion.div>

          {/* Remaining 6 images in pairs */}
          {images.slice(3).map((img, i) => (
            <motion.div
              key={img.alt}
              variants={itemVariants}
              className={i % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}
            >
              <Img src={img.src} alt={img.alt} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
