// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { FiGithub, FiExternalLink } from "react-icons/fi";
// import projects from "../../data/projects.js";

// export default function Projects({ darkMode }) {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   // PHASE 2 & 3 - Smooth Zoom to Fullscreen
//   const combinedScale = useTransform(
//     scrollYProgress,
//     [0, 0.3, 0.35],
//     [1.2, 2.5, 4.5] // Zooming in significantly to cover the screen
//   );

//   const sideCardsOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
//   const sideCardsScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

//   // PHASE 4 - Card moves up & Details reveal
//   const cardY = useTransform(scrollYProgress, [0.35, 0.5], ["0vh", "-100vh"]);
//   const detailsY = useTransform(scrollYProgress, [0.35, 0.5], ["100vh", "0vh"]);
//   const detailsOpacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);

//   // PHASE 5 - Carousel Logic
//   // Project 1 Exit & Project 2 Enter
//   const project1ExitX = useTransform(scrollYProgress, [0.63, 0.67], ["0vw", "-100vw"]);
//   const project2EnterX = useTransform(scrollYProgress, [0.63, 0.67], ["100vw", "0vw"]);

//   // Project 2 Exit & Project 3 Enter
//   const project2ExitX = useTransform(scrollYProgress, [0.8, 0.84], ["0vw", "-100vw"]);
//   const project3EnterX = useTransform(scrollYProgress, [0.8, 0.84], ["100vw", "0vw"]);

//   const p1 = projects[0];
//   const p2 = projects[1];
//   const p3 = projects[2];

//   return (
//     <div ref={containerRef} className="relative h-[500vh] bg-slate-950">
//       <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
//         {/* Phase 1 & 2: Initial Setup */}
//         <div className="relative w-full h-full flex items-center justify-center">
          
//           {/* Side Card Left (P2 placeholder) */}
//           <motion.div 
//             style={{ opacity: sideCardsOpacity, scale: sideCardsScale, x: "-120%" }}
//             className="absolute w-72 aspect-video rounded-2xl overflow-hidden border border-white/10 pointer-events-none"
//           >
//             <img src={p2.image} className="w-full h-full object-cover" alt="" />
//           </motion.div>

//           {/* Side Card Right (P3 placeholder) */}
//           <motion.div 
//             style={{ opacity: sideCardsOpacity, scale: sideCardsScale, x: "120%" }}
//             className="absolute w-72 aspect-video rounded-2xl overflow-hidden border border-white/10 pointer-events-none"
//           >
//             <img src={p3.image} className="w-full h-full object-cover" alt="" />
//           </motion.div>

//           {/* Phase 1-4: Project 1 Container */}
//           <motion.div 
//             style={{ 
//               scale: combinedScale,
//               y: cardY,
//               x: project1ExitX 
//             }}
//             className="relative z-20 w-96 aspect-video rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
//           >
//             <img src={p1.image} className="w-full h-full object-cover" alt={p1.name} />
//           </motion.div>

//           {/* Project 1 Details (Appears "below" in Phase 4) */}
//           <motion.div 
//             style={{ y: detailsY, opacity: detailsOpacity, x: project1ExitX }}
//             className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 text-center bg-slate-950/80 backdrop-blur-3xl"
//           >
//             <div className="max-w-4xl px-6">
//               <span className="text-blue-400 font-bold tracking-widest text-sm uppercase mb-4 block">{p1.category}</span>
//               <h4 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">{p1.name}</h4>
//               <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed font-light">{p1.description}</p>
//               <div className="flex gap-8 justify-center">
//                 <a href={p1.github} className="flex items-center gap-3 text-white hover:text-blue-400 transition-colors bg-white/5 border border-white/10 px-8 py-4 rounded-full backdrop-blur-md">
//                   <FiGithub size={28} />
//                   <span className="font-bold uppercase tracking-widest text-sm">View Code</span>
//                 </a>
//                 <a href={p1.live} className="flex items-center gap-3 text-white hover:text-blue-400 transition-colors bg-blue-600/20 border border-blue-500/30 px-8 py-4 rounded-full backdrop-blur-md">
//                   <FiExternalLink size={28} />
//                   <span className="font-bold uppercase tracking-widest text-sm">Live Demo</span>
//                 </a>
//               </div>
//             </div>
//           </motion.div>

