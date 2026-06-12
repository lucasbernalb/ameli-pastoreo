import { BlurFade } from './magicui/BlurFade';
import { Particles } from './magicui/Particles';
import { TextGenerate } from './magicui/TextGenerate';

export const HeroPrototype = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFFEF7] via-[#FFF5E6] to-[#FAD979]/30 px-4">
      <Particles
        className="absolute inset-0 z-0"
        quantity={80}
        color="#7B9E6B"
        size={0.5}
        staticity={30}
        ease={80}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <BlurFade delay={0.2} direction="up" blur="8px">
          <span className="inline-block bg-[#7B9E6B]/10 text-[#5C7A4E] px-5 py-2.5 rounded-full text-sm font-medium mb-6 tracking-wide uppercase">
            🥚 Del campo a tu mesa
          </span>
        </BlurFade>

        <BlurFade delay={0.4} direction="up" blur="6px">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#5C4033] leading-tight mb-6">
            Huevos de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8944A] to-[#F5C242]">
              Pastoreo
            </span>
          </h1>
        </BlurFade>

        <BlurFade delay={0.6} direction="up" blur="4px">
          <TextGenerate
            words="Naturales, frescos y producidos con amor. Gallinas felices para una vida más sana."
            className="text-xl md:text-2xl text-[#8B6F5C] max-w-2xl mx-auto mb-10 font-light leading-relaxed"
            wordClassName="text-[#8B6F5C]"
            delay={0.8}
            duration={1}
          />
        </BlurFade>

        <BlurFade delay={1.0} direction="up">
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-[#7B9E6B] to-[#5C7A4E] text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-98"
          >
            Conocé nuestros productos
          </a>
        </BlurFade>
      </div>

      <BlurFade delay={1.2} inView>
        <div className="relative z-10 mt-16 flex gap-8 md:gap-16 text-center">
          {[
            { number: '100%', label: 'Natural' },
            { number: '0', label: 'Químicos' },
            { number: '∞', label: 'Frescura' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E8944A] to-[#F5C242]">
                {stat.number}
              </span>
              <span className="text-sm text-[#8B6F5C] mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </BlurFade>
    </div>
  );
};

export default HeroPrototype;
