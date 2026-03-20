import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";

// TODO: Replace with your actual details
const CONTACT_INFO = [
  { icon: FiMail, label: "Email", value: "yourname@email.com", href: "mailto:yourname@email.com" },
  { icon: FiGithub, label: "GitHub", value: "github.com/yourusername", href: "https://github.com/yourusername" },
  { icon: FiLinkedin, label: "LinkedIn", value: "linkedin/yourusername", href: "https://linkedin.com/in/yourusername" },
];

export default function Contact({ darkMode }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-[#4F8EF7] uppercase tracking-widest mb-3">
            GET IN TOUCH
          </h2>
          <h3
            className={`text-4xl md:text-6xl font-black mb-4 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Contact <span className="gradient-text">Me</span>
          </h3>
          <div className="w-20 h-1 bg-[#4F8EF7] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className={`text-2xl font-bold mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}>
              Let&apos;s Build Something Together
            </h4>
            <p className={`text-lg mb-10 leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              I am interested in freelance opportunities - especially ambitious or large projects. 
              However, if you have other request or question, don&apos;t hesitate to use the form.
            </p>

            <div className="space-y-4">
              {CONTACT_INFO.map((info, i) => (
                <a
                  key={i}
                  href={info.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-card flex items-center gap-4 p-5 transition-all duration-300 hover:translate-x-2"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#4F8EF7]/10 flex items-center justify-center text-[#4F8EF7]">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">
                      {info.label}
                    </p>
                    <p className={`text-base font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card p-8 md:p-10 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Your Name</label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`w-full px-5 py-4 rounded-xl border outline-none transition-all ${
                    darkMode
                      ? "bg-white/5 border-white/10 text-white focus:border-[#4F8EF7]"
                      : "bg-slate-50 border-slate-200 text-slate-900 focus:border-[#4F8EF7]"
                  }`}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Your Email</label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`w-full px-5 py-4 rounded-xl border outline-none transition-all ${
                    darkMode
                      ? "bg-white/5 border-white/10 text-white focus:border-[#4F8EF7]"
                      : "bg-slate-50 border-slate-200 text-slate-900 focus:border-[#4F8EF7]"
                  }`}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Message</label>
              <textarea
                required
                rows={5}
                placeholder="I want to talk about..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`w-full px-5 py-4 rounded-xl border outline-none transition-all resize-none ${
                    darkMode
                      ? "bg-white/5 border-white/10 text-white focus:border-[#4F8EF7]"
                      : "bg-slate-50 border-slate-200 text-slate-900 focus:border-[#4F8EF7]"
                  }`}
              />
            </div>

            <button
              type="submit"
              className="w-full py-5 rounded-full text-white font-black uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 shadow-2xl"
              style={{ background: sent ? "#22c55e" : "#4F8EF7", boxShadow: "0 20px 40px rgba(79, 142, 247, 0.3)" }}
            >
              {sent ? "Message Sent!" : "Send Message"}
              <FiSend size={18} />
            </button>
          </motion.form>
        </div>
        
        {/* Footer */}
        <footer className={`mt-24 pt-12 border-t text-center ${darkMode ? "border-white/5 text-slate-600" : "border-black/5 text-slate-400"}`}>
            <p className="text-sm font-bold uppercase tracking-widest">
                © 2026 Built with <span className="text-red-500">❤️</span> by Narottam
            </p>
        </footer>
      </div>
    </section>
  );
}
