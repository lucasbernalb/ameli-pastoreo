import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaLeaf } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream-dark py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-egg-yellow to-orange rounded-full flex items-center justify-center">
                <span className="text-white font-playfair font-bold">A</span>
              </div>
              <span className="font-playfair text-xl font-bold text-brown">
                Ameli Pastoreo
              </span>
            </div>
            <p className="text-brown-light">
              Huevos de pastoreo, naturales y frescos. Del campo a tu mesa con amor y dedicación.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-playfair font-bold text-brown mb-4">Enlaces</h4>
            <ul className="space-y-2 text-brown-light">
              <li><a href="#inicio" className="hover:text-orange transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-orange transition-colors">Nosotros</a></li>
              <li><a href="#productos" className="hover:text-orange transition-colors">Productos</a></li>
              <li><a href="#galeria" className="hover:text-orange transition-colors">Galería</a></li>
              <li><a href="#contacto" className="hover:text-orange transition-colors">Contacto</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-playfair font-bold text-brown mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://wa.me/51999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-green text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaWhatsapp />
              </motion.a>
              <motion.a
                href="https://instagram.com/amelipastoreo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-brown/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-brown-light text-sm">
            © {currentYear} Ameli Pastoreo. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-green">
            <FaLeaf />
            <span className="text-sm">100% Natural y Sostenible</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
