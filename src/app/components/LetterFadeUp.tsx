import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

interface LetterFadeUpProps {
  text: string;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  staggerDelay?: number;
  duration?: number;
}

export function LetterFadeUp({ 
  text, 
  delay = 0, 
  className = '', 
  style = {},
  staggerDelay = 0.03,
  duration = 0.8
}: LetterFadeUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Split text into words and characters, preserving spaces
  const words = text.split(' ');

  return (
    <span ref={ref} className={className} style={style}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.split('').map((char, charIndex) => {
            const totalIndex = words.slice(0, wordIndex).join('').length + wordIndex + charIndex;
            return (
              <motion.span
                key={charIndex}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{
                  duration: duration,
                  delay: delay + (totalIndex * staggerDelay),
                  ease: [0.19, 1, 0.22, 1]
                }}
                style={{ display: 'inline-block' }}
              >
                {char}
              </motion.span>
            );
          })}
          {wordIndex < words.length - 1 && <span style={{ display: 'inline-block', width: '0.25em' }}>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}
