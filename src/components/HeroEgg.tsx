import { motion } from 'framer-motion';

interface HeroEggProps {
  className?: string;
}

export default function HeroEgg({ className = '' }: HeroEggProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        y: [0, -15, 0],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg
        width="200"
        height="260"
        viewBox="0 0 200 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-2xl"
      >
        <defs>
          <linearGradient id="eggGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5C242" />
            <stop offset="50%" stopColor="#FAD979" />
            <stop offset="100%" stopColor="#E8944A" />
          </linearGradient>
          <linearGradient id="eggHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.6" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Glow effect */}
        <ellipse
          cx="100"
          cy="130"
          rx="90"
          ry="115"
          fill="url(#eggGradient)"
          opacity="0.3"
          filter="url(#glow)"
        />
        
        {/* Main egg */}
        <ellipse
          cx="100"
          cy="130"
          rx="80"
          ry="110"
          fill="url(#eggGradient)"
        />
        
        {/* Highlight */}
        <ellipse
          cx="70"
          cy="90"
          rx="25"
          ry="40"
          fill="url(#eggHighlight)"
        />
        
        {/* Small highlight */}
        <ellipse
          cx="55"
          cy="70"
          rx="8"
          ry="12"
          fill="white"
          opacity="0.5"
        />
      </svg>
    </motion.div>
  );
}
