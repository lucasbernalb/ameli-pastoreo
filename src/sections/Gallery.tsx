import { motion } from 'framer-motion';
import { galleryImages } from '../data';
import { INSTAGRAM_URL, CONTACT_INFO } from '../config';

const Gallery = () => {
  return (
    <section id="galeria" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-green font-medium text-sm uppercase tracking-wider">
            Vida en el campo
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-brown mt-4 mb-6">
            Nuestra Galería
          </h2>
          <p className="text-brown-light text-lg max-w-xl mx-auto">
            Momentos de nuestra granja y el proceso artesanal de producción
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className={`${img.gradient} aspect-square rounded-2xl md:rounded-3xl flex items-center justify-center shadow-lg overflow-hidden group relative cursor-pointer`}
            >
              <motion.span
                className="text-6xl md:text-8xl group-hover:scale-110 transition-transform duration-300"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {img.icon}
              </motion.span>
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-2xl md:rounded-3xl" />
              
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 rounded-b-2xl md:rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <p className="text-white text-sm font-medium text-center">{img.alt}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-orange hover:text-green transition-colors font-semibold group"
          >
            <span className="text-2xl">📸</span>
            <span className="group-hover:underline">Síguenos en Instagram</span>
              <span className="text-lg">@{CONTACT_INFO.instagram}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
