// import { motion } from "framer-motion";
// import { useState } from "react";
// import PropTypes from "prop-types";
// import {
//   SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript,
//   SiHtml5, SiCss, SiBootstrap,
//   SiNodedotjs, SiExpress, SiPython, SiFlask, SiFastapi,
//   SiMongodb, SiPostgresql, SiMysql, SiFirebase,
//   SiTensorflow, SiKeras, SiPytorch, SiScikitlearn, SiOpencv, SiJupyter,
//   SiDocker, SiVercel, SiGit, SiGithub,
//   SiPostman, SiLinux, SiFigma,
//   SiGooglecolab, SiOpenai,
// } from "react-icons/si";
// import { BiBrain } from "react-icons/bi";
// import { FaJava } from "react-icons/fa";
// import { VscVscode } from "react-icons/vsc";

// const categories = [
//   {
//     label: "Frontend",
//     accent: "#61DAFB",
//     rows: [
//       { techs: ["React Js", "Next Js", "HTML", "CSS"] },
//       { techs: ["JavaScript", "TypeScript", "Tailwind CSS"] },
//       { techs: ["Bootstrap"] },
//     ],
//     techMap: {
//       "React Js":     { icon: <SiReact />,       color: "#61DAFB" },
//       "Next Js":      { icon: <SiNextdotjs />,    color: "#ffffff" },
//       "HTML":         { icon: <SiHtml5 />,        color: "#E34F26" },
//       "CSS":          { icon: <SiCss />,          color: "#1572B6" },
//       "JavaScript":   { icon: <SiJavascript />,   color: "#F7DF1E" },
//       "TypeScript":   { icon: <SiTypescript />,   color: "#3178C6" },
//       "Tailwind CSS": { icon: <SiTailwindcss />,  color: "#38BDF8" },
//       "Bootstrap":    { icon: <SiBootstrap />,    color: "#7952B3" },
//     },
//   },
//   {
//     label: "Backend",
//     accent: "#68A063",
//     rows: [
//       { techs: ["Node Js", "Express Js", "Python", "FastAPI"] },
//       { techs: ["Flask", "MySQL", "Postgresql"] },
//       { techs: ["MongoDB"] },
//     ],
//     techMap: {
//       "Node Js":    { icon: <SiNodedotjs />,   color: "#68A063" },
//       "Express Js": { icon: <SiExpress />,     color: "#ffffff" },
//       "Python":     { icon: <SiPython />,      color: "#FFD43B" },
//       "FastAPI":    { icon: <SiFastapi />,     color: "#009688" },
//       "Flask":      { icon: <SiFlask />,       color: "#ffffff" },
//       "MySQL":      { icon: <SiMysql />,       color: "#4479A1" },
//       "Postgresql": { icon: <SiPostgresql />,  color: "#336791" },
//       "MongoDB":    { icon: <SiMongodb />,     color: "#4DB33D" },
//     },
//   },
//   {
//     label: "Machine Learning",
//     accent: "#FF6F00",
//     rows: [
//       { techs: ["Python", "TensorFlow", "Keras", "Pytorch"] },
//       { techs: ["Sk Learn Kit", "Jupyter", "Google Colab"] },
//       { techs: ["OpenCV"] },
//     ],
//     techMap: {
//       "Python":       { icon: <SiPython />,       color: "#FFD43B" },
//       "TensorFlow":   { icon: <SiTensorflow />,   color: "#FF6F00" },
//       "Keras":        { icon: <SiKeras />,         color: "#D00000" },
//       "Pytorch":      { icon: <SiPytorch />,       color: "#EE4C2C" },
//       "Sk Learn Kit": { icon: <SiScikitlearn />,   color: "#F7931E" },
//       "Jupyter":      { icon: <SiJupyter />,       color: "#F37626" },
//       "Google Colab": { icon: <SiGooglecolab />,   color: "#F9AB00" },
//       "OpenCV":       { icon: <SiOpencv />,        color: "#5C3EE8" },
//     },
//   },
//   {
//     label: "LLMs & GenAI",
//     accent: "#7C3AED",
//     rows: [
//       { techs: ["LLaMa", "Hugging Face", "Gemini AI", "LangChain"] },
//       { techs: ["OpenAI", "RAG Pipeline", "GPT-4"] },
//       { techs: ["Claude"] },
//     ],
//     techMap: {
//       "LLaMa":        { icon: <BiBrain />,    color: "#7C3AED" },
//       "Hugging Face": { icon: <BiBrain />,    color: "#FFD21E" },
//       "Gemini AI":    { icon: <BiBrain />,    color: "#4F8EF7" },
//       "LangChain":    { icon: <BiBrain />,    color: "#84CC16" },
//       "OpenAI":       { icon: <SiOpenai />,   color: "#ffffff" },
//       "RAG Pipeline": { icon: <BiBrain />,    color: "#A78BFA" },
//       "GPT-4":        { icon: <SiOpenai />,   color: "#10A37F" },
//       "Claude":       { icon: <BiBrain />,    color: "#D97706" },
//     },
//   },
//   {
//     label: "MLOps & DevOps",
//     accent: "#2496ED",
//     rows: [
//       { techs: ["Docker", "Kubernetes", "AWS", "Vercel"] },
//       { techs: ["Git", "GitHub", "GitLab"] },
//       { techs: ["Jenkins"] },
//     ],
//     techMap: {
//       "Docker":     { icon: <SiDocker />,  color: "#2496ED" },
//       "Kubernetes": { icon: "☸️",          color: "#326CE5" },
//       "AWS":        { icon: "☁️",          color: "#FF9900" },
//       "Vercel":     { icon: <SiVercel />,  color: "#ffffff" },
//       "Git":        { icon: <SiGit />,     color: "#F05032" },
//       "GitHub":     { icon: <SiGithub />,  color: "#ffffff" },
//       "GitLab":     { icon: "🦊",          color: "#FC6D26" },
//       "Jenkins":    { icon: "👨‍💻",          color: "#D24939" },
//     },
//   },
//   {
//     label: "Tools & Others",
//     accent: "#F24E1E",
//     rows: [
//       { techs: ["VS Code", "Postman", "Linux", "Figma"] },
//       { techs: ["Problem Solving", "Java", "TypeScript"] },
//       { techs: ["GraphQL"] },
//     ],
//     techMap: {
//       "VS Code":         { icon: <VscVscode />,    color: "#007ACC" },
//       "Postman":         { icon: <SiPostman />,    color: "#FF6C37" },
//       "Linux":           { icon: <SiLinux />,      color: "#FCC624" },
//       "Figma":           { icon: <SiFigma />,      color: "#F24E1E" },
//       "Problem Solving": { icon: <FaJava />,       color: "#F89820" },
//       "Java":            { icon: <FaJava />,       color: "#F89820" },
//       "TypeScript":      { icon: <SiTypescript />, color: "#3178C6" },
//       "GraphQL":         { icon: "⚡",             color: "#E10098" },
//     },
//   },
// ];