//           {/* Phase 5: Additional Projects Header (Reveals after P1) */}
//           <motion.div
//             style={{ opacity: detailsOpacity, x: project1ExitX }}
//             className="absolute top-20 left-12 z-50 pointer-events-none"
//           >
//             <h2 className="text-white/20 text-4xl font-black uppercase tracking-tighter">Additional Projects</h2>
//           </motion.div>

//           {/* Background Snowfall Effect for Phase 5 */}
//           <motion.div 
//             style={{ opacity: detailsOpacity }}
//             className="absolute inset-0 z-20 pointer-events-none"
//           >
//              {[...Array(20)].map((_, i) => (
//                <motion.div
//                  key={i}
//                  initial={{ 
//                    x: `${Math.random() * 100}vw`, 
//                    y: -20, 
//                    opacity: Math.random() * 0.5 + 0.2,
//                    scale: Math.random() * 0.5 + 0.5
//                  }}
//                  animate={{ 
//                    y: "100vh",
//                    transition: { 
//                      duration: Math.random() * 5 + 5, 
//                      repeat: Infinity, 
//                      ease: "linear",
//                      delay: Math.random() * 5
//                    }
//                  }}
//                  className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
//                />
//              ))}
//           </motion.div>

//           {/* Phase 5: Project 2 Container (Boxed - Layout 2 Style) */}
//           <motion.div 
//             style={{ x: project2EnterX, translateX: project2ExitX }}
//             className="absolute z-30 flex items-center justify-center pointer-events-auto"
//           >
//              <div className="w-[90vw] max-w-6xl h-[65vh] relative flex items-center justify-center">
//                 {/* Image Box */}
//                 <div className="absolute left-0 w-[55%] h-[80%] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl z-0">
//                   <img src={p2.image} className="w-full h-full object-cover opacity-80" alt={p2.name} />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                 </div>

//                 {/* Content Box (Layered on top) */}
//                 <div className="absolute right-0 w-[50%] h-[70%] bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/10 p-10 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-10 transition-transform hover:scale-[1.02] duration-500">
//                   <div>
//                     <h4 className="text-4xl font-black text-white mb-1 uppercase tracking-tight">{p2.name}</h4>
//                     <span className="text-blue-400/80 font-medium text-sm mb-6 block tracking-wide">{p2.category}</span>
//                     <p className="text-slate-300/90 text-sm leading-relaxed mb-8">{p2.description}</p>
                    
//                     {/* Tech Pills (Simulated for this view) */}
//                     <div className="flex flex-wrap gap-2 mb-8">
//                        {p2.tech.map(t => (
//                          <span key={t} className="text-[10px] font-bold text-white/50 border border-white/10 px-3 py-1 rounded-full uppercase tracking-widest">{t}</span>
//                        ))}
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-6">
//                     <a href={p2.github} className="p-3 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-all">
//                       <FiGithub size={18} />
//                     </a>
//                     <a href={p2.live} className="flex items-center gap-2 text-white/80 hover:text-blue-400 group/btn">
//                        <span className="text-xs font-black uppercase tracking-[0.2em] border-b border-transparent group-hover/btn:border-blue-400 transition-all">Live Site</span>
//                        <FiExternalLink size={14} />
//                     </a>
//                   </div>
//                 </div>
//              </div>
//           </motion.div>

//           {/* Phase 5: Project 3 Container (Boxed - Layout 2 Style) */}
//           <motion.div 
//             style={{ x: project3EnterX }}
//             className="absolute z-40 flex items-center justify-center pointer-events-auto"
//           >
//              <div className="w-[90vw] max-w-6xl h-[65vh] relative flex items-center justify-center">
//                 {/* Image Box */}
//                 <div className="absolute right-0 w-[55%] h-[80%] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl z-0">
//                   <img src={p3.image} className="w-full h-full object-cover opacity-80" alt={p3.name} />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                 </div>

