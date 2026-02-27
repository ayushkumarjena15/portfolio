import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="h-screen w-full fixed top-0 left-0 flex flex-col items-center justify-center overflow-hidden bg-neutral-950 z-0">
      {/* Grid Background */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Top Left Text - Positioned below the main header */}
      <div className="absolute top-32 left-6 md:left-12 max-w-[200px] text-[10px] md:text-xs uppercase tracking-widest text-neutral-400 font-medium z-20 leading-relaxed hidden md:block">
        Creative Developer<br />
        Designing Intelligent<br />
        Digital Systems.
      </div>

      {/* Top Right Status - Positioned below the main header area */}
      <div className="absolute top-32 right-6 md:right-12 z-20 hidden md:flex items-center gap-2 px-4 py-2 border border-neutral-800 rounded-full bg-neutral-900/50 backdrop-blur-sm">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-300">Open to Work</span>
      </div>

      {/* Marquee Text - Background Layer */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden z-0 select-none opacity-30 md:opacity-40 mix-blend-color-dodge pointer-events-none">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 8 // Faster animation speed
          }}
        >
          {/* Repeated text for seamless loop - using the stylish Pinyon Script font */}
          <div className="flex items-center">
            <span className="text-[35vw] md:text-[25vw] leading-none font-clash font-bold uppercase text-neutral-300 tracking-tighter pr-12">AYUSH</span>
            <span className="text-[35vw] md:text-[25vw] leading-none font-clash font-bold uppercase text-neutral-300 tracking-tighter pr-12">AYUSH</span>
            <span className="text-[35vw] md:text-[25vw] leading-none font-clash font-bold uppercase text-neutral-300 tracking-tighter pr-12">AYUSH</span>
            <span className="text-[35vw] md:text-[25vw] leading-none font-clash font-bold uppercase text-neutral-300 tracking-tighter pr-12">AYUSH</span>
          </div>
          <div className="flex items-center">
            <span className="text-[35vw] md:text-[25vw] leading-none font-clash font-bold uppercase text-neutral-300 tracking-tighter pr-12">AYUSH</span>
            <span className="text-[35vw] md:text-[25vw] leading-none font-clash font-bold uppercase text-neutral-300 tracking-tighter pr-12">AYUSH</span>
            <span className="text-[35vw] md:text-[25vw] leading-none font-clash font-bold uppercase text-neutral-300 tracking-tighter pr-12">AYUSH</span>
            <span className="text-[35vw] md:text-[25vw] leading-none font-clash font-bold uppercase text-neutral-300 tracking-tighter pr-12">AYUSH</span>
          </div>
        </motion.div>
      </div>

      {/* Central Portrait - Box styling removed */}
      <motion.div
        className="relative z-10 w-[90vw] md:w-[35vw] md:max-w-[600px] flex justify-center items-center"
        initial={{ y: 100, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/hero-portrait.png"
          alt=""
          className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
        />
        {/* Decorative overlays removed for a clean cutout look */}
      </motion.div>

      {/* Bottom Left Scroll - ENHANCED */}
      <div className="absolute bottom-8 left-6 md:left-12 z-20 flex items-center gap-4 group cursor-pointer mix-blend-difference">
        <div className="relative flex flex-col items-center">
          {/* Mouse Body */}
          <div className="w-[26px] h-[42px] border-[1.5px] border-neutral-400 rounded-full flex justify-center pt-2 group-hover:border-white transition-colors duration-300 backdrop-blur-sm bg-black/10">
            {/* Scroll Wheel */}
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1 h-1.5 bg-neutral-300 rounded-full group-hover:bg-white"
            />
          </div>
        </div>

        <div className="overflow-hidden hidden md:block">
          <span className="block text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400 group-hover:text-white transition-colors duration-300">
            Scroll Down
          </span>
        </div>
      </div>

      {/* Bottom Right Copyright */}
      <div className="absolute bottom-8 right-6 md:right-12 z-20">
        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-600 border border-neutral-800 px-3 py-1 rounded-full bg-neutral-900/50 backdrop-blur-sm">© {new Date().getFullYear()}</span>
      </div>
    </section>
  );
};

export default Hero;