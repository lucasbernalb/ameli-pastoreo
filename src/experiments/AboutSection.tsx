import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: '#5C4033',
        backgroundImage: 'url("/texturas/brown-gravel.png")',
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />

      <div className="relative z-10 max-w-5xl ml-4 md:ml-[10%] mr-4 md:mr-10 px-6 py-16 md:py-28 text-left">
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
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight uppercase mb-8 md:mb-14"
        >
          "Cuando todos
          ganan"
          <div className="text-center mt-4 md:mt-6 space-y-2 md:space-y-3">
            <span className="block text-base md:text-lg tracking-[0.2em] uppercase font-bold text-gold">
              Bienestar animal
            </span>
            <div className="flex items-center justify-center gap-2">
              <span className="w-3 h-px bg-gold/50" />
              <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
              <span className="w-3 h-px bg-gold/50" />
            </div>
            <span className="block text-base md:text-lg tracking-[0.2em] uppercase font-bold text-gold">
              Alimentación consciente
            </span>
            <div className="flex items-center justify-center gap-2">
              <span className="w-3 h-px bg-gold/50" />
              <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
              <span className="w-3 h-px bg-gold/50" />
            </div>
            <span className="block text-base md:text-lg tracking-[0.2em] uppercase font-bold text-gold">
              Impulso a la producción agroecológica familiar
            </span>
          </div>
        </motion.h2>

        <div className="space-y-8 md:space-y-10 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-lg md:text-xl text-white/90 leading-relaxed"
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-lg md:text-xl text-white/90 leading-relaxed"
          >
            Todo esto construido con nuestras manos, comenzando en el negocio avícola
            desde cero, hoy ya en 2026 hemos construido otro gallinero móvil, tenemos
            más de 600 gallinas y cerca de 100 clientes directos a los que abastecemos
            de forma semanal con huevos frescos de máxima calidad.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="text-lg md:text-xl text-white/90 leading-relaxed"
          >
            Nos enorgullece nuestro trabajo, estamos decididos a llegar a la mayor
            cantidad de personas que eligen una alimentación consciente. Dejando como
            mensaje, que es posible producir de forma sostenible.
          </motion.p>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute z-10 text-gold text-base tracking-[0.2em] uppercase bottom-6 md:bottom-12"
      >
        Proyecto familiar
      </motion.p>
    </section>
  );
};

export default AboutSection;