// /* ── Pill ───────────────────────────────────────────────────────────────── */
// function Pill({ name, icon, color, darkMode }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <motion.div
//       onHoverStart={() => setHovered(true)}
//       onHoverEnd={() => setHovered(false)}
//       animate={hovered ? { y: -2 } : { y: 0 }}
//       transition={{ type: "spring", stiffness: 400, damping: 20 }}
//       style={{
//         background: darkMode
//           ? hovered ? `rgba(255,255,255,0.07)` : "rgba(255,255,255,0.03)"
//           : hovered ? "rgba(15,23,42,0.06)" : "rgba(15,23,42,0.025)",
//         border: `1px solid ${hovered ? color + "55" : darkMode ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.09)"}`,
//         boxShadow: hovered ? `0 0 14px ${color}28` : "none",
//         borderRadius: 50,
//         padding: "0.42rem 0.9rem",
//         display: "inline-flex",
//         alignItems: "center",
//         gap: "0.45rem",
//         cursor: "default",
//         transition: "background 0.2s, border-color 0.2s, box-shadow 0.2s",
//       }}
//     >
//       <span style={{ fontSize: "1rem", color: darkMode ? color : color === "#ffffff" ? "#0f172a" : color, lineHeight: 1 }}>
//         {icon}
//       </span>
//       <span style={{
//         fontSize: "0.75rem",
//         fontWeight: 600,
//         letterSpacing: "0.01em",
//         color: darkMode ? "#cbd5e1" : "#374151",
//         whiteSpace: "nowrap",
//       }}>
//         {name}
//       </span>
//     </motion.div>
//   );
// }

// Pill.propTypes = {
//   name: PropTypes.string.isRequired,
//   icon: PropTypes.node.isRequired,
//   color: PropTypes.string.isRequired,
//   darkMode: PropTypes.bool,
// };

