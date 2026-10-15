import { motion } from 'framer-motion';
import { Hero } from '@/features/landing/sections/Hero';
import { Navbar } from '@/features/landing/layout/Navbar';
import { AboutSection } from '@/features/landing/sections/AboutSection';
import { ImageMaskReveal } from '@/features/landing/media/ImageMaskReveal';
import { PlansSection } from '@/features/landing/sections/PlansSection';
import { FormSection } from '@/features/landing/sections/FormSection';
import { GallerySection } from '@/features/landing/sections/GallerySection';
import { SectionSeparator } from '@/features/landing/layout/SectionSeparator';

import { Footer } from '@/features/landing/layout/Footer';
import { WhatsAppFloat } from '@/features/landing/layout/WhatsAppFloat';

/** Separa "Vitamina D: 4 veces más." en etiqueta y dato, para destacar el dato. El texto leído es el mismo. */
const splitStat = (item: string): [string, string] => {
  const i = item.indexOf(':');
  return i === -1 ? [item, ''] : [item.slice(0, i + 1), item.slice(i + 1).trim()];
};

const StatItem = ({ item }: { item: string }) => {
  const [label, value] = splitStat(item);
  return (
    <li className="flex items-start gap-3 text-sm md:text-[15px] leading-relaxed">
      <span className="text-gold mt-1 shrink-0 text-xs" aria-hidden="true">✦</span>
      <span>
        <span className="text-white/70 font-medium">{label}</span>
        {value && <>{' '}<span className="text-white font-bold">{value}</span></>}
      </span>
    </li>
  );
};

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-cream-texture">
      <Navbar />
      <section id="inicio">
        <Hero />
      </section>

      <section id="nosotros">
        <AboutSection />
      </section>

      <div className="relative overflow-hidden" style={{ backgroundColor: '#4A3426' }}>
        <div
          className="absolute inset-0 opacity-[0.2] pointer-events-none"
          style={{
            backgroundImage: 'url("/texturas/#5C4033dark-wood.png")',
            backgroundRepeat: 'repeat',
            mixBlendMode: 'overlay',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage: 'url("/texturas/brown-gravel.png")',
            backgroundRepeat: 'repeat',
            mixBlendMode: 'overlay',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: 'url("/texturas/278759-egg-shell.png")',
            backgroundRepeat: 'repeat',
            mixBlendMode: 'overlay',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none" />

        <div className="relative z-10">
          <ImageMaskReveal
          image="/images/gallery/yema-cayendo.webp"
          alt="Yema de huevo cayendo"
          label="La diferencia"
          headline="Está adentro"
          bgClass="bg-transparent"
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 lg:gap-20 xl:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
              className="text-left bg-[#2A1B12]/70 backdrop-blur-md border border-white/10 shadow-xl rounded-2xl p-6 md:p-8"
            >
              <h3 className="font-playfair text-gold text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-wider mb-2">
                Vitaminas y Antioxidantes
              </h3>
              <p className="text-white/60 uppercase text-xs mb-5 leading-relaxed tracking-wide">
                (Comparado con huevos industriales)*
              </p>
              <ul className="space-y-3">
                {[
                  'Vitamina D: 4 veces más.',
                  'Vitamina E: 3 veces más.',
                  'Vitamina A: 66% más (dos tercios más).',
                  'Betacarotenos: 7 veces más.',
                ].map((item) => (
                  <StatItem key={item} item={item} />
                ))}
              </ul>

              <h3 className="font-playfair text-gold text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-wider mt-10 mb-5">
                Grasas Saludables y Colesterol
              </h3>
              <ul className="space-y-3">
                {[
                  'Omega-3: 2 a 3 veces más.',
                  'Ratio Omega-6 / Omega-3: Reducido a la mitad.',
                  'Colesterol: 33% menos.',
                  'Grasas saturadas: 25% menos.',
                ].map((item) => (
                  <StatItem key={item} item={item} />
                ))}
              </ul>

              <p className="text-white/55 text-xs mt-8 pt-4 border-t border-white/10 leading-relaxed">
                *(USDA, Mother Earth News 2007, Penn State University 2003 y 2010, y publicaciones de The Poultry Site y Healthline)
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              className="text-left bg-[#2A1B12]/70 backdrop-blur-md border border-white/10 shadow-xl rounded-2xl p-6 md:p-8 space-y-7"
            >
              {[
                {
                  label: 'Yema de color naranja intenso',
                  text: 'Un tono anaranjado vibrante, resultado directo de la alta ingesta de betacarotenos al forrajear hierba fresca, flores e insectos.',
                },
                {
                  label: 'Claras firmes y gelatinosas',
                  text: 'Una textura densa y compacta que se mantiene unida y no se desparrama al romper el huevo en la sartén.',
                },
                {
                  label: 'Cáscaras gruesas y resistentes',
                  text: 'Una estructura notablemente más dura y difícil de quebrar, gracias a la mayor absorción de calcio.',
                },
                {
                  label: 'Sabor',
                  text: 'Un perfil mucho más rico, auténtico y concentrado debido a la diversidad natural de su alimentación en el campo.',
                },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-gold/60 pl-4">
                  <span className="text-gold font-bold text-lg md:text-xl lg:text-2xl uppercase tracking-wider font-playfair">{item.label}</span>
                  <p className="text-sm md:text-[15px] text-white/90 font-medium leading-relaxed mt-2">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </ImageMaskReveal>
      </div>
      </div>

      <SectionSeparator />

      <section id="planes">
        <PlansSection />
      </section>

      <section id="sumate">
        <FormSection />
      </section>

      <section id="galeria">
        <GallerySection />
      </section>

      <section className="relative overflow-hidden bg-[#5C7A4E] py-20 md:py-28">
        <div
          className="absolute inset-0 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage: 'url("/texturas/brown-gravel.png")',
            backgroundRepeat: 'repeat',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 md:px-8 text-white">
          <div className="text-left mb-10 md:mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight uppercase"
            >
              Nuestra granja
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="text-2xl md:text-3xl text-gold/90 mt-2 font-quincho"
            >
              Ameli Pastoreo
            </motion.p>
          </div>

          <motion.figure
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="relative bg-[#F5F0E8] p-2.5 md:p-4 rounded-[4px] shadow-2xl md:-rotate-[0.8deg]"
          >
            <span
              aria-hidden="true"
              className="absolute -top-3 left-8 md:left-12 -rotate-[4deg] w-24 md:w-28 h-6 bg-[rgba(245,194,66,0.75)] shadow-sm z-10"
            />
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/images/optimized/video-gallinero-poster.webp"
              aria-label="Gallinero móvil y gallinas pastoreando"
              className="w-full aspect-video object-cover rounded-[2px] bg-[#3a2a1f]"
            >
              <source src="/videos/video-gallinero-pasto-moviendose.mp4" type="video/mp4" />
            </video>
          </motion.figure>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default LandingPage;
