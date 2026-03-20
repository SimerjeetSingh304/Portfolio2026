// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { FiArrowRight, FiGithub, FiExternalLink } from "react-icons/fi";
// import projects from "../../data/projects.js";

// export default function HomeProjects({ darkMode }) {
//   const featuredProjects = projects.slice(0, 3);

//   return (
//     <section id="projects" className="py-24 px-6 md:px-12 relative overflow-hidden bg-black/20">
//       <div className="max-w-7xl mx-auto relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-blue-400 font-black tracking-widest text-xs uppercase mb-4">Portfolios</h2>
//           <h3 className="text-4xl md:text-6xl font-black text-white mb-6">Featured Work</h3>
//           <p className="text-slate-400 max-w-2xl mx-auto text-lg">A selection of my recent technical projects and creative experiments.</p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {featuredProjects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-500"
//             >
//               <div className="aspect-video overflow-hidden">
//                 <img 
//                   src={project.image} 
//                   alt={project.name} 
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
//                 />
//               </div>
//               <div className="p-8">
//                 <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3 block">{project.category}</span>
//                 <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{project.name}</h4>
//                 <div className="flex gap-4">
//                   <a href={project.github} className="text-white/40 hover:text-white transition-colors">
//                     <FiGithub size={20} />
//                   </a>
//                   <a href={project.live} className="text-white/40 hover:text-white transition-colors">
//                     <FiExternalLink size={20} />
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="text-center">
//           <Link
//             to="/projects"
//             className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all hover:gap-4 shadow-xl shadow-blue-900/20"
//           >
//             See More Projects <FiArrowRight size={20} />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { 
  FiArrowRight, 
  FiGithub, 
  FiExternalLink, 
  FiCode, 
  FiStar,
  FiTrendingUp,
  FiHeart,
  FiShare2
} from "react-icons/fi";
import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFirebase } from "react-icons/si";
import projects from "../../data/projects.js";

// Tech icon mapping
const techIcons = {
  react: FaReact,
  nodejs: FaNodeJs,
  python: FaPython,
  mongodb: SiMongodb,
  firebase: SiFirebase,
  tailwind: SiTailwindcss,
  database: FaDatabase,
  javascript: FiCode,
  typescript: FiCode,
  html: FiCode,
  css: FiCode,
};

// Helper function to get icon
const getTechIcon = (tech) => {
  const techKey = tech?.toLowerCase() || "";
  const Icon = techIcons[techKey] || FiCode;
  return Icon;
};

