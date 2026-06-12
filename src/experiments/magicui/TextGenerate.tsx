import { useEffect, useRef } from 'react';
import { useAnimate, stagger } from 'framer-motion';

interface TextGenerateProps {
  words: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  duration?: number;
}

export function TextGenerate({
  words,
  className = '',
  wordClassName = '',
  delay = 0,
  duration = 0.8,
}: TextGenerateProps) {
  const [scope, animate] = useAnimate();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const timeout = setTimeout(() => {
      animate(
        scope.current.querySelectorAll('.word-span'),
        { opacity: 1, filter: 'blur(0px)' },
        { duration, delay: stagger(0.08), ease: 'easeOut' },
      );
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [animate, scope, delay, duration]);

  const wordArray = words.split(' ');

  return (
    <div ref={scope} className={className}>
      {wordArray.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={`word-span inline-block opacity-0 blur-sm ${wordClassName}`}
        >
          {word}
          {i < wordArray.length - 1 && '\u00A0'}
        </span>
      ))}
    </div>
  );
}
