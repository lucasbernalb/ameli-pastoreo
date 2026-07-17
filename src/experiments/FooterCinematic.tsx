import { motion } from 'framer-motion';
import { CONTACT_INFO, WHATSAPP_ORDER_URL } from '../config';
import { scrollToSection } from '../lib/scrollTo';

const links = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Nuestra historia', href: '#nosotros' },
  { name: 'Planes', href: '#planes' },
  { name: 'Galería', href: '#galeria' },
  { name: 'Reservar plan', href: '#contact-form' },
];

export const FooterCinematic = () => {
  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#1C140E' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url("/texturas/#5C4033dark-wood.png")',
          backgroundRepeat: 'repeat',
          opacity: 0.06,
          mixBlendMode: 'normal',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url("/texturas/black-paper.png")',
          backgroundRepeat: 'repeat',
          opacity: 0.04,
          mixBlendMode: 'normal',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-20 pb-8 min-h-0 md:min-h-[440px]"
      >
        <div className="flex items-center gap-3 justify-center mb-14 md:mb-18">
          <div className="h-px flex-1 max-w-[120px]" style={{ backgroundColor: 'rgba(255,255,255,.12)' }} />
          <span className="text-gold/40 text-xs tracking-[0.35em] uppercase font-semibold select-none">
            Ameli Pastoreo
          </span>
          <div className="h-px flex-1 max-w-[120px]" style={{ backgroundColor: 'rgba(255,255,255,.12)' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          <div className="max-w-[420px]">
            <img
              src="/logo-ameli/logo ameli corregido blanco.png"
              alt="Ameli Pastoreo"
              className="h-14 md:h-16 w-auto mb-4"
            />
            <p className="text-gold/70 text-sm font-semibold tracking-wide uppercase mb-3">
              Huevos de campo en pastoreo
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              Producción familiar enfocada en bienestar animal, alimentación natural y entrega semanal de huevos frescos en Montevideo, Canelones y la costa.
            </p>
            <p className="text-gold/70 text-sm italic mt-6 leading-relaxed">
              "Cada huevo cuenta una historia."
            </p>
          </div>

          <div>
            <h4 className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-semibold mb-6">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/65 text-sm">
                <span className="text-white/40 mt-0.5 flex-shrink-0">
                  <img src="/src/assets/icons/location.svg" alt="Ubicación" className="w-4 h-4 opacity-40" />
                </span>
                <span>Soca, Canelones</span>
              </li>
              <li className="flex items-start gap-3 text-white/65 text-sm">
                <span className="text-white/40 mt-0.5 flex-shrink-0">
                  <img src="/src/assets/icons/whatsapp.svg" alt="WhatsApp" className="w-4 h-4 opacity-40" />
                </span>
                <a href={WHATSAPP_ORDER_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-300">{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex items-start gap-3 text-white/65 text-sm">
                <span className="text-white/40 mt-0.5 flex-shrink-0">
                  <img src="/src/assets/icons/gmail.svg" alt="Email" className="w-4 h-4 opacity-40" />
                </span>
                <a href="mailto:hola@amelipastoreo.com" className="hover:text-gold transition-colors duration-300">hola@amelipastoreo.com</a>
              </li>
              <li className="flex items-start gap-3 text-white/65 text-sm">
                <span className="text-white/40 mt-0.5 flex-shrink-0">
                  <img src="/src/assets/icons/instagram.svg" alt="Instagram" className="w-4 h-4 opacity-40" />
                </span>
                <a
                  href="https://www.instagram.com/amelipastoreo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors duration-300"
                >
                  @ameli_pastoreo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-semibold mb-6">
              Enlaces
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href.replace('#', '')); }}
                    className="inline-block text-white/65 text-sm hover:text-gold transition-all duration-300 hover:translate-x-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="w-full h-px my-10 md:my-12"
          style={{ backgroundColor: 'rgba(255,255,255,.12)' }}
        />

        <div className="text-center">
          <p className="text-gold/40 text-xs tracking-[0.15em] uppercase mb-2">
            Del campo a tu mesa.
          </p>
          <p className="text-white/20 text-[11px]">
            &copy; {new Date().getFullYear()} Ameli Pastoreo &middot; Todos los derechos reservados
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterCinematic;
