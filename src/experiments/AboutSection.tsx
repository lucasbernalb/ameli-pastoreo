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
    <section ref={ref} className="relative" style={{ minHeight: '200vh' }}>
      <div
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
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
      </div>

      <div
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundColor: '#5C4033',
          backgroundImage: 'url("/texturas/brown-gravel.png")',
          backgroundRepeat: 'repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />

        <div className="relative z-10 max-w-5xl ml-4 md:ml-[10%] mr-4 md:mr-10 px-6 py-20 text-left">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="block mb-6"
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
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight uppercase mb-12"
          >
            "Cuando todos<br />
            ganan",<br />
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
                Proyecto familiar
              </span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-lg md:text-xl text-white/90 max-w-4xl leading-relaxed"
          >
            Amelí surge del trabajo de Francisco y Lucas, padre e hijo. Comenzamos a
            principios de 2025 con un gallinero móvil, con ruedas, que se va moviendo
            por el campo periódicamente, a esto se le llama pastoreo rotativo, que a su
            vez regenera la tierra mediante el guano de las propias gallinas.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-lg md:text-xl text-white/90 mt-8 max-w-4xl leading-relaxed"
          >
            Todo esto construido con nuestras manos, comenzando en el negocio avícola
            desde cero, hoy ya en 2026 hemos construido otro gallinero móvil, tenemos
            más de 600 gallinas y cerca de 100 clientes directos a los que abastecemos
            de forma semanal con huevos frescos de máxima calidad.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="text-lg md:text-xl text-white/90 mt-8 max-w-4xl leading-relaxed"
          >
            Nos enorgullece nuestro trabajo, estamos decididos a llegar a la mayor
            cantidad de personas posibles a través de la alimentación consciente y el
            desarrollo sostenible. Dejando como mensaje, que hacer las cosas de forma
            distinta es posible.
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute z-10 text-gold text-sm tracking-[0.2em] uppercase bottom-8"
        >
          Bienestar animal desde el primer día
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
