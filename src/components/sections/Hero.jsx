import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FiDownload, FiGithub } from "react-icons/fi";

import profilePhoto from "../../assets/Gemini_Generated_Image_ufqljnufqljnufql (1).jpg";

// TODO: Replace with your actual name
const YOUR_NAME = "Simerjeet Singh"; // Reference name

// TODO: Replace with your actual roles
const ROLES = [
  "Web Developer",
  1000,
  "Coder",
  1000,
  "Programmer",
  1000,
  "Problem Solver",
  1000,
];

// TODO: Replace with your GitHub profile URL
const GITHUB_URL = "https://github.com/yourusername";

// TODO: Replace with the path to your actual CV file (put it in /public folder)
const CV_URL = "/your-cv.pdf";

// TODO: Replace with your actual profile photo URL
const PROFILE_PHOTO = profilePhoto;

export default function Hero({ darkMode }) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-16 overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left: Content - Matching narottam.vercel.app alignment */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left z-10"
        >
          <div className="mb-6">
            <h2 className="text-[#4F8EF7] font-bold text-xl md:text-2xl mb-2">
              नमस्ते! I am
            </h2>
            <h1
              className={`text-5xl md:text-8xl font-black mb-6 tracking-tight ${darkMode ? "text-white" : "text-slate-900"
                }`}
            >
              {YOUR_NAME}
            </h1>

            <div className="text-2xl md:text-4xl font-bold h-12">
              <span className={darkMode ? "text-slate-400" : "text-slate-600"}>
                I&apos;m a{" "}
              </span>
              <TypeAnimation
                sequence={ROLES}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="gradient-text"
              />
            </div>
          </div>

          <p className={`text-lg mb-10 max-w-lg leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            I am a full-stack developer with a passion for building high-quality web applications
            and solving complex problems through efficient code.
          </p>

          <div className="flex flex-wrap gap-5 justify-center md:justify-start">
            {/* CTA Button 1 - Solid Blue (Primary) */}
            <a
              href={CV_URL}
              download
              className="px-8 py-4 rounded-full text-white font-bold text-base transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-[#4F8EF7]/40 flex items-center gap-2"
              style={{ background: "#4F8EF7" }}
            >
              <FiDownload size={18} />
              Download CV
            </a>

            {/* CTA Button 2 - Semi-transparent (Secondary) */}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className={`px-8 py-4 rounded-full font-bold text-base border-2 transition-all duration-300 hover:scale-105 flex items-center gap-2 ${darkMode
                  ? "border-[#4F8EF7] text-white hover:bg-[#4F8EF7]/10"
                  : "border-slate-300 text-slate-800 hover:border-[#4F8EF7] hover:text-[#4F8EF7]"
                }`}
            >
              <FiGithub size={18} />
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Right: Profile Image - Matching narottam.vercel.app profile look */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="flex-shrink-0 relative"
        >
          {/* Decorative rings behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-glow opacity-30 animate-pulse" />

          <div
            className="relative w-64 h-64 md:w-96 md:h-96 rounded-full p-2"
            style={{
              background: "linear-gradient(135deg, #4F8EF7, #fde047)",
              boxShadow: "0 0 60px rgba(79, 142, 247, 0.4)",
            }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 border-4 border-black/10">
              {PROFILE_PHOTO ? (
                <img
                  src={PROFILE_PHOTO}
                  alt={YOUR_NAME}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 border-inner shadow-inner">
                  <svg
                    className={`w-36 h-36 ${darkMode ? "text-slate-700" : "text-white/20"}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2 px-6 text-center">
                    Your Profile Image
                  </p>
                </div>
              )}
            </div>

            {/* Floating badge effect like reference site */}
            <div className={`absolute -bottom-4 right-8 px-4 py-2 rounded-2xl border shadow-2xl font-bold text-xs ${darkMode ? "bg-black border-white/10 text-[#4F8EF7]" : "bg-white border-black/5 text-[#4F8EF7]"
              }`}>
              Code 👨‍💻
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
