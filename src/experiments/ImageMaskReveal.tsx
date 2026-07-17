import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { VideoOnHover } from './VideoOnHover';

interface ImageMaskRevealProps {
  image: string;
  video?: string;
  alt: string;
  label?: string;
  headline: string;
  body?: string;
}

export const ImageMaskReveal = ({
  image,
  video,
  alt,
  label,
  headline,
  body,
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

  return (
    <section
      ref={ref}
      className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-black/40"
    >
      <motion.div
        className="absolute inset-0"
        style={{ clipPath } as any}
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
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
        style={{ clipPath } as any}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center px-4 text-white">
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
              <span className="relative text-sm tracking-[0.2em] uppercase font-semibold text-white">
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
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight uppercase"
        >
          {headline}
        </motion.h2>
        {body && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed text-white/80"
          >
            {body}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default ImageMaskReveal;
