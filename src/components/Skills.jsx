import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    icon: "💻",
    color: "#4F8EF7",
    skills: ["Python", "JavaScript", "Java", "C++"],
  },
  {
    title: "Frontend",
    icon: "🎨",
    color: "#a78bfa",
    skills: ["React", "Tailwind CSS", "HTML/CSS", "Vite"],
  },
  {
    title: "Backend",
    icon: "⚙️",
    color: "#34d399",
    skills: ["Node.js", "Express", "FastAPI", "PostgreSQL"],
  },
  {
    title: "Tools & Others",
    icon: "🛠️",
    color: "#fbbf24",
    skills: ["Git", "Docker", "Jupyter", "VS Code"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Skills({ darkMode }) {
  return (
    <section id="skills" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-[#4F8EF7] uppercase tracking-widest mb-3">
            TECHNICAL ROOTS
          </h2>
          <h3
            className={`text-4xl md:text-6xl font-black mb-4 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            My <span className="gradient-text">Skills</span>
          </h3>
          <div className="w-20 h-1 bg-[#4F8EF7] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              className="glass-card p-8 flex flex-col items-center text-center group"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg"
                style={{ background: `${cat.color}20`, border: `1px solid ${cat.color}40` }}
              >
                {cat.icon}
              </div>
              
              <h4
                className="text-xl font-bold mb-4 tracking-tight"
                style={{ color: cat.color }}
              >
                {cat.title}
              </h4>

              <div className="flex flex-wrap justify-center gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all duration-300 ${
                      darkMode
                        ? "bg-white/5 border-white/10 text-slate-300 hover:border-[#4F8EF7] hover:text-white"
                        : "bg-black/5 border-black/5 text-slate-600 hover:border-[#4F8EF7] hover:text-[#4F8EF7]"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}