import { motion } from 'framer-motion';

export const SectionSeparator = () => {
  return (
    <div className="relative py-10 md:py-14 flex items-center justify-center" style={{ backgroundColor: '#4A3426' }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex items-center gap-4 md:gap-6"
      >
        <div className="h-px flex-1 max-w-[120px]" style={{ backgroundColor: 'rgba(255,255,255,.15)' }} />
        <img
          src="/logo-ameli/logo-blanco.png"
          alt="Ameli Pastoreo"
          className="h-9 md:h-12 w-auto object-contain"
          loading="lazy"
        />
        <div className="h-px flex-1 max-w-[120px]" style={{ backgroundColor: 'rgba(255,255,255,.15)' }} />
      </motion.div>
    </div>
  );
};

export default SectionSeparator;
