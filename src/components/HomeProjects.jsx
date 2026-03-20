import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiGithub, FiExternalLink } from "react-icons/fi";
import projects from "../data/projects.js";

export default function HomeProjects({ darkMode }) {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative overflow-hidden bg-black/20">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-blue-400 font-black tracking-widest text-xs uppercase mb-4">Portfolios</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white mb-6">Featured Work</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">A selection of my recent technical projects and creative experiments.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="p-8">
                <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3 block">{project.category}</span>
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{project.name}</h4>
                <div className="flex gap-4">
                  <a href={project.github} className="text-white/40 hover:text-white transition-colors">
                    <FiGithub size={20} />
                  </a>
                  <a href={project.live} className="text-white/40 hover:text-white transition-colors">
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all hover:gap-4 shadow-xl shadow-blue-900/20"
          >
            See More Projects <FiArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
