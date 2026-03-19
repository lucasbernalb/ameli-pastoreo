import { motion } from 'framer-motion';

const galleryImages = [
  { id: 1, color: 'bg-gradient-to-br from-egg-yellow to-orange', emoji: '🐔' },
  { id: 2, color: 'bg-gradient-to-br from-green to-green-dark', emoji: '🌿' },
  { id: 3, color: 'bg-gradient-to-br from-orange to-egg-yellow', emoji: '🥚' },
  { id: 4, color: 'bg-gradient-to-br from-green-dark to-green', emoji: '🏠' },
  { id: 5, color: 'bg-gradient-to-br from-orange-light to-orange', emoji: '🌾' },
  { id: 6, color: 'bg-gradient-to-br from-egg-yellow-light to-egg-yellow', emoji: '☀️' },
];

const Gallery = () => {
  return (
    <section id="galeria" className="py-20 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-green font-medium">Vida en el campo</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-brown mt-2">
            Nuestra Galería
          </h2>
          <p className="text-brown-light mt-4 max-w-xl mx-auto">
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
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`${img.color} aspect-square rounded-2xl md:rounded-3xl flex items-center justify-center shadow-lg overflow-hidden group cursor-pointer`}
            >
              <motion.span
                className="text-6xl md:text-8xl"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {img.emoji}
              </motion.span>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-2xl md:rounded-3xl" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com/amelipastoreo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-orange hover:text-green transition-colors font-semibold"
          >
            <span>Síguenos en Instagram</span>
            <span className="text-2xl">📸</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
