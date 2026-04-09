import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaPhone, FaArrowRight } from 'react-icons/fa';
import { WHATSAPP_ORDER_URL, INSTAGRAM_URL, CONTACT_INFO } from '../config';

const Contact = () => {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-gradient-to-br from-green to-green-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-9xl animate-bounce" style={{ animationDuration: '3s' }}>🥚</div>
        <div className="absolute bottom-10 right-10 text-9xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>🐔</div>
        <div className="absolute top-1/2 left-1/3 text-8xl animate-bounce" style={{ animationDuration: '5s', animationDelay: '0.5s' }}>🌿</div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-egg-yellow font-medium text-sm uppercase tracking-wider">
            ¿Listo para probar?
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
            ¡Haz tu pedido ahora!
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Escríbenos por WhatsApp y te llevamos huevos frescos directamente a tu puerta. 
            También puedes visitarnos en nuestra granja.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <motion.a
            href={WHATSAPP_ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-to-r from-green to-green-dark text-white px-8 py-6 rounded-2xl font-semibold text-xl shadow-xl hover:shadow-2xl transition-all mb-8 group"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-center gap-4">
              <FaWhatsapp className="text-3xl group-hover:animate-bounce" />
              <div className="text-left">
                <span className="block text-2xl font-bold">Comprar por WhatsApp</span>
                <span className="text-sm text-white/80 flex items-center gap-1">
                  Respuesta inmediata <FaArrowRight className="text-xs" />
                </span>
              </div>
            </div>
          </motion.a>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <motion.a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange text-white rounded-2xl hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaInstagram className="text-3xl" />
              <div>
                <span className="font-semibold block">Síguenos</span>
                <span className="text-sm text-white/80">@{CONTACT_INFO.instagram}</span>
              </div>
            </motion.a>

            <div className="flex items-center gap-4 p-5 bg-orange-light/10 rounded-2xl border border-orange-light/20">
              <FaPhone className="text-3xl text-orange" />
              <div>
                <span className="font-semibold block text-brown">Llámanos</span>
                <span className="text-brown-light">{CONTACT_INFO.phone}</span>
              </div>
            </div>
          </div>

          <motion.div
            className="flex items-center gap-4 p-5 bg-egg-yellow-light/20 rounded-2xl border border-egg-yellow-light/30"
            whileHover={{ scale: 1.01 }}
          >
            <FaMapMarkerAlt className="text-3xl text-orange flex-shrink-0" />
            <div>
              <span className="font-semibold block text-brown">Visítanos</span>
              <span className="text-brown-light">{CONTACT_INFO.address}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
