import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export const AboutSection = () => {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoEnded, setVideoEnded] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const imageY = useTransform(scrollYProgress, [0.25, 0.55], [40, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0.25, 0.55], [0, 1]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          videoRef.current?.play()?.catch(() => {});
          setTimeout(() => setVideoEnded(true), 4000);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  const handleVideoEnded = () => {
    setVideoEnded(true);
  };

  return (
    <section ref={ref} className="relative" style={{ height: '200vh' }}>
      <div
        className="sticky top-0 min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundColor: '#5C4033',
          backgroundImage: 'url("/texturas/brown-gravel.png")',
          backgroundRepeat: 'repeat',
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{ y: imageY, opacity: imageOpacity }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ y: parallaxY }}
          >
            <video
              ref={videoRef}
              muted
              playsInline
              onEnded={handleVideoEnded}
              className="w-full h-full object-cover object-[50%_35%] md:object-[50%_30%]"
            >
              <source src="/videos/video-gallina-de-cerca.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>

        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: 'url("/texturas/brown-gravel.png")',
            backgroundRepeat: 'repeat',
            mixBlendMode: 'multiply',
          }}
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
          animate={{ opacity: videoEnded ? 1 : 0.3 }}
          transition={{ duration: 1.5 }}
        />

        {videoEnded && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="max-w-5xl ml-4 md:ml-[8%] mr-4 md:mr-8 px-4 text-left z-10 -mt-16"
          >
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block mb-3"
            >
              <span className="inline-block relative">
                <span
                  className="absolute inset-0 scale-110 scale-x-[1.15] pointer-events-none"
                  style={{
                    background: 'rgba(245,194,66,0.8)',
                    borderRadius: '12% 6% 18% 6% / 6% 16% 4% 18%',
                    transform: 'rotate(-1deg) scale(1.08) scaleX(1.12)',
                  }}
                />
                <span className="relative text-sm md:text-base tracking-[0.2em] uppercase font-semibold text-white">
                  Sobre nosotros
                </span>
              </span>
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.35, ease: 'easeOut' }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight uppercase"
            >
              Criadas con<br />
              respeto,<br />
              <span className="relative inline-block whitespace-nowrap">
                <span
                  className="absolute inset-0 -skew-y-1 scale-105 rounded pointer-events-none"
                  style={{
                    background: 'rgba(92,126,75,0.75)',
                  }}
                />
                <span
                  className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#F3D27A] via-[#D4A544] to-[#F6E09B] italic"
                  style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,.4))' }}
                >
                  criadas en libertad
                </span>
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base md:text-lg text-white/90 mt-6 max-w-3xl leading-relaxed"
            >
              En Ameli Pastoreo nuestras gallinas viven en libertad. Recorren el campo
              todos los días, se alimentan de pastura fresca y descansan cuando el sol se
              pone. Creemos que un huevo de calidad empieza por el bienestar del animal.
              Por eso priorizamos el espacio, la luz natural y una alimentación
              balanceada. Producimos semanalmente y entregamos en Montevideo, Canelones y
              la costa.
            </motion.p>
          </motion.div>
        )}

        {videoEnded && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="absolute z-10 text-gold text-sm tracking-[0.2em] uppercase bottom-16"
          >
            Bienestar animal desde el primer día
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
