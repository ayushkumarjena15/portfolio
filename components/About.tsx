import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-[#F5F2EB] text-neutral-900 min-h-[80vh] flex items-center">
      <div className="w-full">
         <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
                <h2 className="text-[10px] uppercase tracking-[0.14em] font-sora font-semibold text-[#A89F91] mb-8">About Me</h2>
                <div className="w-full h-[400px] bg-[#EBE7E0] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                     <img src="https://picsum.photos/600/800?random=10" alt="Portrait" className="w-full h-full object-cover opacity-80 mix-blend-multiply" />
                </div>
            </div>
            
            <div className="md:col-span-8 flex flex-col justify-center">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl md:text-4xl leading-tight font-light mb-12 text-[#2D2D2A]"
                >
                  I'm a curious developer exploring the future of software through <span className="text-[#BFA18F] italic font-medium">AI</span> and <span className="text-[#BFA18F] italic font-medium">intelligent systems</span>. I enjoy building practical tools using <span className="text-[#BFA18F] italic font-medium">modern web stacks</span>, <span className="text-[#BFA18F] italic font-medium">large language models</span>, and creative problem-solving — turning ideas into <span className="text-[#BFA18F] italic font-medium">real, usable products</span>.
                </motion.p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div>
                       <h3 className="text-[10px] uppercase tracking-[0.14em] font-sora font-semibold text-[#A89F91] mb-4 border-b border-[#DCD6CC] pb-2">Services</h3>
                       <ul className="space-y-2 text-base font-sora font-semibold tracking-[0.14em] text-[#4A4A45]">
                           <li>AI Application Development</li>
                           <li>LLM Integrations & RAG Systems</li>
                           <li>Full-Stack Web Development</li>
                           <li>Developer Tools & Experiments</li>
                       </ul>
                   </div>
                   <div>
                       <h3 className="text-[10px] uppercase tracking-[0.14em] font-sora font-semibold text-[#A89F91] mb-4 border-b border-[#DCD6CC] pb-2">Tech Stack</h3>
                       <ul className="space-y-2 text-base font-sora font-semibold tracking-[0.14em] text-[#4A4A45]">
                           <li>Next.js / React</li>
                           <li>Node.js</li>
                           <li>Python (AI/ML)</li>
                           <li>LLM APIs & RAG</li>
                           <li>Git / Linux</li>
                       </ul>
                   </div>
                </div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default About;