import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import { VideoOnHover } from './VideoOnHover';

interface ImageMaskRevealProps {
  image: string;
  video?: string;
  alt: string;
  label?: string;
  headline: string;
  body?: string;
  children?: ReactNode;
}

export const ImageMaskReveal = ({
  image,
  video,
  alt,
  label,
  headline,
  body,
  children,
}: ImageMaskRevealProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ['circle(0% at 50% 50%)', 'circle(100% at 50% 50%)']
  );
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-start justify-center overflow-hidden bg-black/40 pt-24 md:pt-32 pb-24 md:pb-32"
    >
      <motion.div
        className="absolute inset-0"
        style={{ clipPath, y: parallaxY } as any}
      >
        {video ? (
          <VideoOnHover
            image={image}
            video={video}
            alt={alt}
            className="w-full h-full object-cover"
            containerClassName="w-full h-full"
          />
        ) : (
          <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
      </motion.div>
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#3C2415]/70 via-black/30 to-transparent"
        style={{ clipPath } as any}
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"
        style={{ clipPath } as any}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center text-white">
        {label && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block relative"
            >
              <span
                className="absolute inset-0 scale-110 scale-x-[1.15] pointer-events-none"
                style={{
                  background: 'rgba(245,194,66,0.8)',
                  borderRadius: '12% 6% 18% 6% / 6% 16% 4% 18%',
                  transform: 'rotate(-1deg) scale(1.08) scaleX(1.12)',
                }}
              />
              <span className="relative text-base tracking-[0.2em] uppercase font-semibold text-white">
                {label}
              </span>
            </span>
          </motion.span>
        )}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: label ? 0.25 : 0 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight uppercase mt-4 md:mt-6"
        >
          {headline}
        </motion.h2>
        {body && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base md:text-lg mt-10 max-w-2xl mx-auto leading-relaxed text-white/80"
          >
            {body}
          </motion.p>
        )}
        {children && <div className="mt-12 md:mt-16">{children}</div>}
      </div>
    </section>
  );
};

export default ImageMaskReveal;