// /* ── Category Card ──────────────────────────────────────────────────────── */
// function CategoryCard({ category, index, darkMode }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 28 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.15 }}
//       transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
//       style={{
//         position: "relative",
//         background: darkMode ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.75)",
//         backdropFilter: "blur(20px)",
//         borderRadius: 28,
//         border: `1px solid ${darkMode ? "rgba(255,255,255,0.07)" : "rgba(15,23,42,0.09)"}`,
//         padding: "1.75rem 1.75rem 1.5rem",
//         overflow: "hidden",
//         transition: "border-color 0.25s",
//       }}
//       whileHover={{
//         borderColor: category.accent + "44",
//         transition: { duration: 0.2 },
//       }}
//     >
//       {/* Subtle accent glow top-left */}
//       <div style={{
//         position: "absolute",
//         top: -30,
//         left: -20,
//         width: 120,
//         height: 120,
//         borderRadius: "50%",
//         background: category.accent,
//         opacity: 0.06,
//         filter: "blur(40px)",
//         pointerEvents: "none",
//       }} />

//       {/* Header */}
//       <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.25rem" }}>
//         <span style={{
//           display: "inline-block",
//           width: 8,
//           height: 8,
//           borderRadius: "50%",
//           background: category.accent,
//           flexShrink: 0,
//           boxShadow: `0 0 8px ${category.accent}88`,
//         }} />
//         <h3 style={{
//           fontSize: "1rem",
//           fontWeight: 700,
//           color: darkMode ? "#f1f5f9" : "#0f172a",
//           letterSpacing: "-0.01em",
//           margin: 0,
//         }}>
//           {category.label}
//         </h3>
//       </div>

//       {/* Pill rows */}
//       <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
//         {category.rows.map((row, ri) => (
//           <div key={ri} style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
//             {row.techs.map((techName) => {
//               const tech = category.techMap[techName];
//               if (!tech) return null;
//               return (
//                 <Pill
//                   key={techName}
//                   name={techName}
//                   icon={tech.icon}
//                   color={tech.color}
//                   darkMode={darkMode}
//                 />
//               );
//             })}
//           </div>
//         ))}
//       </div>
//     </motion.div>
//   );
// }

// CategoryCard.propTypes = {
//   category: PropTypes.object.isRequired,
//   index: PropTypes.number.isRequired,
//   darkMode: PropTypes.bool,
// };

// /* ── Skills Section ─────────────────────────────────────────────────────── */
// export default function Skills({ darkMode }) {
//   const isDark = !!darkMode;

//   return (
//     <section
//       id="skills"
//       style={{
//         position: "relative",
//         padding: "5rem 2rem 3rem",
//         background: isDark ? "transparent" : "#f8fafc",
//       }}
//     >
//       <div style={{ maxWidth: 1320, margin: "0 auto" }}>
//         {/* Heading */}
//         <div style={{ textAlign: "center", marginBottom: "3rem" }}>
//           <motion.h2
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             style={{
//               fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
//               fontWeight: 900,
//               letterSpacing: "-0.03em",
//               lineHeight: 1,
//               marginBottom: "0.75rem",
//               color: isDark ? "#ffffff" : "#0f172a",
//             }}
//           >
//             Skills &{" "}
//             <span style={{
//               fontStyle: "italic",
//               background: "linear-gradient(135deg, #3b82f6, #6366f1)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}>
//               Tools
//             </span>
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.15 }}
//             style={{
//               fontSize: "1.05rem",
//               fontWeight: 400,
//               color: isDark ? "#64748b" : "#64748b",
//               letterSpacing: "0.01em",
//             }}
//           >
//             A snapshot of the stack I work with
//           </motion.p>
//         </div>

//         {/* Cards grid */}
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
//           gap: "1.25rem",
//         }}>
//           {categories.map((category, idx) => (
//             <CategoryCard
//               key={category.label}
//               category={category}
//               index={idx}
//               darkMode={isDark}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// Skills.propTypes = {
//   darkMode: PropTypes.bool,
// };

import { motion } from "framer-motion";
import PropTypes from "prop-types";
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript,
  SiHtml5, SiCss, SiBootstrap,
  SiNodedotjs, SiExpress, SiPython, SiFlask, SiFastapi,
  SiMongodb, SiPostgresql, SiMysql, SiFirebase,
  SiTensorflow, SiKeras, SiPytorch, SiScikitlearn, SiOpencv, SiJupyter,
  SiDocker, SiVercel, SiGit, SiGithub,
  SiPostman, SiLinux, SiFigma,
  SiGooglecolab, SiOpenai,
} from "react-icons/si";
import { BiBrain } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

