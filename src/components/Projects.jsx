import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import projects from "../data/projects.js";

export default function Projects({ darkMode }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // PHASE 2 & 3 - Smooth Zoom to Fullscreen
  const combinedScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.35],
    [1.2, 2.5, 4.5] // Zooming in significantly to cover the screen
  );

  const sideCardsOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const sideCardsScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  // PHASE 4 - Card moves up & Details reveal
  const cardY = useTransform(scrollYProgress, [0.35, 0.5], ["0vh", "-100vh"]);
  const detailsY = useTransform(scrollYProgress, [0.35, 0.5], ["100vh", "0vh"]);
  const detailsOpacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);

  // PHASE 5 - Carousel Logic
  // Project 1 Exit & Project 2 Enter
  const project1ExitX = useTransform(scrollYProgress, [0.63, 0.67], ["0vw", "-100vw"]);
  const project2EnterX = useTransform(scrollYProgress, [0.63, 0.67], ["100vw", "0vw"]);

  // Project 2 Exit & Project 3 Enter
  const project2ExitX = useTransform(scrollYProgress, [0.8, 0.84], ["0vw", "-100vw"]);
  const project3EnterX = useTransform(scrollYProgress, [0.8, 0.84], ["100vw", "0vw"]);

  const p1 = projects[0];
  const p2 = projects[1];
  const p3 = projects[2];

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-slate-950">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Phase 1 & 2: Initial Setup */}
        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* Side Card Left (P2 placeholder) */}
          <motion.div 
            style={{ opacity: sideCardsOpacity, scale: sideCardsScale, x: "-120%" }}
            className="absolute w-72 aspect-video rounded-2xl overflow-hidden border border-white/10 pointer-events-none"
          >
            <img src={p2.image} className="w-full h-full object-cover" alt="" />
          </motion.div>

          {/* Side Card Right (P3 placeholder) */}
          <motion.div 
            style={{ opacity: sideCardsOpacity, scale: sideCardsScale, x: "120%" }}
            className="absolute w-72 aspect-video rounded-2xl overflow-hidden border border-white/10 pointer-events-none"
          >
            <img src={p3.image} className="w-full h-full object-cover" alt="" />
          </motion.div>

          {/* Phase 1-4: Project 1 Container */}
          <motion.div 
            style={{ 
              scale: combinedScale,
              y: cardY,
              x: project1ExitX 
            }}
            className="relative z-20 w-96 aspect-video rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
          >
            <img src={p1.image} className="w-full h-full object-cover" alt={p1.name} />
          </motion.div>

          {/* Project 1 Details (Appears "below" in Phase 4) */}
          <motion.div 
            style={{ y: detailsY, opacity: detailsOpacity, x: project1ExitX }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 text-center bg-slate-950/80 backdrop-blur-3xl"
          >
            <div className="max-w-4xl px-6">
              <span className="text-blue-400 font-bold tracking-widest text-sm uppercase mb-4 block">{p1.category}</span>
              <h4 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">{p1.name}</h4>
              <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed font-light">{p1.description}</p>
              <div className="flex gap-8 justify-center">
                <a href={p1.github} className="flex items-center gap-3 text-white hover:text-blue-400 transition-colors bg-white/5 border border-white/10 px-8 py-4 rounded-full backdrop-blur-md">
                  <FiGithub size={28} />
                  <span className="font-bold uppercase tracking-widest text-sm">View Code</span>
                </a>
                <a href={p1.live} className="flex items-center gap-3 text-white hover:text-blue-400 transition-colors bg-blue-600/20 border border-blue-500/30 px-8 py-4 rounded-full backdrop-blur-md">
                  <FiExternalLink size={28} />
                  <span className="font-bold uppercase tracking-widest text-sm">Live Demo</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Phase 5: Additional Projects Header (Reveals after P1) */}
          <motion.div
            style={{ opacity: detailsOpacity, x: project1ExitX }}
            className="absolute top-20 left-12 z-50 pointer-events-none"
          >
            <h2 className="text-white/20 text-4xl font-black uppercase tracking-tighter">Additional Projects</h2>
          </motion.div>

          {/* Background Snowfall Effect for Phase 5 */}
          <motion.div 
            style={{ opacity: detailsOpacity }}
            className="absolute inset-0 z-20 pointer-events-none"
          >
             {[...Array(20)].map((_, i) => (
               <motion.div
                 key={i}
                 initial={{ 
                   x: `${Math.random() * 100}vw`, 
                   y: -20, 
                   opacity: Math.random() * 0.5 + 0.2,
                   scale: Math.random() * 0.5 + 0.5
                 }}
                 animate={{ 
                   y: "100vh",
                   transition: { 
                     duration: Math.random() * 5 + 5, 
                     repeat: Infinity, 
                     ease: "linear",
                     delay: Math.random() * 5
                   }
                 }}
                 className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
               />
             ))}
          </motion.div>

          {/* Phase 5: Project 2 Container (Boxed - Layout 2 Style) */}
          <motion.div 
            style={{ x: project2EnterX, translateX: project2ExitX }}
            className="absolute z-30 flex items-center justify-center pointer-events-auto"
          >
             <div className="w-[90vw] max-w-6xl h-[65vh] relative flex items-center justify-center">
                {/* Image Box */}
                <div className="absolute left-0 w-[55%] h-[80%] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl z-0">
                  <img src={p2.image} className="w-full h-full object-cover opacity-80" alt={p2.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Content Box (Layered on top) */}
                <div className="absolute right-0 w-[50%] h-[70%] bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/10 p-10 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-10 transition-transform hover:scale-[1.02] duration-500">
                  <div>
                    <h4 className="text-4xl font-black text-white mb-1 uppercase tracking-tight">{p2.name}</h4>
                    <span className="text-blue-400/80 font-medium text-sm mb-6 block tracking-wide">{p2.category}</span>
                    <p className="text-slate-300/90 text-sm leading-relaxed mb-8">{p2.description}</p>
                    
                    {/* Tech Pills (Simulated for this view) */}
                    <div className="flex flex-wrap gap-2 mb-8">
                       {p2.tech.map(t => (
                         <span key={t} className="text-[10px] font-bold text-white/50 border border-white/10 px-3 py-1 rounded-full uppercase tracking-widest">{t}</span>
                       ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <a href={p2.github} className="p-3 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-all">
                      <FiGithub size={18} />
                    </a>
                    <a href={p2.live} className="flex items-center gap-2 text-white/80 hover:text-blue-400 group/btn">
                       <span className="text-xs font-black uppercase tracking-[0.2em] border-b border-transparent group-hover/btn:border-blue-400 transition-all">Live Site</span>
                       <FiExternalLink size={14} />
                    </a>
                  </div>
                </div>
             </div>
          </motion.div>

          {/* Phase 5: Project 3 Container (Boxed - Layout 2 Style) */}
          <motion.div 
            style={{ x: project3EnterX }}
            className="absolute z-40 flex items-center justify-center pointer-events-auto"
          >
             <div className="w-[90vw] max-w-6xl h-[65vh] relative flex items-center justify-center">
                {/* Image Box */}
                <div className="absolute right-0 w-[55%] h-[80%] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl z-0">
                  <img src={p3.image} className="w-full h-full object-cover opacity-80" alt={p3.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Content Box (Layered on top) */}
                <div className="absolute left-0 w-[50%] h-[70%] bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/10 p-10 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-10 transition-transform hover:scale-[1.02] duration-500">
                  <div>
                    <h4 className="text-4xl font-black text-white mb-1 uppercase tracking-tight">{p3.name}</h4>
                    <span className="text-blue-400/80 font-medium text-sm mb-6 block tracking-wide">{p3.category}</span>
                    <p className="text-slate-300/90 text-sm leading-relaxed mb-8">{p3.description}</p>
                    
                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                       {p3.tech.map(t => (
                         <span key={t} className="text-[10px] font-bold text-white/50 border border-white/10 px-3 py-1 rounded-full uppercase tracking-widest">{t}</span>
                       ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <a href={p3.github} className="p-3 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-all">
                      <FiGithub size={18} />
                    </a>
                    <a href={p3.live} className="flex items-center gap-2 text-white/80 hover:text-blue-400 group/btn">
                       <span className="text-xs font-black uppercase tracking-[0.2em] border-b border-transparent group-hover/btn:border-blue-400 transition-all">Demo</span>
                       <FiExternalLink size={14} />
                    </a>
                  </div>
                </div>
             </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 text-xs font-bold uppercase tracking-[0.3em]"
        >
          Scroll to explore
        </motion.div>

      </div>
    </div>
  );
}