import { motion } from "framer-motion";
import { FiBook, FiCalendar, FiMapPin } from "react-icons/fi";

// TODO: Fill in your own education details here
const educationData = [
  {
    institution: "Your University Name",
    degree: "B.Tech in Your Major",
    duration: "2023 - 2027",
    location: "Your City, Country",
    details: [
      "CGPA: X.X / 10.0",
      "Relevant coursework: Data Structures, Algorithms, etc.",
    ],
  },
];

export default function Education({ darkMode }) {
  return (
    <section id="education" className="py-24 px-6 md:px-12 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-[#4F8EF7] uppercase tracking-widest mb-3">
            ACADEMIC JOURNEY
          </h2>
          <h3 className={`text-4xl md:text-6xl font-black mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
            My <span className="gradient-text">Education</span>
          </h3>
          <div className="w-20 h-1 bg-[#4F8EF7] mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 md:p-10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8EF7]/5 rounded-bl-full -mr-10 -mt-10 transition-all duration-500 group-hover:scale-110" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h4 className={`text-2xl font-bold mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                    {edu.institution}
                  </h4>
                  <p className="text-[#4F8EF7] font-bold flex items-center gap-2">
                    <FiBook className="text-sm" /> {edu.degree}
                  </p>
                </div>
                <div className="flex flex-col md:items-end gap-1 text-sm font-medium text-slate-400">
                  <span className="flex items-center gap-2"><FiCalendar /> {edu.duration}</span>
                  <span className="flex items-center gap-2"><FiMapPin /> {edu.location}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {edu.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400 group-hover:text-slate-300 transition-colors">
                    <span className="text-[#4F8EF7] mt-1.5 text-[8px]">●</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}