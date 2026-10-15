import { motion } from 'framer-motion';

type Photo = {
  src: string;
  alt: string;
  /** proporción del recorte: cambiarla es lo que arma el ritmo del mosaico */
  ratio: string;
  /** inclinación leve, como fotos pegadas en un álbum (solo desktop) */
  tilt: string;
  /** punto de encuadre para no cortar cabezas */
  focus?: string;
};

// Intercaladas: granja y producto. Ninguna se recorta a la fuerza a 4:3.
const photos: Photo[] = [
  { src: '/images/gallery/3 gallinas.webp', alt: 'Tres gallinas pastoreando', ratio: 'aspect-[4/5]', tilt: 'md:-rotate-[1.2deg]', focus: 'object-[50%_20%]' },
  { src: '/images/gallery/Docenas.webp', alt: 'Docenas de huevos', ratio: 'aspect-square', tilt: 'md:rotate-[1deg]' },
  { src: '/images/gallery/Gallina en el pasto.webp', alt: 'Gallina en el pasto', ratio: 'aspect-square', tilt: 'md:rotate-[0.8deg]', focus: 'object-[50%_30%]' },
  { src: '/images/gallery/Maples packaging.webp', alt: 'Maples para entrega', ratio: 'aspect-[3/4]', tilt: 'md:-rotate-[0.8deg]' },
  { src: '/images/gallery/Gallinas en el pasto.webp', alt: 'Gallinas pastoreando', ratio: 'aspect-[4/5]', tilt: 'md:rotate-[1.4deg]', focus: 'object-[50%_35%]' },
  { src: '/images/gallery/Huevos duros.webp', alt: 'Huevos duros', ratio: 'aspect-[3/4]', tilt: 'md:-rotate-[1deg]' },
  { src: '/images/gallery/Maple.webp', alt: 'Maple de huevos', ratio: 'aspect-[3/4]', tilt: 'md:rotate-[0.6deg]' },
  { src: '/images/gallery/Tortilla de papas.webp', alt: 'Tortilla de papas', ratio: 'aspect-[3/4]', tilt: 'md:-rotate-[1.3deg]' },
  { src: '/images/gallery/Yema compacta.webp', alt: 'Yema compacta', ratio: 'aspect-[3/4]', tilt: 'md:rotate-[1deg]' },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const Tile = ({ photo }: { photo: Photo }) => (
  <motion.figure
    variants={itemVariants}
    className={`group mb-3 md:mb-5 break-inside-avoid bg-[#FBF8F2] p-1.5 md:p-2.5 rounded-[4px] shadow-md hover:shadow-xl transition-all duration-500 md:hover:rotate-0 md:hover:-translate-y-1 ${photo.tilt}`}
  >
    <div className={`overflow-hidden rounded-[2px] ${photo.ratio}`}>
      <img
        src={photo.src}
        alt={photo.alt}
        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${photo.focus ?? ''}`}
        loading="lazy"
        decoding="async"
      />
    </div>
  </motion.figure>
);

export const GallerySection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden" style={{ backgroundColor: '#F5F0E8' }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'url("/texturas/278759-egg-shell.png")',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'multiply',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="columns-2 lg:columns-3 gap-3 md:gap-5"
        >
          {/* Tarjeta de texto: primera pieza del mosaico */}
          <motion.div
            variants={itemVariants}
            className="mb-3 md:mb-5 break-inside-avoid rounded-[6px] p-4 md:p-6 shadow-md [column-span:all] lg:[column-span:none]"
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
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white leading-tight mt-3">
              Vida en<br />Ameli Pastoreo
            </h2>
            <p className="text-white/80 text-base leading-relaxed mt-4">
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

          {photos.map((photo) => (
            <Tile key={photo.src} photo={photo} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
