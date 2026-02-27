import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    const duration = 2000; // 2 seconds loading time
    const steps = 20;
    const intervalTime = duration / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + Math.floor(Math.random() * 10) + 1;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (count === 100) {
      // Small delay before triggering completion
      const timeout = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [count, onComplete]);

  // SVG path for the curve animation
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} 0 Q${dimension.width / 2} 0 0 0 L0 0`;

  const curve: Variants = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, delay: 0.4 } }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-neutral-950 cursor-wait"
    >
        {/* Content */}
        <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -100, transition: { duration: 0.5 } }}
            className="relative z-10 flex flex-col items-center justify-center"
        >
            <div className="flex items-start">
                <span className="text-8xl md:text-9xl font-clash font-bold text-white tracking-tighter tabular-nums">
                    {count}
                </span>
                <span className="text-2xl md:text-4xl font-clash font-medium text-neutral-500 mt-2 md:mt-4">%</span>
            </div>
            <div className="mt-4 overflow-hidden h-8">
                <motion.p 
                    initial={{ y: 30 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm font-sora text-neutral-400 uppercase tracking-widest"
                >
                    System Initializing...
                </motion.p>
            </div>
        </motion.div>

        {/* SVG Curtain curve */}
        {dimension.width > 0 && (
            <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none fill-neutral-950 z-0">
                <motion.path 
                    variants={curve} 
                    initial="initial" 
                    exit="exit" 
                />
            </svg>
        )}
    </motion.div>
  );
};

export default Preloader;