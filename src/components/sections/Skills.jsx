import { motion, useMotionValue, useSpring } from "framer-motion";
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
    label: "LLMs and Generative AI",
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

// Pill Component with dynamic tilt based on mouse position
function TiltPill({ name, icon, color, staticTilt }) {
  const ref = useRef(null);
  
  // Motion values for dynamic tilt
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  
  // Spring physics for smooth follow
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 25 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 25 });
  
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    // Calculate mouse position relative to pill center (-1 to 1 range)
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const relativeX = (e.clientX - centerX) / (rect.width / 2);
    const relativeY = (e.clientY - centerY) / (rect.height / 2);
    
    // Max tilt 15 degrees
    const maxTilt = 15;
    const newRotateY = relativeX * maxTilt;
    const newRotateX = -relativeY * maxTilt;
    
    rotateX.set(newRotateX);
    rotateY.set(newRotateY);
  };
  
  const handleMouseLeave = () => {
    // Return to static random tilt
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
        boxShadow: "none",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="pill"
    >
      <div style={{ transform: "translateZ(20px)" }} className="pill-inner">
        <span className="pill-icon" style={{ color: color }}>
          {icon}
        </span>
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

// Category Card Component
function CategoryCard({ category, index, darkMode }) {
  const [randomGlowPosition, setRandomGlowPosition] = useState({ x: 20, y: 40 });
  const isDark = !!darkMode;
  
  // Generate random static tilt for each pill
  const getRandomStaticTilt = () => ({
    x: (Math.random() - 0.5) * 6, // -3 to 3 degrees
    y: (Math.random() - 0.5) * 6,
  });
  
  // Store static tilts for each pill
  const [staticTilts, setStaticTilts] = useState({});
  
  useEffect(() => {
    // Generate random tilts for all pills
    const tilts = {};
    Object.keys(category.techMap).forEach(techName => {
      tilts[techName] = getRandomStaticTilt();
    });
    setStaticTilts(tilts);
    
    // Random glow position for decorative circle
    setRandomGlowPosition({
      x: 20 + Math.random() * 60,
      y: 20 + Math.random() * 60,
    });
  }, [category.techMap]);
  
  // Render pills in pyramid layout
  const renderPyramidRows = () => {
    return category.rows.map((row, rowIndex) => {
      const rowPills = row.techs.map((techName, pillIndex) => {
        const tech = category.techMap[techName];
        if (!tech) return null;
        
        const pillColor =
          !isDark &&
          typeof tech.color === "string" &&
          tech.color.toLowerCase() === "#ffffff"
            ? "#0f172a"
            : tech.color;

        return (
          <TiltPill
            key={`${techName}-${pillIndex}`}
            name={techName}
            icon={tech.icon}
            color={pillColor}
            staticTilt={staticTilts[techName] || { x: 0, y: 0 }}
          />
        );
      });
      
      return (
        <div 
          key={row.row}
          className="pill-row"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "0.875rem",
          }}
        >
          {rowPills}
        </div>
      );
    });
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="category-card"
    >
      {/* Decorative green glowing circle */}
      <div 
        className="glow-circle"
        style={{
          position: "absolute",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,197,94,0.2) 0%, rgba(34,197,94,0) 70%)",
          filter: "blur(40px)",
          top: `${randomGlowPosition.y}%`,
          left: `${randomGlowPosition.x}%`,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      
      {/* Category Title */}
      <h3 className="category-title">{category.label}</h3>
      
      {/* Pyramid Layout Pills */}
      <div className="pyramid-container">
        {renderPyramidRows()}
      </div>
      
      {/* Small dot indicator at bottom center */}
      <div className="dot-indicator">
        <div className="dot"></div>
      </div>
    </motion.div>
  );
}

CategoryCard.propTypes = {
  category: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  darkMode: PropTypes.bool,
};

