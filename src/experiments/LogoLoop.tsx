import { useState } from 'react';

interface LogoItem {
  src?: string;
  alt?: string;
  href?: string;
  node?: React.ReactNode;
  title?: string;
  scale?: number;
}

interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: 'left' | 'right';
  logoHeight?: number;
  gap?: number;
  hoverSpeed?: number;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
  useCustomRender?: boolean;
}

export const LogoLoop = ({
  logos,
  speed = 100,
  direction = 'left',
  logoHeight = 60,
  gap = 60,
  hoverSpeed = 0,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = '#ffffff',
  ariaLabel = 'Logo loop',
  useCustomRender = false,
}: LogoLoopProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const totalLogos = logos.length;
  const duration = speed ? (totalLogos * 160) / speed : 20;
  const keyframeName = `marquee-${direction}-${totalLogos}`;

  const maskStyle = fadeOut
    ? {
        maskImage: `linear-gradient(to right, transparent 0%, ${fadeOutColor} 8%, ${fadeOutColor} 92%, transparent 100%)`,
        WebkitMaskImage: `linear-gradient(to right, transparent 0%, ${fadeOutColor} 8%, ${fadeOutColor} 92%, transparent 100%)`,
      }
    : {};

  return (
    <div
      className="relative overflow-hidden w-full"
      style={maskStyle}
      onMouseEnter={() => hoverSpeed === 0 && setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label={ariaLabel}
    >
      <style>{`
        @keyframes ${keyframeName} {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div
        className="flex items-center"
        style={{
          gap,
          animation: `${keyframeName} ${duration}s linear infinite`,
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <a
            key={i}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center flex-shrink-0"
            style={{ height: logoHeight * (logo.scale ?? 1) }}
          >
            {useCustomRender && logo.node ? (
              <span
                className={`flex items-center justify-center h-full ${
                  scaleOnHover ? 'hover:scale-110 transition-transform' : ''
                }`}
                title={logo.title}
              >
                {logo.node}
              </span>
            ) : (
              <img
                src={logo.src}
                alt={logo.alt || ''}
                className={`h-full w-auto max-w-[160px] object-contain ${
                  scaleOnHover ? 'hover:scale-110 transition-transform duration-300' : ''
                }`}
              />
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default LogoLoop;
