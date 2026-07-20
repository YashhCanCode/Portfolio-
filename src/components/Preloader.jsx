import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Intro: signature writes itself on the dark screen, then the shutter lifts away.
const WRITE = 1.6;

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-brand-dark z-[100000] flex items-center justify-center px-6"
        >
          <motion.div
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative"
          >
            {/* the signature writing itself */}
            <motion.p
              className="font-script text-5xl sm:text-6xl md:text-7xl text-brand-light whitespace-nowrap leading-none"
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: WRITE, ease: [0.4, 0, 0.2, 1] }}
            >
              Konnuru Yashwanth
            </motion.p>

            {/* pen tip riding the stroke */}
            <motion.span
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-accent"
              initial={{ left: '0%', opacity: 1 }}
              animate={{ left: '100%', opacity: 0 }}
              transition={{ duration: WRITE, ease: [0.4, 0, 0.2, 1], opacity: { delay: WRITE - 0.2, duration: 0.2 } }}
            />

            {/* flourish underline */}
            <svg
              className="absolute -bottom-3 left-0 w-full"
              height="16"
              viewBox="0 0 300 16"
              fill="none"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M3 11 C 70 3, 210 3, 297 8"
                stroke="#c29f74"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: WRITE - 0.1, duration: 0.5, ease: 'easeOut' }}
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
