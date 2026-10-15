import { motion } from 'framer-motion';

const values = [
  'Bienestar animal',
  'Alimentación consciente',
  'Impulso a la producción agroecológica familiar',
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, delay, ease: 'easeOut' as const },
});

/** Fotos de la granja pegadas como en un álbum casero: marco crema, cinta y un poco de inclinación. */
const FarmPhotos = ({ className = '' }: { className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, rotate: 0 }}
    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 1, ease: 'easeOut' }}
    className={`relative mx-auto w-full max-w-[340px] md:max-w-[400px] pb-14 md:pb-16 ${className}`}
  >
    <figure className="relative ml-auto w-[82%] rotate-[1.8deg] bg-[#F5F0E8] p-2.5 md:p-3 shadow-2xl rounded-[3px]">
      <span
        aria-hidden="true"
        className="absolute -top-3 left-1/2 -translate-x-1/2 -rotate-[4deg] w-24 h-6 bg-[rgba(245,194,66,0.75)] shadow-sm"
      />
      <img
        src="/images/optimized/hero-field.webp"
        alt="Gallinero móvil en el campo de Ameli Pastoreo"
        className="w-full aspect-[4/5] object-cover object-[50%_70%] rounded-[2px]"
        loading="lazy"
        decoding="async"
      />
    </figure>

    <figure className="absolute bottom-0 left-0 w-[62%] -rotate-[3.5deg] bg-[#F5F0E8] p-2 md:p-2.5 shadow-2xl rounded-[3px]">
      <img
        src="/images/optimized/chickens-group2.webp"
        alt="Gallinas pastoreando junto al gallinero"
        className="w-full aspect-[4/3] object-cover rounded-[2px]"
        loading="lazy"
        decoding="async"
      />
    </figure>
  </motion.div>
);

export const AboutSection = () => {
  return (
    <section
      className="relative flex items-center justify-center overflow-clip"
      style={{
        backgroundColor: '#5C4033',
        backgroundImage: 'url("/texturas/brown-gravel.png")',
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-start">
        <div className="text-left">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="block mb-8"
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
              <span className="relative text-sm md:text-base tracking-[0.2em] uppercase font-semibold text-white">
                Sobre nosotros
              </span>
            </span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-bold text-white leading-[1.05] tracking-tight uppercase mb-8"
          >
            "Cuando todos ganan"
          </motion.h2>

          <motion.ul
            {...fadeUp(0.1)}
            className="flex flex-col gap-2.5 mb-10 md:mb-12"
          >
            {values.map((v) => (
              <li
                key={v}
                className="flex items-start gap-3 text-sm md:text-base tracking-[0.18em] uppercase font-bold text-gold"
              >
                <span className="mt-[0.45em] w-1.5 h-1.5 shrink-0 rounded-full bg-gold/70" aria-hidden="true" />
                {v}
              </li>
            ))}
          </motion.ul>

          {/* Fotos: en mobile van entre los valores y el texto; en desktop, en la columna derecha */}
          <FarmPhotos className="lg:hidden mb-10" />

          <div className="space-y-7 md:space-y-8 max-w-[62ch]">
            <motion.p
              {...fadeUp()}
              className="text-lg md:text-xl text-white/95 leading-relaxed"
            >
              Amelí surge de nuestro trabajo, Francisco y Lucas, padre e hijo. Comenzamos a
              principios de 2025 con un gallinero móvil, con ruedas, que se va moviendo
              por el campo periódicamente, a esto se le llama pastoreo rotativo, gracias a
              este sistema las gallinas viven al aire libre, toman sol, desarrollan su
              comportamiento natural y complementan su alimentación con posturas e insectos
              dándole mejores cualidades que repercuten en la calidad del alimento. A su
              vez regeneramos la tierra, el guano de las propias gallinas fertiliza el
              campo, produciendo una mejora continua, respetando la biodiversidad.
            </motion.p>

            <motion.p
              {...fadeUp(0.1)}
              className="text-base md:text-lg text-white/85 leading-relaxed"
            >
              Todo esto construido con nuestras manos, comenzando en el negocio avícola
              desde cero, hoy ya en 2026 hemos construido otro gallinero móvil, tenemos
              más de 600 gallinas y cerca de 100 clientes directos a los que abastecemos
              de forma semanal con huevos frescos de máxima calidad.
            </motion.p>

            <motion.p
              {...fadeUp(0.2)}
              className="text-base md:text-lg text-white/85 leading-relaxed"
            >
              Nos enorgullece nuestro trabajo, estamos decididos a llegar a la mayor
              cantidad de personas que eligen una alimentación consciente. Dejando como
              mensaje, que es posible producir de forma sostenible.
            </motion.p>
          </div>

          <motion.p
            {...fadeUp(0.3)}
            className="mt-12 flex items-center gap-4 text-gold text-base tracking-[0.2em] uppercase"
          >
            <span className="w-10 h-px bg-gold/60" aria-hidden="true" />
            Proyecto familiar
          </motion.p>
        </div>

        <FarmPhotos className="hidden lg:block lg:sticky lg:top-28" />
      </div>
    </section>
  );
};

export default AboutSection;