/* ── Data ──────────────────────────────────────────────────────────────── */
const categories = [
  {
    label: "Frontend",
    accent: "#61DAFB",
    techs: [
      { name: "React", icon: <SiReact />, color: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#aaaaaa" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#38BDF8" },
      { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
      { name: "CSS3", icon: <SiCss />, color: "#1572B6" },
      { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
    ],
  },
  {
    label: "Backend",
    accent: "#68A063",
    techs: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "#68A063" },
      { name: "Express", icon: <SiExpress />, color: "#aaaaaa" },
      { name: "Python", icon: <SiPython />, color: "#FFD43B" },
      { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
      { name: "Flask", icon: <SiFlask />, color: "#aaaaaa" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
      { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
    ],
  },
  {
    label: "Machine Learning",
    accent: "#FF6F00",
    techs: [
      { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
      { name: "PyTorch", icon: <SiPytorch />, color: "#EE4C2C" },
      { name: "Keras", icon: <SiKeras />, color: "#D00000" },
      { name: "Scikit-learn", icon: <SiScikitlearn />, color: "#F7931E" },
      { name: "OpenCV", icon: <SiOpencv />, color: "#5C3EE8" },
      { name: "Jupyter", icon: <SiJupyter />, color: "#F37626" },
      { name: "Colab", icon: <SiGooglecolab />, color: "#F9AB00" },
      { name: "Python", icon: <SiPython />, color: "#FFD43B" },
    ],
  },
  {
    label: "LLMs & GenAI",
    accent: "#7C3AED",
    techs: [
      { name: "OpenAI", icon: <SiOpenai />, color: "#10A37F" },
      { name: "LangChain", icon: <BiBrain />, color: "#84CC16" },
      { name: "LLaMA", icon: <BiBrain />, color: "#7C3AED" },
      { name: "Gemini AI", icon: <BiBrain />, color: "#4F8EF7" },
      { name: "Hugging Face", icon: <BiBrain />, color: "#FFD21E" },
      { name: "RAG Pipeline", icon: <BiBrain />, color: "#A78BFA" },
      { name: "GPT-4", icon: <SiOpenai />, color: "#10A37F" },
      { name: "Claude", icon: <BiBrain />, color: "#D97706" },
    ],
  },
  {
    label: "MLOps & DevOps",
    accent: "#2496ED",
    techs: [
      { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
      { name: "Git", icon: <SiGit />, color: "#F05032" },
      { name: "GitHub", icon: <SiGithub />, color: "#aaaaaa" },
      { name: "Vercel", icon: <SiVercel />, color: "#aaaaaa" },
      { name: "Kubernetes", icon: "☸️", color: "#326CE5" },
      { name: "AWS", icon: "☁️", color: "#FF9900" },
      { name: "GitLab", icon: "🦊", color: "#FC6D26" },
      { name: "Jenkins", icon: "🔧", color: "#D24939" },
    ],
  },
  {
    label: "Tools & Others",
    accent: "#F24E1E",
    techs: [
      { name: "VS Code", icon: <VscVscode />, color: "#007ACC" },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
      { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
      { name: "Linux", icon: <SiLinux />, color: "#FCC624" },
      { name: "Java", icon: <FaJava />, color: "#F89820" },
      { name: "GraphQL", icon: "⚡", color: "#E10098" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    ],
  },
];

/* ── Pill ───────────────────────────────────────────────────────────────── */
function Pill({ name, icon, color, isDark }) {
  const safeColor = color === "#ffffff" || color === "#aaaaaa"
    ? (isDark ? "#cbd5e1" : "#475569")
    : color;

  return (
    <motion.div
      whileHover={{ y: -2, transition: { duration: 0.15 } }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.45rem",
        padding: "0.38rem 0.85rem 0.38rem 0.5rem",
        borderRadius: 50,
        border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.09)"}`,
        background: isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.85)",
        cursor: "default",
        transition: "border-color 0.18s, box-shadow 0.18s, background 0.18s",
        backdropFilter: "blur(8px)",
        flexShrink: 0,
      }}
      onHoverStart={e => {
        if (e.currentTarget?.style) {
          e.currentTarget.style.borderColor = safeColor + "60";
          e.currentTarget.style.boxShadow = `0 0 14px ${safeColor}25`;
          e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.06)" : "#ffffff";
        }
      }}
      onHoverEnd={e => {
        if (e.currentTarget?.style) {
          e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.09)";
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.85)";
        }
      }}
    >
      <span style={{
        width: 22, height: 22,
        borderRadius: 6,
        background: safeColor + "1a",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "0.88rem",
        color: safeColor,
        flexShrink: 0,
        lineHeight: 1,
      }}>
        {icon}
      </span>
      <span style={{
        fontSize: "0.74rem",
        fontWeight: 600,
        letterSpacing: "0.01em",
        color: isDark ? "#cbd5e1" : "#374151",
        whiteSpace: "nowrap",
      }}>
        {name}
      </span>
    </motion.div>
  );
}

/* ── Category Card ─────────────────────────────────────────────────────── */
function CategoryCard({ category, index, isDark }) {
  const border = isDark ? "rgba(255,255,255,0.07)" : "rgba(15,23,42,0.08)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ borderColor: category.accent + "44", transition: { duration: 0.2 } }}
      style={{
        position: "relative",
        borderRadius: 24,
        border: `1px solid ${border}`,
        background: isDark ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.85)",
        backdropFilter: "blur(20px)",
        overflow: "hidden",
        boxShadow: isDark ? "none" : "0 2px 20px rgba(15,23,42,0.06)",
        transition: "border-color 0.25s, box-shadow 0.25s",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top accent bar */}
      <div style={{
        height: 2,
        background: `linear-gradient(90deg, ${category.accent}, ${category.accent}44)`,
        borderRadius: "24px 24px 0 0",
      }} />

      {/* Glow blob */}
      <div style={{
        position: "absolute",
        top: -24, left: -16,
        width: 140, height: 140,
        borderRadius: "50%",
        background: category.accent,
        opacity: 0.055,
        filter: "blur(48px)",
        pointerEvents: "none",
      }} />

      {/* Header */}
      <div style={{
        padding: "1.25rem 1.5rem 0.9rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.05)" : "rgba(15,23,42,0.06)"}`,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.55rem" }}>
          <span style={{
            width: 8, height: 8, borderRadius: "50%",
            background: category.accent,
            boxShadow: `0 0 10px ${category.accent}99`,
            display: "inline-block", flexShrink: 0,
          }} />
          <h3 style={{
            fontSize: "0.92rem",
            fontWeight: 800,
            color: isDark ? "#f1f5f9" : "#0f172a",
            letterSpacing: "-0.01em",
            margin: 0,
          }}>
            {category.label}
          </h3>
        </div>
        <span style={{
          fontFamily: "monospace",
          fontSize: "0.6rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          color: category.accent,
          opacity: 0.75,
        }}>
          {category.techs.length}
        </span>
      </div>

      {/* Pills */}
      <div style={{
        padding: "1.1rem 1.5rem 1.4rem",
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
        flex: 1,
      }}>
        {category.techs.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.06 + i * 0.03 }}
          >
            <Pill
              name={tech.name}
              icon={tech.icon}
              color={tech.color}
              isDark={isDark}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ── Skills Section ─────────────────────────────────────────────────────── */
export default function Skills({ darkMode }) {
  const isDark = !!darkMode;
  const t1 = isDark ? "#f1f5f9" : "#0f172a";
  const t2 = isDark ? "#64748b" : "#64748b";

  return (
    <section
      id="skills"
      style={{
        position: "relative",
        padding: "7rem 0 8rem",
        overflow: "hidden",
        background: isDark ? "transparent" : "#f4f6f9",
      }}
    >
      {/* Dot grid */}
      {isDark && (
        <div style={{
          position: "absolute", inset: 0, opacity: 0.14, pointerEvents: "none",
          backgroundImage: "radial-gradient(rgba(255,255,255,0.45) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }} />
      )}

      {/* Ambient glow */}
      <div style={{
        position: "absolute", top: "20%", left: "50%",
        transform: "translateX(-50%)",
        width: 700, height: 500, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "4rem" }}
        >
          <span style={{
            fontFamily: "monospace", fontSize: "0.68rem",
            letterSpacing: "0.28em", textTransform: "uppercase",
            color: "#3b82f6", display: "inline-block", marginBottom: "1rem",
          }}>
            / Expertise
          </span>
          <h2 style={{
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 900, letterSpacing: "-0.035em", lineHeight: 1,
            color: t1, margin: "0 0 0.75rem",
          }}>
            Skills &{" "}
            <span style={{
              fontStyle: "italic",
              background: "linear-gradient(130deg, #3b82f6, #6366f1)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              Tools
            </span>
          </h2>
          <p style={{ fontSize: "1rem", color: t2, fontWeight: 300, margin: 0, maxWidth: 420 }}>
            A snapshot of the full stack I work with — from UI to deployment.
          </p>
        </motion.div>

        {/* All 6 category cards at once */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
          gap: "1.25rem",
        }}>
          {categories.map((category, idx) => (
            <CategoryCard
              key={category.label}
              category={category}
              index={idx}
              isDark={isDark}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

Skills.propTypes = { darkMode: PropTypes.bool };