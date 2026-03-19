import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Productos', href: '#productos' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.a
            href="#inicio"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-egg-yellow to-orange rounded-full flex items-center justify-center">
              <span className="text-white font-playfair font-bold text-xl">A</span>
            </div>
            <span className="font-playfair text-2xl font-bold text-brown">
              Ameli Pastoreo
            </span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-brown hover:text-orange transition-colors font-medium"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="#contacto"
              className="bg-gradient-to-r from-egg-yellow to-orange text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Comprar Ahora
            </motion.a>
          </div>

          <button
            className="md:hidden text-brown"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      <motion.div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-cream px-4 py-6 space-y-4 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-brown hover:text-orange transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contacto"
            className="block bg-gradient-to-r from-egg-yellow to-orange text-white px-6 py-3 rounded-full font-semibold text-center mt-4"
            onClick={() => setIsOpen(false)}
          >
            Comprar Ahora
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
