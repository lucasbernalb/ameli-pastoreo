import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

const overlays = {
  dark: 'bg-gradient-to-t from-black/60 via-black/30 to-black/10',
  warm: 'bg-gradient-to-t from-black/70 via-black/30 to-black/10',
  subtle: 'bg-gradient-to-t from-black/50 via-black/20 to-black/5',
  strong: 'bg-gradient-to-t from-black/70 via-black/40 to-black/20',
};

interface FullBleedSectionProps {
  image: string;
  alt: string;
  label?: string;
  headline: string;
  body?: string;
  accentColor?: string;
  parallaxSpeed?: number;
  overlay?: keyof typeof overlays;
  children?: ReactNode;
  id?: string;
  imagePosition?: string;
}

export const FullBleedSection = ({
  image,
  alt,
  label,
  headline,
  body,
  accentColor = 'text-gold',
  parallaxSpeed = 0.8,
  overlay = 'dark',
  children,
  id,
  imagePosition,
}: FullBleedSectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, parallaxSpeed * 200]);

  return (
    <section
      id={id}
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY }}
        whileInView={{ scale: 1.02 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <img
          src={image}
          alt={alt}
          className={`w-full h-full object-cover ${imagePosition || ''}`}
          loading="lazy"
        />
      </motion.div>
      <div className={`absolute inset-0 ${overlays[overlay]}`} />

      <div className="relative z-10 max-w-3xl mx-auto text-center px-4 text-white">
        {label && (
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`text-sm tracking-[0.2em] uppercase font-semibold mb-4 block ${accentColor}`}
          >
            {label}
          </motion.span>
        )}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: label ? 0.15 : 0, ease: 'easeOut' }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
        >
          {headline}
        </motion.h2>
        {body && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: label ? 0.3 : 0.15 }}
            className="text-base md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed text-white/90"
          >
            {body}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FullBleedSection;
