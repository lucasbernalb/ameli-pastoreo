import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaLeaf, FaHeart } from 'react-icons/fa';
import { WHATSAPP_BASE_URL, INSTAGRAM_URL, CONTACT_INFO, SITE_CONFIG, NAV_LINKS } from '../config';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream-dark border-t border-brown/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-egg-yellow to-orange rounded-full flex items-center justify-center">
                <span className="text-white font-playfair font-bold">A</span>
              </div>
              <span className="font-playfair text-xl font-bold text-brown">
                Ameli Pastoreo
              </span>
            </div>
            <p className="text-brown-light leading-relaxed">
              Huevos de pastoreo, naturales y frescos. Del campo a tu mesa con amor y dedicación.
            </p>
            <div className="mt-4 flex items-center gap-2 text-green text-sm">
              <FaLeaf />
              <span>100% Natural y Sostenible</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-playfair font-bold text-brown mb-4">Enlaces</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-brown-light hover:text-orange transition-colors inline-block hover:translate-x-2 transition-transform"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-playfair font-bold text-brown mb-4">Síguenos</h4>
            <div className="flex gap-3">
              <motion.a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-green text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-xl" />
              </motion.a>
              <motion.a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </motion.a>
            </div>
            <p className="text-brown-light text-sm mt-4">
              @{CONTACT_INFO.instagram}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-brown/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
            <p className="text-brown-light text-sm">
              © {currentYear} {SITE_CONFIG.name}. Todos los derechos reservados.
            </p>
          <p className="text-brown-light text-sm flex items-center gap-1">
            Hecho con <FaHeart className="text-orange text-xs" /> en Uruguay
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
