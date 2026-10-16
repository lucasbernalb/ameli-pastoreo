import { motion } from 'framer-motion';

/**
 * Cinta de papel con bordes irregulares, como recortada a mano.
 * Se superpone a las dos secciones que une (margen negativo) y tapa la costura.
 * Dos formas distintas para que no se repita siempre la misma.
 */
const SHAPES = {
  a: 'M0,34 C140,12 230,46 380,30 S620,10 760,32 S1010,52 1160,26 S1360,12 1440,30 L1440,74 C1310,92 1200,64 1040,80 S790,98 650,76 S400,60 270,82 S90,92 0,70 Z',
  b: 'M0,28 C110,48 260,16 410,36 S690,54 820,28 S1080,8 1220,34 S1380,46 1440,26 L1440,70 C1340,56 1190,90 1050,72 S800,56 660,80 S380,100 240,76 S70,60 0,78 Z',
} as const;

const maskFor = (d: string) =>
  `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 100' preserveAspectRatio='none'><path d='${d}' fill='black'/></svg>`
  )}")`;

export const SectionSeparator = ({ variant = 'a' }: { variant?: keyof typeof SHAPES }) => {
  const mask = maskFor(SHAPES[variant]);

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative z-20 pointer-events-none -my-7 md:-my-11"
      style={{ filter: 'drop-shadow(0 4px 10px rgba(0,0,0,.3))' }}
    >
      <div
        className="h-14 md:h-[5.5rem] w-full"
        style={{
          backgroundColor: '#F5F0E8',
          backgroundImage: 'url("/texturas/E4D9C4-low-contrast-linen.png")',
          WebkitMaskImage: mask,
          maskImage: mask,
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        }}
      />

      {/* Huevito en el centro (aparte de la forma para que no se deforme al estirarse) */}
      <svg
        viewBox="0 0 22 28"
        className="absolute left-1/2 top-1/2 w-[22px] md:w-[28px] -translate-x-1/2 -translate-y-1/2 -rotate-[10deg]"
      >
        <path
          d="M11 1C5.5 1 1.5 9.5 1.5 17a9.5 9.5 0 0 0 19 0C20.5 9.5 16.5 1 11 1Z"
          fill="#F5C242"
        />
        <path
          d="M7 11c.6-2.4 1.8-4.4 3.2-5.4"
          fill="none"
          stroke="#fff"
          strokeOpacity=".55"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
};

export default SectionSeparator;