//                 {/* Content Box (Layered on top) */}
//                 <div className="absolute left-0 w-[50%] h-[70%] bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/10 p-10 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-10 transition-transform hover:scale-[1.02] duration-500">
//                   <div>
//                     <h4 className="text-4xl font-black text-white mb-1 uppercase tracking-tight">{p3.name}</h4>
//                     <span className="text-blue-400/80 font-medium text-sm mb-6 block tracking-wide">{p3.category}</span>
//                     <p className="text-slate-300/90 text-sm leading-relaxed mb-8">{p3.description}</p>
                    
//                     {/* Tech Pills */}
//                     <div className="flex flex-wrap gap-2 mb-8">
//                        {p3.tech.map(t => (
//                          <span key={t} className="text-[10px] font-bold text-white/50 border border-white/10 px-3 py-1 rounded-full uppercase tracking-widest">{t}</span>
//                        ))}
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-6">
//                     <a href={p3.github} className="p-3 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-all">
//                       <FiGithub size={18} />
//                     </a>
//                     <a href={p3.live} className="flex items-center gap-2 text-white/80 hover:text-blue-400 group/btn">
//                        <span className="text-xs font-black uppercase tracking-[0.2em] border-b border-transparent group-hover/btn:border-blue-400 transition-all">Demo</span>
//                        <FiExternalLink size={14} />
//                     </a>
//                   </div>
//                 </div>
//              </div>
//           </motion.div>

//         </div>

//         {/* Scroll Indicator */}
//         <motion.div 
//           style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
//           className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 text-xs font-bold uppercase tracking-[0.3em]"
//         >
//           Scroll to explore
//         </motion.div>

//       </div>
//     </div>
//   );
// }

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FiGithub, FiExternalLink, FiArrowRight, FiStar, FiCode } from "react-icons/fi";
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiPython } from "react-icons/si";
import projects from "../../data/projects.js";

