import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-egg-yellow-light/30 via-cream to-orange-light/20" />
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-egg-yellow rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-green rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block bg-green/10 text-green-dark px-4 py-2 rounded-full text-sm font-medium mb-4">
            🥚 Del campo a tu mesa
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-brown mb-6 leading-tight"
        >
          Huevos de{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-egg-yellow">
            Pastoreo
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-brown-light max-w-2xl mx-auto mb-10"
        >
          Naturales, frescos y producidos con amor. Gallinas felices para una vida más sana.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="https://wa.me/51999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green to-green-dark text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="text-2xl" />
            Comprar por WhatsApp
          </motion.a>

          <motion.a
            href="#productos"
            className="bg-white text-brown border-2 border-egg-yellow px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Productos
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex justify-center gap-8 text-center"
        >
          <div className="flex flex-col items-center">
            <span className="text-4xl font-playfair font-bold text-orange">100%</span>
            <span className="text-sm text-brown-light">Natural</span>
          </div>
          <div className="w-px bg-brown/20" />
          <div className="flex flex-col items-center">
            <span className="text-4xl font-playfair font-bold text-orange">0</span>
            <span className="text-sm text-brown-light">Químicos</span>
          </div>
          <div className="w-px bg-brown/20" />
          <div className="flex flex-col items-center">
            <span className="text-4xl font-playfair font-bold text-orange">∞</span>
            <span className="text-sm text-brown-light">Frescura</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-8 h-12 border-2 border-brown/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-brown/30 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
