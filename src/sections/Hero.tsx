import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_ORDER_URL } from '../config';
import HeroEgg from '../components/HeroEgg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const statsVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const x = (e.clientX - centerX) / (rect.width / 2);
        const y = (e.clientY - centerY) / (rect.height / 2);
        
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-egg-yellow-light/30 via-cream to-orange-light/20" />

      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-orange rounded-full blur-3xl"
          style={{ x: smoothX, y: smoothY }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-48 h-48 bg-egg-yellow rounded-full blur-3xl"
          style={{ x: smoothX, y: smoothY }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-40 h-40 bg-green rounded-full blur-3xl"
          style={{ x: smoothX, y: smoothY }}
        />
      </div>

      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 hidden lg:block opacity-80 scale-125">
        <motion.div
          style={{ x: smoothX, y: smoothY }}
          className="relative"
        >
          <HeroEgg />
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <motion.span
              variants={itemVariants}
              className="inline-block bg-green/10 text-green-dark px-5 py-2.5 rounded-full text-sm font-medium mb-8"
            >
              🥚 Del campo a tu mesa
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="font-playfair text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-brown mb-8 leading-tight"
            >
              Huevos de{' '}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-egg-yellow"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Pastoreo
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-brown-light max-w-xl mx-auto lg:mx-0 mb-12"
            >
              Naturales, frescos y producidos con amor. Gallinas felices para una vida más sana.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href={WHATSAPP_ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green to-green-dark text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaWhatsapp className="text-2xl group-hover:animate-bounce" />
                <span>Comprar por WhatsApp</span>
              </motion.a>

              <motion.a
                href="#productos"
                className="bg-white text-brown border-2 border-egg-yellow px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:bg-egg-yellow-light/30 text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Ver Productos
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden lg:block h-96"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>

        <motion.div
          variants={containerVariants}
          className="mt-16 md:mt-20 flex justify-center gap-8 md:gap-16 text-center"
        >
          {[
            { number: '100%', label: 'Natural' },
            { number: '0', label: 'Químicos' },
            { number: '∞', label: 'Frescura' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={statsVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center"
            >
              <span className="text-4xl md:text-5xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange to-egg-yellow">
                {stat.number}
              </span>
              <span className="text-sm text-brown-light mt-1">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
