import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-green to-green-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-9xl">🥚</div>
        <div className="absolute bottom-10 right-10 text-9xl">🐔</div>
        <div className="absolute top-1/2 left-1/3 text-8xl">🌿</div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-egg-yellow font-medium">¿Listo para probar?</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
            ¡Haz tu pedido ahora!
          </h2>
          <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
            Escríbenos por WhatsApp y te llevamos huevos frescos directamente a tu puerta. 
            También puedes visitarnos en nuestra granja.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <motion.a
            href="https://wa.me/51999999999?text=Hola!%20Quiero%20hacer%20un%20pedido%20de%20huevos%20Ameli%20Pastoreo"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-to-r from-green to-green-dark text-white px-8 py-6 rounded-2xl font-semibold text-xl shadow-xl hover:shadow-2xl transition-all mb-8 text-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-center gap-4">
              <FaWhatsapp className="text-3xl" />
              <div className="text-left">
                <span className="block text-2xl font-bold">Comprar por WhatsApp</span>
                <span className="text-sm opacity-80">Respuesta inmediata</span>
              </div>
            </div>
          </motion.a>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.a
              href="https://instagram.com/amelipastoreo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange text-white rounded-2xl hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaInstagram className="text-3xl" />
              <div>
                <span className="font-semibold block">Síguenos</span>
                <span className="text-sm opacity-80">@amelipastoreo</span>
              </div>
            </motion.a>

            <div className="flex items-center gap-4 p-4 bg-orange-light/20 rounded-2xl">
              <FaPhone className="text-3xl text-orange" />
              <div>
                <span className="font-semibold block text-brown">Llámanos</span>
                <span className="text-brown-light">+51 999 999 999</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4 p-4 bg-egg-yellow-light/30 rounded-2xl">
            <FaMapMarkerAlt className="text-3xl text-orange" />
            <div>
              <span className="font-semibold block text-brown">Visítanos</span>
              <span className="text-brown-light">Km 45, Carretera Central, Lima</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