export default function Projects({ darkMode }) {
  const containerRef = useRef(null);
  const [activeProject, setActiveProject] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Enhanced phase transitions
  const combinedScale = useTransform(smoothProgress, [0, 0.3, 0.35], [1, 2.2, 4]);
  const sideCardsOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const sideCardsScale = useTransform(smoothProgress, [0, 0.2], [1, 0.7]);
  
  const cardY = useTransform(smoothProgress, [0.35, 0.5], ["0vh", "-120vh"]);
  const detailsY = useTransform(smoothProgress, [0.35, 0.5], ["100vh", "0vh"]);
  const detailsOpacity = useTransform(smoothProgress, [0.35, 0.45], [0, 1]);
  
  const project1ExitX = useTransform(smoothProgress, [0.6, 0.68], ["0vw", "-120vw"]);
  const project2EnterX = useTransform(smoothProgress, [0.6, 0.68], ["120vw", "0vw"]);
  const project2ExitX = useTransform(smoothProgress, [0.78, 0.86], ["0vw", "-120vw"]);
  const project3EnterX = useTransform(smoothProgress, [0.78, 0.86], ["120vw", "0vw"]);

  const p1 = projects[0];
  const p2 = projects[1];
  const p3 = projects[2];

  // Arrange tech stack in perfect pyramid
  const arrangeTechPyramid = (techs) => {
    const rows = [];
    const counts = [4, 3, 2];
    let remaining = [...techs];
    
    counts.forEach(count => {
      if (remaining.length > 0) {
        rows.push(remaining.splice(0, Math.min(count, remaining.length)));
      }
    });
    
    if (remaining.length > 0) {
      rows.push(remaining);
    }
    
    return rows;
  };

  // Get icon for tech
  const getTechIcon = (tech) => {
    const icons = {
      "React": <SiReact className="text-blue-400" />,
      "Next.js": <SiNextdotjs className="text-white" />,
      "Tailwind": <SiTailwindcss className="text-cyan-400" />,
      "Node.js": <SiNodedotjs className="text-green-500" />,
      "Python": <SiPython className="text-yellow-500" />
    };
    return icons[tech] || <FiCode className="text-gray-400" />;
  };

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Phase 1-4: Main Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* Floating Particles Effect */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: Math.random() * 0.5 + 0.3,
                }}
                animate={{
                  y: [null, -100, -200],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 10,
                }}
                className="absolute w-1 h-1 bg-blue-500/30 rounded-full blur-[1px]"
              />
            ))}
          </div>

          {/* Side Cards with Enhanced Effects */}
          <motion.div 
            style={{ opacity: sideCardsOpacity, scale: sideCardsScale, x: "-130%", rotateY: -15 }}
            className="absolute w-80 aspect-video rounded-2xl overflow-hidden border border-white/20 shadow-2xl pointer-events-none"
          >
            <img src={p2.image} className="w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </motion.div>

          <motion.div 
            style={{ opacity: sideCardsOpacity, scale: sideCardsScale, x: "130%", rotateY: 15 }}
            className="absolute w-80 aspect-video rounded-2xl overflow-hidden border border-white/20 shadow-2xl pointer-events-none"
          >
            <img src={p3.image} className="w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </motion.div>

          {/* Main Project Card with Glow Effect */}
          <motion.div 
            style={{ 
              scale: combinedScale,
              y: cardY,
              x: project1ExitX,
              boxShadow: useTransform(smoothProgress, [0, 0.3], ["0 0 0px rgba(59,130,246,0)", "0 0 50px rgba(59,130,246,0.5)"])
            }}
            className="relative z-20 w-[500px] aspect-video rounded-2xl overflow-hidden border-2 border-white/30 shadow-2xl"
          >
            <img src={p1.image} className="w-full h-full object-cover" alt={p1.name} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Glow Ring */}
            <motion.div 
              className="absolute inset-0 rounded-2xl border-2 border-blue-500/50"
              style={{ opacity: useTransform(smoothProgress, [0, 0.2], [0, 1]) }}
            />
          </motion.div>

          {/* Project 1 Details with Enhanced Design */}
          <motion.div 
            style={{ y: detailsY, opacity: detailsOpacity, x: project1ExitX }}
            className="absolute inset-0 z-10 flex items-center justify-center"
          >
            <div className="max-w-5xl w-full px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-center"
              >
                {/* Category Badge */}
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="inline-block px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/50 text-blue-400 font-bold tracking-widest text-sm mb-6 backdrop-blur-sm"
                >
                  {p1.category}
                </motion.span>
                
                {/* Title with Gradient */}
                <motion.h4 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
                >
                  {p1.name}
                </motion.h4>
                
                {/* Description */}
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
                >
                  {p1.description}
                </motion.p>
                
                {/* Tech Stack Pyramid */}
                {p1.tech && p1.tech.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mb-12"
                  >
                    <div className="flex flex-col items-center gap-3">
                      {arrangeTechPyramid(p1.tech).map((row, rowIdx) => (
                        <motion.div 
                          key={rowIdx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + rowIdx * 0.1 }}
                          className="flex flex-wrap justify-center gap-3"
                        >
                          {row.map((tech, techIdx) => (
                            <motion.span
                              key={techIdx}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="group relative px-5 py-2.5 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-white/80 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 cursor-default backdrop-blur-sm"
                            >
                              <span className="relative z-10 flex items-center gap-2">
                                {getTechIcon(tech)}
                                {tech}
                              </span>
                            </motion.span>
                          ))}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
                
                {/* Action Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="flex gap-6 justify-center"
                >
                  <a 
                    href={p1.github} 
                    className="group relative px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white hover:text-blue-400 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-blue-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <div className="relative flex items-center gap-3">
                      <FiGithub size={24} />
                      <span className="font-bold uppercase tracking-widest text-sm">View Code</span>
                    </div>
                  </a>
                  <a 
                    href={p1.live} 
                    className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                  >
                    <div className="relative flex items-center gap-3">
                      <FiExternalLink size={24} />
                      <span className="font-bold uppercase tracking-widest text-sm">Live Demo</span>
                      <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Additional Projects Header */}
          <motion.div
            style={{ opacity: detailsOpacity, x: project1ExitX }}
            className="absolute top-24 left-16 z-50"
          >
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-white/10 text-6xl font-black uppercase tracking-tighter"
            >
              More Projects
            </motion.h2>
          </motion.div>

          {/* Project 2 - Glassmorphism Card */}
          <motion.div 
            style={{ x: project2EnterX, translateX: project2ExitX }}
            className="absolute z-30 w-full max-w-7xl px-8"
          >
            <div className="relative w-full h-[70vh] flex items-center justify-center">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
              
              {/* Main Card */}
              <div className="relative w-full h-full flex gap-8">
                {/* Image Section */}
                <motion.div 
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex-1 relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl group"
                >
                  <img src={p2.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={p2.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-xs font-bold text-white">
                    Featured Project
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div 
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex-1 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 flex flex-col justify-between shadow-2xl"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <FiStar className="text-yellow-400 fill-yellow-400" />
                      <span className="text-blue-400 font-bold text-sm uppercase tracking-wider">{p2.category}</span>
                    </div>
                    
                    <h3 className="text-5xl font-bold text-white mb-4">{p2.name}</h3>
                    <p className="text-slate-300 leading-relaxed mb-8">{p2.description}</p>
                    
                    {/* Tech Pyramid */}
                    {p2.tech && p2.tech.length > 0 && (
                      <div className="mb-8">
                        <div className="flex flex-col gap-2">
                          {arrangeTechPyramid(p2.tech).map((row, rowIdx) => (
                            <div key={rowIdx} className="flex flex-wrap gap-2">
                              {row.map((tech, techIdx) => (
                                <span
                                  key={techIdx}
                                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 border border-white/20 text-white/80 hover:border-blue-500 transition-all duration-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-4">
                    <a href={p2.github} className="p-3 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-blue-500 transition-all">
                      <FiGithub size={20} />
                    </a>
                    <a href={p2.live} className="group flex items-center gap-2 text-white/80 hover:text-blue-400 transition-all">
                      <span className="text-sm font-bold uppercase tracking-wider">Live Demo</span>
                      <FiExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Project 3 - Mirror Layout */}
          <motion.div 
            style={{ x: project3EnterX }}
            className="absolute z-40 w-full max-w-7xl px-8"
          >
            <div className="relative w-full h-[70vh] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-3xl blur-3xl" />
              
              <div className="relative w-full h-full flex gap-8 flex-row-reverse">
                <motion.div 
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex-1 relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl group"
                >
                  <img src={p3.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={p3.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 right-6 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-xs font-bold text-white">
                    Latest Work
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex-1 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 flex flex-col justify-between shadow-2xl"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <FiCode className="text-purple-400" />
                      <span className="text-purple-400 font-bold text-sm uppercase tracking-wider">{p3.category}</span>
                    </div>
                    
                    <h3 className="text-5xl font-bold text-white mb-4">{p3.name}</h3>
                    <p className="text-slate-300 leading-relaxed mb-8">{p3.description}</p>
                    
                    {p3.tech && p3.tech.length > 0 && (
                      <div className="mb-8">
                        <div className="flex flex-col gap-2">
                          {arrangeTechPyramid(p3.tech).map((row, rowIdx) => (
                            <div key={rowIdx} className="flex flex-wrap gap-2">
                              {row.map((tech, techIdx) => (
                                <span
                                  key={techIdx}
                                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 border border-white/20 text-white/80 hover:border-purple-500 transition-all duration-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-4">
                    <a href={p3.github} className="p-3 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-purple-500 transition-all">
                      <FiGithub size={20} />
                    </a>
                    <a href={p3.live} className="group flex items-center gap-2 text-white/80 hover:text-purple-400 transition-all">
                      <span className="text-sm font-bold uppercase tracking-wider">View Project</span>
                      <FiExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div 
          style={{ opacity: useTransform(smoothProgress, [0, 0.05], [1, 0]) }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <div className="text-white/40 text-xs font-bold uppercase tracking-[0.3em]">Scroll to explore</div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-[2px] h-12 bg-gradient-to-b from-blue-500 to-transparent"
          />
        </motion.div>

      </div>
    </div>
  );
}