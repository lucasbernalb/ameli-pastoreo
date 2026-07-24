import { motion } from 'framer-motion';
import { CinematicHero } from './CinematicHero';
import { NavbarCinematic } from './NavbarCinematic';
import { AboutSection } from './AboutSection';
import { PlansSection } from './PlansSection';
import { FormSection } from './FormSection';
import { GallerySection } from './GallerySection';

import { FooterCinematic } from './FooterCinematic';
import { WhatsAppFloat } from './WhatsAppFloat';

export const CinematicLanding = () => {
  return (
    <div className="min-h-screen bg-cream-texture">
      <NavbarCinematic />
      <section id="inicio">
        <CinematicHero />
      </section>

      <section id="nosotros">
        <AboutSection />
      </section>

      <section id="planes">
        <PlansSection />
      </section>

      <section id="sumate">
        <FormSection />
      </section>

      <section id="galeria">
        <GallerySection />
      </section>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#5C7A4E]">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: 'url("/texturas/brown-gravel.png")',
            backgroundRepeat: 'repeat',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 text-white">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-left">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight uppercase"
              >
                Nuestro campo
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                className="text-2xl md:text-3xl text-gold/90 mt-2 font-quincho"
              >
                Ameli Pastoreo
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
              className="rounded-2xl overflow-hidden shadow-2xl drop-shadow-xl"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/video-gallinero-pasto-moviendose.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </div>
        </div>
      </section>

      <FooterCinematic />
      <WhatsAppFloat />
    </div>
  );
};

export default CinematicLanding;