export default function HomeProjects({ darkMode }) {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [likedProjects, setLikedProjects] = useState({});
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  
  const featuredProjects = projects.slice(0, 3);
  
  const handleLike = (projectId, e) => {
    e.preventDefault();
    e.stopPropagation();
    setLikedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const stats = [
    { value: projects.length, label: "Projects", icon: FiCode },
    { value: "100%", label: "Success Rate", icon: FiTrendingUp },
    { value: "24/7", label: "Support", icon: FiHeart }
  ];

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-32 px-6 md:px-12 relative overflow-hidden"
      style={{
        background: darkMode
          ? "transparent"
          : "linear-gradient(135deg, rgba(248,250,252,1) 0%, rgba(219,234,254,0.55) 45%, rgba(226,232,240,0.75) 100%)",
      }}
    >
      {/* Premium animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <motion.div 
          animate={{ 
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 50, 0],
            y: [0, 50, -100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px]"
        />
        
        {/* Grid pattern overlay */}
        <div
          className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(59,130,246,0.03)" stroke-width="1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23grid)"/%3E%3C/svg%3E')] opacity-50`}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium Header with 3D effect */}
        <motion.div
          style={{ opacity, scale }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <FiCode className="text-blue-400 text-sm" />
              </motion.div>
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent uppercase tracking-wider">
                Creative Portfolio
              </span>
            </div>
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Featured
            </span>
            <br />
            <span className="relative inline-block mt-2">
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Masterpieces
              </span>
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "100%", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
              />
            </span>
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl"
          >
            Pushing boundaries with innovative solutions and exceptional design
          </motion.p>
          
          {/* Animated stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex justify-center gap-8 mt-12"
          >
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <div key={idx} className="text-center">
                  <div
                    className={`flex items-center gap-2 text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"} mb-1`}
                  >
                    <IconComponent className="text-blue-400" />
                    <span>{stat.value}</span>
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {featuredProjects.map((project, index) => {
            const isLiked = likedProjects[project.id];
            const firstTech = project.techStack?.[0] || "";
            const TechIcon = getTechIcon(firstTech);
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
                whileHover={{ y: -15, scale: 1.02 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="relative group"
              >
                {/* Premium 3D shadow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                
                <div
                  className={`relative bg-gradient-to-br ${
                    darkMode
                      ? "from-white/10 via-white/5 to-transparent border-white/20"
                      : "from-slate-900/5 via-slate-900/2 to-transparent border-slate-900/10"
                  } backdrop-blur-xl border rounded-3xl overflow-hidden shadow-2xl`}
                >
                  {/* Image section */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <motion.img 
                      src={project.image} 
                      alt={project.name}
                      animate={{ scale: hoveredProject === project.id ? 1.1 : 1 }}
                      transition={{ duration: 0.7 }}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Animated gradient overlay */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                    />
                    
                    {/* Floating action buttons */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0, y: hoveredProject === project.id ? 0 : 20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-5 left-5 right-5 flex justify-between items-center"
                    >
                      <div className="flex gap-3">
                        <motion.a 
                          href={project.github} 
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: 12 }}
                          whileTap={{ scale: 0.95 }}
                          className={`p-2.5 backdrop-blur-md rounded-xl transition-all duration-300 ${
                            darkMode
                              ? "bg-white/20 hover:bg-blue-500"
                              : "bg-slate-900/5 hover:bg-blue-500/20"
                          }`}
                        >
                          <FiGithub size={18} className={darkMode ? "text-white" : "text-slate-700"} />
                        </motion.a>
                        <motion.a 
                          href={project.live} 
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: -12 }}
                          whileTap={{ scale: 0.95 }}
                          className={`p-2.5 backdrop-blur-md rounded-xl transition-all duration-300 ${
                            darkMode
                              ? "bg-white/20 hover:bg-blue-500"
                              : "bg-slate-900/5 hover:bg-blue-500/20"
                          }`}
                        >
                          <FiExternalLink size={18} className={darkMode ? "text-white" : "text-slate-700"} />
                        </motion.a>
                      </div>
                      
                      <div className="flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => handleLike(project.id, e)}
                          className={`p-2.5 backdrop-blur-md rounded-xl transition-all duration-300 ${
                            darkMode
                              ? "bg-white/20 hover:bg-pink-500"
                              : "bg-slate-900/5 hover:bg-pink-500/20"
                          }`}
                        >
                          <FiHeart 
                            size={18} 
                            className={`transition-colors ${
                              isLiked
                                ? "fill-pink-500 text-pink-500"
                                : darkMode
                                  ? "text-white"
                                  : "text-slate-600"
                            }`}
                          />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className={`p-2.5 backdrop-blur-md rounded-xl transition-all duration-300 ${
                            darkMode
                              ? "bg-white/20 hover:bg-blue-500"
                              : "bg-slate-900/5 hover:bg-blue-500/20"
                          }`}
                        >
                          <FiShare2 size={18} className={darkMode ? "text-white" : "text-slate-700"} />
                        </motion.button>
                      </div>
                    </motion.div>
                    
                    {/* Category badge */}
                    <motion.div 
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="absolute top-5 left-5"
                    >
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-full border border-white/20">
                        <TechIcon size={12} className="text-blue-400" />
                        <span className="text-xs font-medium text-white">{project.category}</span>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Content section */}
                  <div className="p-7">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4
                          className={`text-xl font-bold ${darkMode ? "text-white" : "text-slate-900"} mb-2 group-hover:text-blue-400 transition-colors`}
                        >
                          {project.name}
                        </h4>
                        <p
                          className={`text-sm leading-relaxed line-clamp-2 ${
                            darkMode ? "text-slate-400" : "text-slate-600"
                          }`}
                        >
                          {project.description || "An innovative project crafted with cutting-edge technology and creative design principles."}
                        </p>
                      </div>
                      <motion.div
                        animate={{ rotate: hoveredProject === project.id ? 360 : 0 }}
                        transition={{ duration: 0.5 }}
                        className="p-2 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                      >
                        <FiStar className="text-yellow-400" size={16} />
                      </motion.div>
                    </div>
                    
                    {/* Tech stack */}
                    {project.techStack && project.techStack.length > 0 && (
                      <div
                        className={`flex flex-wrap gap-2 mt-4 pt-4 border-t ${
                          darkMode ? "border-white/10" : "border-slate-900/10"
                        }`}
                      >
                        {project.techStack.slice(0, 4).map((tech, idx) => {
                          const Icon = getTechIcon(tech);
                          return (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.05 }}
                              whileHover={{ y: -2 }}
                              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg ${
                                darkMode
                                  ? "bg-white/5 border border-white/10 hover:border-blue-500/50"
                                  : "bg-slate-900/5 border border-slate-900/10 hover:border-blue-500/40"
                              } transition-all duration-300`}
                            >
                              <Icon size={12} className="text-blue-400" />
                              <span className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-600"}`}>{tech}</span>
                            </motion.div>
                          );
                        })}
                        {project.techStack.length > 4 && (
                          <div
                            className={`flex items-center px-2.5 py-1.5 rounded-lg ${
                              darkMode ? "bg-white/5" : "bg-slate-900/5"
                            }`}
                          >
                            <span
                              className={`text-xs ${darkMode ? "text-slate-500" : "text-slate-600"}`}
                            >
                              +{project.techStack.length - 4}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {/* View details link */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                      className="mt-5"
                    >
                      <Link 
                        to={`/projects/${project.id}`}
                        className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors group/link"
                      >
                        <span>View Case Study</span>
                        <FiArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Premium CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center relative"
        >
          {/* Animated particles */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * 400 - 200,
                  y: Math.random() * 100 - 50,
                  opacity: 0,
                  scale: 0
                }}
                whileInView={{
                  opacity: [0, 0.5, 0],
                  scale: [0, 1, 0],
                  y: [Math.random() * 100 - 50, Math.random() * 200 - 100],
                  x: [Math.random() * 400 - 200, Math.random() * 600 - 300]
                }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: i * 0.05, repeat: Infinity, repeatDelay: 3 }}
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
              />
            ))}
          </div>
          
          <Link
            to="/projects"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 rounded-full font-bold text-white shadow-2xl shadow-blue-900/50 hover:shadow-blue-900/70 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 text-lg">Explore Complete Collection</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="relative z-10"
            >
              <FiArrowRight size={22} />
            </motion.div>
            
            {/* Animated background shine */}
            <motion.div
              animate={{ x: ["100%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            />
          </Link>
          
          <p className="mt-6 text-sm text-slate-500">
            Showcasing {projects.length}+ innovative projects • Constantly evolving
          </p>
        </motion.div>
      </div>
    </section>
  );
}