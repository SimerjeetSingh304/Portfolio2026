import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript,
  SiHtml5, SiCss, SiBootstrap,
  SiNodedotjs, SiExpress, SiPython, SiFlask, SiFastapi,
  SiMongodb, SiPostgresql, SiMysql, SiFirebase,
  SiTensorflow, SiKeras, SiPytorch, SiScikitlearn, SiOpencv, SiJupyter,
  SiDocker, SiVercel, SiGit, SiGithub,
  SiPostman, SiLinux, SiFigma,
  SiGooglecolab,
} from "react-icons/si";
import { BiBrain } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// Category data with pyramid layout structure
const categories = [
  {
    label: "Frontend",
    rows: [
      { row: 1, count: 4, techs: ["React Js", "Next Js", "HTML", "CSS"] },
      { row: 2, count: 3, techs: ["JavaScript", "TypeScript", "Tailwind CSS"] },
      { row: 3, count: 1, techs: ["Bootstrap"] }
    ],
    techMap: {
      "React Js": { icon: <SiReact />, color: "#61DAFB" },
      "Next Js": { icon: <SiNextdotjs />, color: "#ffffff" },
      "HTML": { icon: <SiHtml5 />, color: "#E34F26" },
      "CSS": { icon: <SiCss />, color: "#1572B6" },
      "JavaScript": { icon: <SiJavascript />, color: "#F7DF1E" },
      "TypeScript": { icon: <SiTypescript />, color: "#3178C6" },
      "Tailwind CSS": { icon: <SiTailwindcss />, color: "#38BDF8" },
      "Bootstrap": { icon: <SiBootstrap />, color: "#7952B3" },
    }
  },
  {
    label: "Backend",
    rows: [
      { row: 1, count: 4, techs: ["Node Js", "Express Js", "Python", "FastAPI"] },
      { row: 2, count: 3, techs: ["Flask", "MySQL", "Postgresql"] },
      { row: 3, count: 1, techs: ["MongoDB"] }
    ],
    techMap: {
      "Node Js": { icon: <SiNodedotjs />, color: "#68A063" },
      "Express Js": { icon: <SiExpress />, color: "#ffffff" },
      "Python": { icon: <SiPython />, color: "#FFD43B" },
      "FastAPI": { icon: <SiFastapi />, color: "#009688" },
      "Flask": { icon: <SiFlask />, color: "#ffffff" },
      "MySQL": { icon: <SiMysql />, color: "#4479A1" },
      "Postgresql": { icon: <SiPostgresql />, color: "#336791" },
      "MongoDB": { icon: <SiMongodb />, color: "#4DB33D" },
    }
  },
  {
    label: "Machine Learning",
    rows: [
      { row: 1, count: 4, techs: ["Python", "TensorFlow", "Keras", "Pytorch"] },
      { row: 2, count: 3, techs: ["Sk Learn Kit", "Jupyter", "Google Colab"] },
      { row: 3, count: 1, techs: ["OpenCV"] }
    ],
    techMap: {
      "Python": { icon: <SiPython />, color: "#FFD43B" },
      "TensorFlow": { icon: <SiTensorflow />, color: "#FF6F00" },
      "Keras": { icon: <SiKeras />, color: "#D00000" },
      "Pytorch": { icon: <SiPytorch />, color: "#EE4C2C" },
      "Sk Learn Kit": { icon: <SiScikitlearn />, color: "#F7931E" },
      "Jupyter": { icon: <SiJupyter />, color: "#F37626" },
      "Google Colab": { icon: <SiGooglecolab />, color: "#F9AB00" },
      "OpenCV": { icon: <SiOpencv />, color: "#5C3EE8" },
    }
  },
  {
    label: "LLMs & GenAI",
    rows: [
      { row: 1, count: 4, techs: ["LLaMa", "Hugging Face", "Gemini AI", "LangChain"] },
      { row: 2, count: 3, techs: ["OpenAI", "RAG Pipeline", "GPT-4"] },
      { row: 3, count: 1, techs: ["Claude"] }
    ],
    techMap: {
      "LLaMa": { icon: <BiBrain />, color: "#7C3AED" },
      "Hugging Face": { icon: <BiBrain />, color: "#FFD21E" },
      "Gemini AI": { icon: <BiBrain />, color: "#4F8EF7" },
      "LangChain": { icon: <BiBrain />, color: "#84CC16" },
      "OpenAI": { icon: <SiOpenai />, color: "#ffffff" },
      "RAG Pipeline": { icon: <BiBrain />, color: "#A78BFA" },
      "GPT-4": { icon: <SiOpenai />, color: "#10A37F" },
      "Claude": { icon: <BiBrain />, color: "#D97706" },
    }
  },
  {
    label: "MLOps & DevOps",
    rows: [
      { row: 1, count: 4, techs: ["Docker", "Kubernetes", "AWS", "Vercel"] },
      { row: 2, count: 3, techs: ["Git", "GitHub", "GitLab"] },
      { row: 3, count: 1, techs: ["Jenkins"] }
    ],
    techMap: {
      "Docker": { icon: <SiDocker />, color: "#2496ED" },
      "Kubernetes": { icon: "☸️", color: "#326CE5" },
      "AWS": { icon: "☁️", color: "#FF9900" },
      "Vercel": { icon: <SiVercel />, color: "#ffffff" },
      "Git": { icon: <SiGit />, color: "#F05032" },
      "GitHub": { icon: <SiGithub />, color: "#ffffff" },
      "GitLab": { icon: "🦊", color: "#FC6D26" },
      "Jenkins": { icon: "👨‍💻", color: "#D24939" },
    }
  },
  {
    label: "Tools & Others",
    rows: [
      { row: 1, count: 4, techs: ["VS Code", "Postman", "Linux", "Figma"] },
      { row: 2, count: 3, techs: ["Problem Solving", "Java", "TypeScript"] },
      { row: 3, count: 1, techs: ["GraphQL"] }
    ],
    techMap: {
      "VS Code": { icon: <VscVscode />, color: "#007ACC" },
      "Postman": { icon: <SiPostman />, color: "#FF6C37" },
      "Linux": { icon: <SiLinux />, color: "#FCC624" },
      "Figma": { icon: <SiFigma />, color: "#F24E1E" },
      "Problem Solving": { icon: <FaJava />, color: "#F89820" },
      "Java": { icon: <FaJava />, color: "#F89820" },
      "TypeScript": { icon: <SiTypescript />, color: "#3178C6" },
      "GraphQL": { icon: "⚡", color: "#E10098" },
    }
  },
];

