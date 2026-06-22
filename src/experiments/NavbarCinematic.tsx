import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../config';

export const NavbarCinematic = () => {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed top-0 left-0 right-0 z-50 bg-[#1C140E]/90 backdrop-blur-md border-b border-white/5"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'url("/texturas/black-paper.png")',
              backgroundRepeat: 'repeat',
              opacity: 0.04,
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'url("/texturas/278759-egg-shell.png")',
              backgroundRepeat: 'repeat',
              opacity: 0.02,
              mixBlendMode: 'multiply',
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex justify-between items-center h-16 md:h-20">
              <a
                href="#inicio"
                className="flex items-center gap-3"
              >
                <img
                  src="/logo-ameli/logo ameli corregido blanco.png"
                  alt="Ameli Pastoreo"
                  className="h-10 md:h-12 w-auto object-contain drop-shadow-lg"
                />
              </a>

              <div className="hidden md:flex items-center gap-8">
                {NAV_LINKS.slice(0, -1).map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-[#F8F5F0]/75 hover:text-[#F8F5F0] transition-colors text-base font-playfair tracking-wide relative py-1 after:absolute after:bottom-0 after:left-0 after:h-px after:bg-gold/60 after:w-0 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href={NAV_LINKS[NAV_LINKS.length - 1].href}
                  className="bg-[#5C7A4E] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                >
                  Contacto
                </a>
              </div>

              <button
                className="md:hidden text-[#F8F5F0]/80 p-2 hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  {mobileOpen ? (
                    <>
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </>
                  ) : (
                    <>
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden border-t border-white/5 bg-[#1C140E]/95"
              >
                <div className="px-4 py-6 space-y-4">
                  {NAV_LINKS.slice(0, -1).map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block text-[#F8F5F0]/75 hover:text-[#F8F5F0] transition-colors py-2 border-b border-white/5 text-lg font-playfair tracking-wide"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <a
                    href={NAV_LINKS[NAV_LINKS.length - 1].href}
                    className="block bg-[#5C7A4E] text-white px-6 py-3 rounded-full text-sm font-semibold text-center mt-4"
                    onClick={() => setMobileOpen(false)}
                  >
                    Contacto
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default NavbarCinematic;