// Main Skills Component
export default function Skills({ darkMode }) {
  const isDark = !!darkMode;
  return (
    <section id="skills" className="skills-section">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-header"
      >
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          Exploring the modern tech stack with 3D interactive experiences
        </p>
      </motion.div>
      
      {/* Category Cards Grid */}
      <div className="cards-container">
        {categories.map((category, idx) => (
          <CategoryCard
            key={category.label}
            category={category}
            index={idx}
            darkMode={isDark}
          />
        ))}
      </div>
      
      <style jsx>{`
        .skills-section {
          padding: 4rem 1.5rem;
          background: ${isDark ? "transparent" : "linear-gradient(135deg, rgba(248,250,252,1) 0%, rgba(219,234,254,0.65) 45%, rgba(226,232,240,0.7) 100%)"};
          min-height: 100vh;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .section-title {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(
            135deg,
            ${isDark ? "#ffffff" : "#0f172a"} 0%,
            ${isDark ? "#94a3b8" : "#3b82f6"} 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }
        
        .section-subtitle {
          color: ${isDark ? "#94a3b8" : "#475569"};
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .cards-container {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .category-card {
          position: relative;
          background: ${isDark ? "transparent" : "rgba(255,255,255,0.7)"};
          border-radius: 28px;
          border: 1px solid
            ${isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(15, 23, 42, 0.1)"};
          padding: 2rem 1.5rem 1.75rem;
          transition: all 0.3s ease;
          overflow: hidden;
          box-shadow: none;
        }
        
        .category-card:hover {
          border-color: ${isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(15, 23, 42, 0.2)"};
          box-shadow: none;
          transform: translateY(-2px);
        }
        
        .category-title {
          font-size: 1.8rem;
          font-weight: 700;
          text-align: center;
          color: ${isDark ? "#ffffff" : "#0f172a"};
          margin-bottom: 1.75rem;
          letter-spacing: -0.01em;
          position: relative;
          z-index: 2;
        }
        
        .pyramid-container {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .pill-row {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 0.875rem;
        }
        
        .pill {
          display: inline-block;
          cursor: pointer;
          background: ${isDark ? "transparent" : "rgba(15,23,42,0.03)"};
          backdrop-filter: none;
          border: 1px solid
            ${isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(15, 23, 42, 0.15)"};
          border-radius: 60px;
          padding: 0.625rem 1.25rem;
          transition: border-color 0.2s ease;
          will-change: transform;
        }
        
        .pill:hover {
          border-color: ${isDark ? "rgba(255, 255, 255, 0.3)" : "rgba(15, 23, 42, 0.3)"};
        }
        
        .pill-inner {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          transform-style: preserve-3d;
        }
        
        .pill-icon {
          font-size: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .pill-text {
          color: ${isDark ? "#e2e8f0" : "#334155"};
          font-size: 0.875rem;
          font-weight: 500;
          white-space: nowrap;
          letter-spacing: 0.01em;
        }
        
        /* Dot indicator */
        .dot-indicator {
          display: flex;
          justify-content: center;
          margin-top: 1.5rem;
          position: relative;
          z-index: 2;
        }
        
        .dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          opacity: 0.5;
          transition: all 0.3s ease;
          box-shadow: none;
        }
        
        .category-card:hover .dot {
          opacity: 1;
          width: 10px;
          height: 10px;
          box-shadow: none;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .skills-section {
            padding: 2rem 1rem;
          }
          
          .section-title {
            font-size: 2.25rem;
          }
          
          .category-title {
            font-size: 1.5rem;
          }
          
          .pill-row {
            gap: 0.75rem;
          }
          
          .pill {
            padding: 0.5rem 1rem;
          }
          
          .pill-text {
            font-size: 0.75rem;
            white-space: nowrap;
          }
          
          .pill-icon {
            font-size: 1rem;
          }
          
          .category-card {
            padding: 1.5rem 1rem 1.25rem;
          }
        }
        
        @media (max-width: 640px) {
          .pill-row {
            gap: 0.625rem;
          }
          
          .pill-text {
            font-size: 0.7rem;
          }
          
          .pill {
            padding: 0.5rem 0.875rem;
          }
        }
        
        /* Animation for pills */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .pill {
          animation: fadeInUp 0.4s ease-out forwards;
          animation-delay: calc(var(--index, 0) * 0.03s);
          opacity: 0;
        }
      `}</style>
      
      {/* Add inline style for animation delay */}
      <style>{`
        .pill {
          opacity: 0;
          animation: fadeInUp 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
}