function TiltPill({ name, icon, color, staticTilt }) {
  const ref = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 25 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 25 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const newRotateY = ((e.clientX - centerX) / (rect.width / 2)) * 15;
    const newRotateX = -((e.clientY - centerY) / (rect.height / 2)) * 15;
    rotateX.set(newRotateX);
    rotateY.set(newRotateY);
  };

  const handleMouseLeave = () => {
    rotateX.set(staticTilt.x);
    rotateY.set(staticTilt.y);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
      }}
      className="pill"
    >
      <div style={{ transform: "translateZ(20px)" }} className="pill-inner">
        <span className="pill-icon" style={{ color: color }}>{icon}</span>
        <span className="pill-text">{name}</span>
      </div>
    </motion.div>
  );
}

TiltPill.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  staticTilt: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }).isRequired,
};

function CategoryCard({ category, index, darkMode }) {
  const [randomGlowPosition, setRandomGlowPosition] = useState({ x: 20, y: 40 });
  const [staticTilts, setStaticTilts] = useState({});
  const isDark = !!darkMode;

  useEffect(() => {
    const tilts = {};
    Object.keys(category.techMap).forEach(techName => {
      tilts[techName] = { x: (Math.random() - 0.5) * 6, y: (Math.random() - 0.5) * 6 };
    });
    setStaticTilts(tilts);
    setRandomGlowPosition({ x: 20 + Math.random() * 60, y: 20 + Math.random() * 60 });
  }, [category.techMap]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="category-card"
    >
      <h3 className="category-title">{category.label}</h3>
      <div className="pyramid-container">
        {category.rows.map((row) => (
          <div key={row.row} className="pill-row">
            {row.techs.map((techName) => {
              const tech = category.techMap[techName];
              if (!tech) return null;
              return (
                <TiltPill
                  key={techName}
                  name={techName}
                  icon={tech.icon}
                  color={!isDark && tech.color.toLowerCase() === "#ffffff" ? "#0f172a" : tech.color}
                  staticTilt={staticTilts[techName] || { x: 0, y: 0 }}
                />
              );
            })}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

CategoryCard.propTypes = {
  category: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  darkMode: PropTypes.bool,
};

export default function Skills({ darkMode }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const isDark = !!darkMode;
  const contentOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [40, 0, 0, -40]);
  const contentScale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.95, 1, 1, 0.95]);

  return (
    <section id="skills" ref={containerRef} className={`relative h-[500vh] ${isDark ? "bg-transparent" : "bg-slate-50"}`}>
      {isDark && (
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(#444 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        </div>
      )}

      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        <motion.div style={{ opacity: contentOpacity, scale: contentScale, y: contentY }} className="w-full max-w-[1400px] px-8">
          <div className="text-center mb-12">
            <h2 className={`text-6xl md:text-8xl font-black tracking-tighter mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>Skills & <span className="text-blue-500 italic">Tools</span></h2>
            <p className={`text-lg md:text-xl font-light ${isDark ? "text-slate-400" : "text-slate-600"}`}>Exploring the modern tech stack with 3D interactive experiences</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            {categories.map((category, idx) => (
              <CategoryCard key={category.label} category={category} index={idx} darkMode={isDark} />
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .category-card {
          position: relative;
          background: ${isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.7)"};
          backdrop-filter: blur(20px);
          border-radius: 40px;
          border: 1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.1)"};
          padding: 2.5rem;
          overflow: hidden;
          transition: border-color 0.3s ease;
        }
        .category-card:hover { border-color: ${isDark ? "rgba(59,130,246,0.3)" : "rgba(59,130,246,0.3)"}; }
        .category-title { font-size: 1.5rem; font-weight: 800; color: ${isDark ? "#fff" : "#0f172a"}; margin-bottom: 2rem; letter-spacing: -0.01em; }
        .pill-row { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 0.75rem; }
        .pill { background: ${isDark ? "rgba(255,255,255,0.04)" : "rgba(15,23,42,0.03)"}; border: 1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(15,23,42,0.1)"}; border-radius: 50px; padding: 0.5rem 1rem; }
        .pill-inner { display: flex; align-items: center; gap: 0.5rem; }
        .pill-icon { font-size: 1.1rem; }
        .pill-text { font-size: 0.8rem; font-weight: 600; color: ${isDark ? "#cbd5e1" : "#475569"}; }
      `}</style>
    </section>
  );
}