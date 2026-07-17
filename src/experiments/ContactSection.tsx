import { motion } from 'framer-motion';
import { scrollToSection } from '../lib/scrollTo';

export const ContactSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/optimized/hero-bg.webp"
          alt="Campo Ameli Pastoreo"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'url("/texturas/E4D9C4-purty-wood.png")',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'multiply',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-tight tracking-tight mb-6"
        >
          ¿Listo para probar{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-dark">
            la diferencia
          </span>
          ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base md:text-lg text-white/80 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Pedí tus huevos de pastoreo y recibilos frescos en tu casa. Del campo a tu mesa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact-form"
            onClick={(e) => { e.preventDefault(); scrollToSection('contact-form'); }}
            className="bg-gradient-to-r from-green to-green-dark text-white px-12 py-5 rounded-full font-semibold text-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-98"
          >
            Hacé tu pedido
          </a>
          <a
            href="https://wa.me/59899123456"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white/30 text-white/90 px-12 py-5 rounded-full font-semibold text-xl hover:bg-white/10 transition-all"
          >
            Escribinos por WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-white/60 text-sm"
        >
          <span className="flex items-center gap-2"><span aria-hidden="true">📍</span> Montevideo, Canelones y costa</span>
          <span className="flex items-center gap-2"><span aria-hidden="true">📱</span> 099 123 456</span>
          <span className="flex items-center gap-2"><span aria-hidden="true">📸</span> @ameli_pastoreo</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-8 text-white/40 text-xs"
        >
          Entrega semanal — Producto fresco directo del campo
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
