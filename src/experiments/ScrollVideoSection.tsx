import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ScrollVideoSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    const text = textRef.current;
    if (!video || !section || !text) return;

    video.currentTime = 0;
    let tl: gsap.core.Timeline | null = null;

    const onReady = () => {
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      tl.to(video, { currentTime: video.duration, ease: 'none' }, 0)
        .to(text, { opacity: 1, ease: 'none', duration: 0.2 }, 0)
        .to(text, { opacity: 0, ease: 'none', duration: 0.3 }, 0.7);
    };

    if (video.readyState >= 1) {
      onReady();
    } else {
      video.addEventListener('loadedmetadata', onReady, { once: true });
    }

    return () => {
      if (tl) tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/video-gallina-de-cerca.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/20" />

      <div
        ref={textRef}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center px-4"
        style={{ opacity: 0 }}
      >
        <span className="inline-block text-xs md:text-sm tracking-[0.25em] uppercase font-semibold mb-4 md:mb-6 px-4 py-1.5 border border-white/30 rounded-full backdrop-blur-sm bg-white/5">
          PASTOREO LIBRE
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
          Así viven nuestras gallinas
        </h2>
        <p className="text-base md:text-lg text-white/80 mt-3 max-w-xl leading-relaxed">
          Libres, felices y alimentadas de forma natural.
        </p>
      </div>
    </section>
  );
};

export default ScrollVideoSection;
