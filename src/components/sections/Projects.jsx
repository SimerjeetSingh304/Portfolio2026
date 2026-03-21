import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";
import { FiGithub, FiExternalLink, FiArrowRight, FiStar, FiCode, FiEye, FiHeart, FiClock, FiTrendingUp } from "react-icons/fi";
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiPython, SiTypescript, SiMongodb, SiPostgresql, SiTensorflow, SiDocker } from "react-icons/si";
import projects from "../../data/projects.js";

// Enhanced tech icon mapping
const techIcons = {
  "React": { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  "Tailwind": { icon: SiTailwindcss, color: "#06B6D4" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Python": { icon: SiPython, color: "#3776AB" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "MongoDB": { icon: SiMongodb, color: "#47A248" },
  "PostgreSQL": { icon: SiPostgresql, color: "#4169E1" },
  "TensorFlow": { icon: SiTensorflow, color: "#FF6F00" },
  "Docker": { icon: SiDocker, color: "#2496ED" }
};

const getTechIcon = (tech) => {
  const found = techIcons[tech];
  if (found) {
    const IconComponent = found.icon;
    return <IconComponent style={{ color: found.color }} size={14} />;
  }
  return <FiCode size={14} className="text-gray-400" />;
};

export default function Projects({ darkMode }) {
  const isDark = darkMode;
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate which project is active based on scroll
  const projectCount = projects.length;
  const activeProjectIndex = useTransform(smoothProgress, [0, 0.33, 0.66, 0.99], [0, 1, 2, 2]);
  
  useEffect(() => {
    const unsubscribe = activeProjectIndex.onChange(value => {
      setActiveIndex(Math.floor(value));
    });
    return () => unsubscribe();
  }, [activeProjectIndex]);

  // Memoize tech pyramid arrangement
  const arrangeTechPyramid = useMemo(() => (techs) => {
    if (!techs || techs.length === 0) return [];
    const rows = [];
    const counts = [Math.ceil(techs.length / 3), Math.floor(techs.length / 3), Math.floor(techs.length / 3)];
    let remaining = [...techs];
    
    counts.forEach(count => {
      if (remaining.length > 0) {
        rows.push(remaining.splice(0, Math.min(count, remaining.length)));
      }
    });
    return rows;
  }, []);

  const currentProject = projects[activeIndex];
  const nextProject = projects[(activeIndex + 1) % projectCount];
  const prevProject = projects[(activeIndex - 1 + projectCount) % projectCount];

  return (
    <div 
      ref={containerRef} 
      className={`relative h-[400vh] ${isDark ? "bg-black" : "bg-gradient-to-br from-slate-50 via-white to-slate-100"}`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />
        
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${isDark ? '#fff' : '#000'} 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
        
        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.line
            x1="0%" y1="30%" x2="100%" y2="30%"
            stroke="url(#line-gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
      </div>

      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* Progress Indicator */}
          <div className="absolute top-12 right-12 z-50 flex gap-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  const targetScroll = (idx / (projectCount - 1)) * containerRef.current.scrollHeight;
                  containerRef.current.scrollTo({ top: targetScroll, behavior: "smooth" });
                }}
                className={`transition-all duration-300 ${
                  activeIndex === idx 
                    ? "w-8 h-2 bg-blue-500" 
                    : "w-2 h-2 bg-white/30 hover:bg-white/50"
                } rounded-full`}
              />
            ))}
          </div>

          {/* Project Cards Container */}
          <div className="relative w-full max-w-7xl px-6 lg:px-8">
            
            {/* Main Project Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  
                  {/* Left Side - Content */}
                  <div className="space-y-8">
                    {/* Category Badge */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center gap-3"
                    >
                      <div className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm">
                        <span className="text-sm font-bold text-blue-400 uppercase tracking-wider">
                          {currentProject.category || "Featured Project"}
                        </span>
                      </div>
                      {currentProject.featured && (
                        <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30">
                          <FiStar className="text-yellow-400" size={12} />
                          <span className="text-xs font-bold text-yellow-400">Featured</span>
                        </div>
                      )}
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className={`text-6xl md:text-7xl lg:text-8xl font-black leading-tight ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {currentProject.name}
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className={`text-lg leading-relaxed ${
                        isDark ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {currentProject.description}
                    </motion.p>

                    {/* Tech Stack */}
                    {currentProject.tech && currentProject.tech.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-3"
                      >
                        <p className={`text-sm font-semibold uppercase tracking-wider ${
                          isDark ? "text-slate-400" : "text-slate-500"
                        }`}>
                          Technologies Used
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {currentProject.tech.map((tech, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 + idx * 0.05 }}
                              className="group relative px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 cursor-default backdrop-blur-sm"
                            >
                              <span className="relative z-10 flex items-center gap-2">
                                {getTechIcon(tech)}
                                {tech}
                              </span>
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Action Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex flex-wrap gap-4 pt-4"
                    >
                      <a
                        href={currentProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-8 py-3 rounded-full border border-white/20 text-white hover:text-blue-400 transition-all duration-300 overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-blue-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <div className="relative flex items-center gap-3">
                          <FiGithub size={20} />
                          <span className="font-semibold">Source Code</span>
                        </div>
                      </a>
                      <a
                        href={currentProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                      >
                        <div className="relative flex items-center gap-3">
                          <FiExternalLink size={20} />
                          <span className="font-semibold">Live Demo</span>
                          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </a>
                    </motion.div>

                    {/* Project Stats */}
                    {currentProject.stats && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="flex gap-6 pt-6 border-t border-white/10"
                      >
                        {currentProject.stats.map((stat, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            {stat.icon === "star" && <FiStar className="text-yellow-400" />}
                            {stat.icon === "eye" && <FiEye className="text-blue-400" />}
                            {stat.icon === "heart" && <FiHeart className="text-red-400" />}
                            {stat.icon === "clock" && <FiClock className="text-green-400" />}
                            <span className={`text-sm font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                              {stat.value}
                            </span>
                            <span className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>

                  {/* Right Side - Image */}
                  <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="relative"
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                      {/* Image Container */}
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={currentProject.image}
                          alt={currentProject.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Glow Effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                      
                      {/* Image Badge */}
                      <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-xs font-bold text-white">
                        {new Date().getFullYear()}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 pointer-events-none">
              <div className="flex justify-between">
                <button
                  onClick={() => {
                    const prevIndex = (activeIndex - 1 + projectCount) % projectCount;
                    const targetScroll = (prevIndex / (projectCount - 1)) * containerRef.current.scrollHeight;
                    containerRef.current.scrollTo({ top: targetScroll, behavior: "smooth" });
                  }}
                  className="pointer-events-auto w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 -ml-6"
                >
                  <FiArrowRight className="rotate-180" size={24} />
                </button>
                <button
                  onClick={() => {
                    const nextIndex = (activeIndex + 1) % projectCount;
                    const targetScroll = (nextIndex / (projectCount - 1)) * containerRef.current.scrollHeight;
                    containerRef.current.scrollTo({ top: targetScroll, behavior: "smooth" });
                  }}
                  className="pointer-events-auto w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 -mr-6"
                >
                  <FiArrowRight size={24} />
                </button>
              </div>
            </div>

            {/* Project Thumbnails */}
            <div className="absolute -bottom-20 left-0 right-0 flex justify-center gap-4">
              {projects.map((project, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    const targetScroll = (idx / (projectCount - 1)) * containerRef.current.scrollHeight;
                    containerRef.current.scrollTo({ top: targetScroll, behavior: "smooth" });
                  }}
                  onMouseEnter={() => setHoveredProject(idx)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="relative group"
                >
                  <div className={`w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                    activeIndex === idx 
                      ? "ring-2 ring-blue-500 scale-110" 
                      : "ring-1 ring-white/20 opacity-60 hover:opacity-100"
                  }`}>
                    <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                  </div>
                  <AnimatePresence>
                    {hoveredProject === idx && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-black/80 text-white text-xs whitespace-nowrap"
                      >
                        {project.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            style={{ opacity: useTransform(smoothProgress, [0, 0.05], [1, 0]) }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          >
            <div className={`text-xs font-bold uppercase tracking-[0.3em] ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}>
              Scroll to Explore
            </div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className={`w-[2px] h-12 bg-gradient-to-b ${
                isDark ? "from-blue-500 to-transparent" : "from-blue-500 to-transparent"
              }`}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}