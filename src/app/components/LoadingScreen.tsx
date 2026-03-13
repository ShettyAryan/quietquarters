import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logoImage from "../../assets/logo.png";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [stage, setStage] = useState<'logo' | 'text' | 'fadeOut'>('logo');

  useEffect(() => {
    // Stage 1: Show logo (longer duration for impact)
    const timer1 = setTimeout(() => {
      setStage('text');
    }, 1500);

    // Stage 2: Show text
    const timer2 = setTimeout(() => {
      setStage('fadeOut');
    }, 3500);

    // Stage 3: Complete
    const timer3 = setTimeout(() => {
      onComplete();
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: stage === 'fadeOut' ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="fixed inset-0 bg-[#4A3A33] z-[100] flex items-center justify-center"
      >
        <div className="text-center">
          {/* Logo with fade, scale, and subtle rotation animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="mb-16"
          >
            <img 
              src={logoImage} 
              alt="Quiet Quarters Logo" 
              className="w-32 h-32 mx-auto opacity-95"
            />
          </motion.div>
          
          {/* Text with letter-spacing animation */}
          <motion.h1
            initial={{ opacity: 0, letterSpacing: '1em' }}
            animate={{ 
              opacity: stage === 'logo' ? 0 : 1, 
              letterSpacing: stage === 'logo' ? '1em' : '0.4em' 
            }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.4 },
              letterSpacing: { duration: 1.4, delay: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }
            }}
            className="text-[#F6F4F1] text-3xl md:text-4xl"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            QUIET QUARTERS
          </motion.h1>

          {/* Subtle line animation underneath */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ 
              width: stage === 'text' || stage === 'fadeOut' ? '240px' : 0,
              opacity: stage === 'text' || stage === 'fadeOut' ? 0.4 : 0
            }}
            transition={{ duration: 1, delay: 1.2, ease: 'easeInOut' }}
            className="h-[1px] bg-[#F6F4F1] mx-auto mt-10"
          />
          
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: stage === 'text' || stage === 'fadeOut' ? 0.6 : 0
            }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-[#F6F4F1] text-sm uppercase tracking-[0.3em] mt-8"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Where design meets stillness
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}