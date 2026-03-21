import { motion } from "framer-motion";

export default function Events({ darkMode }) {
  const isDark = !!darkMode;

  return (
    <section 
      id="events" 
      className={`relative py-24 md:py-32 overflow-hidden ${isDark ? "bg-transparent" : "bg-slate-50"}`}
    >
      {/* Dot Grid removed for standardization */}

      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="mb-20">
          <p className="text-[#00FF9F] font-mono text-xs tracking-[0.3em] uppercase mb-4">Milestones</p>
          <h2 className={`text-5xl md:text-7xl font-black tracking-tighter ${isDark ? "text-white" : "text-slate-900"}`}>
            Events <span className="text-[#00FF9F] italic">Organized</span>
          </h2>
        </div>

        <div className={`p-12 rounded-[3rem] border backdrop-blur-3xl text-center ${isDark ? "bg-white/5 border-white/10 text-slate-400" : "bg-white border-slate-200 text-slate-600 shadow-xl"}`}>
          <p className="text-xl font-light italic">
            "Coming soon... Stay tuned for a list of impactful technical events and hackathons organized."
          </p>
        </div>
      </div>
    </section>
  );
}
