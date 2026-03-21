import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiPython } from "react-icons/si";
import { FiCode } from "react-icons/fi";
import projects from "../../data/projects.js";

/* ── Tech icon map ─────────────────────────────────────────────────────── */
const TECH_ICONS = {
  "React":     <SiReact />,
  "Next.js":   <SiNextdotjs />,
  "Tailwind":  <SiTailwindcss />,
  "Node.js":   <SiNodedotjs />,
  "Python":    <SiPython />,
};
const getTechIcon = (t) => TECH_ICONS[t] ?? <FiCode />;

/* accent per project index */
const ACCENTS = ["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b", "#ef4444", "#ec4899"];

/* ── Single project slide ──────────────────────────────────────────────── */
function ProjectSlide({ project, index, total, isDark }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const imgX    = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], ["6%", "0%", "0%", "-4%"]);
  const textX   = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], ["4%", "0%", "0%", "-4%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const accent = ACCENTS[index % ACCENTS.length];
  const isEven = index % 2 === 0;

  const border  = isDark ? "rgba(255,255,255,0.07)" : "rgba(15,23,42,0.08)";
  const cardBg  = isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.9)";
  const text1   = isDark ? "#f1f5f9" : "#0f172a";
  const text2   = isDark ? "#64748b" : "#64748b";

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="project-slide"
    >
      {/* Large index number — background watermark */}
      <div style={{
        position: "absolute",
        top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        fontSize: "clamp(12rem, 30vw, 22rem)",
        fontWeight: 900,
        letterSpacing: "-0.06em",
        color: accent,
        opacity: 0.04,
        lineHeight: 1,
        pointerEvents: "none",
        userSelect: "none",
        zIndex: 0,
      }}>
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Content split */}
      <div style={{
        position: "relative", zIndex: 1,
        display: "grid",
        gridTemplateColumns: isEven ? "1.1fr 0.9fr" : "0.9fr 1.1fr",
        gap: "3rem",
        alignItems: "center",
        width: "100%",
        maxWidth: 1320,
        margin: "0 auto",
        padding: "0 2.5rem",
      }} className="project-inner">

        {/* Image */}
        <motion.div
          style={{ x: isEven ? imgX : textX, order: isEven ? 0 : 1 }}
        >
          <div style={{
            position: "relative",
            borderRadius: 24,
            overflow: "hidden",
            aspectRatio: "16/10",
            border: `1px solid ${border}`,
            boxShadow: `0 32px 80px rgba(0,0,0,${isDark ? 0.4 : 0.12}), 0 0 0 1px ${border}`,
          }}>
            <img
              src={project.image}
              alt={project.name}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            {/* Overlay gradient */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)",
            }} />

            {/* Category badge */}
            <span style={{
              position: "absolute", bottom: 20, left: 20,
              padding: "0.3rem 0.9rem",
              borderRadius: 50,
              background: accent,
              color: "#fff",
              fontSize: "0.65rem",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}>
              {project.category}
            </span>

            {/* Accent glow behind image */}
            <div style={{
              position: "absolute", inset: "-30%",
              background: `radial-gradient(circle at 50% 50%, ${accent}22, transparent 65%)`,
              pointerEvents: "none",
              zIndex: -1,
            }} />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          style={{ x: isEven ? textX : imgX, order: isEven ? 1 : 0 }}
        >
          {/* Index + line */}
          <div style={{
            display: "flex", alignItems: "center", gap: "1rem",
            marginBottom: "1.5rem",
          }}>
            <span style={{
              fontFamily: "monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              color: accent,
              fontWeight: 700,
            }}>
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <div style={{ flex: 1, height: 1, background: `${accent}44` }} />
          </div>

          {/* Title */}
          <h3 style={{
            fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 1.0,
            color: text1,
            marginBottom: "1.25rem",
          }}>
            {project.name}
          </h3>

          {/* Description */}
          <p style={{
            fontSize: "1rem",
            lineHeight: 1.75,
            fontWeight: 300,
            color: text2,
            marginBottom: "2rem",
            maxWidth: 440,
          }}>
            {project.description}
          </p>

          {/* Tech tags */}
          <div style={{
            display: "flex", flexWrap: "wrap", gap: "0.5rem",
            marginBottom: "2.5rem",
          }}>
            {project.tech?.slice(0, 6).map((t) => (
              <span key={t} style={{
                display: "inline-flex", alignItems: "center", gap: "0.35rem",
                padding: "0.3rem 0.85rem",
                borderRadius: 50,
                border: `1px solid ${border}`,
                background: isDark ? "rgba(255,255,255,0.04)" : "rgba(15,23,42,0.03)",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                color: text2,
              }}>
                <span style={{ fontSize: "0.85rem", color: accent }}>{getTechIcon(t)}</span>
                {t}
              </span>
            ))}
          </div>

          {/* Action links */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.78rem 1.75rem",
                borderRadius: 50,
                background: accent,
                color: "#fff",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
                textDecoration: "none",
                boxShadow: `0 6px 24px ${accent}44`,
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 10px 32px ${accent}66`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = `0 6px 24px ${accent}44`; }}
            >
              Live Demo <FiExternalLink size={14} />
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.78rem 1.5rem",
                borderRadius: 50,
                border: `1.5px solid ${border}`,
                color: isDark ? "#94a3b8" : "#64748b",
                fontSize: "0.82rem",
                fontWeight: 700,
                textDecoration: "none",
                background: "transparent",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = accent + "66"; e.currentTarget.style.color = accent; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.color = isDark ? "#94a3b8" : "#64748b"; }}
            >
              <FiGithub size={15} /> Code
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ── Main Projects page ────────────────────────────────────────────────── */
export default function Projects({ darkMode }) {
  const isDark = !!darkMode;
  const list = projects ?? [];

  const text1 = isDark ? "#f8fafc" : "#0f172a";
  const text2 = isDark ? "#64748b" : "#94a3b8";
  const pageBg = isDark ? "transparent" : "#f4f6f9";

  return (
    <div style={{ position: "relative", background: pageBg, minHeight: "100vh" }}>

      {/* Dot grid */}
      {isDark && (
        <div style={{
          position: "fixed", inset: 0, opacity: 0.15, pointerEvents: "none", zIndex: 0,
          backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />
      )}

      {/* ── Page header ──────────────────────────────────────────── */}
      <div style={{
        position: "relative", zIndex: 1,
        maxWidth: 1320, margin: "0 auto",
        padding: "8rem 2.5rem 5rem",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "2rem",
      }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span style={{
            display: "inline-block",
            fontFamily: "monospace",
            fontSize: "0.68rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#3b82f6",
            marginBottom: "1rem",
          }}>
            / All Projects
          </span>
          <h1 style={{
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
            color: text1,
            margin: 0,
          }}>
            Built with<br />
            <span style={{
              fontStyle: "italic",
              background: "linear-gradient(130deg, #3b82f6, #818cf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              purpose.
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: "1rem",
            lineHeight: 1.7,
            fontWeight: 300,
            color: text2,
            maxWidth: 360,
            alignSelf: "flex-end",
          }}
        >
          A selection of projects spanning full-stack web, machine learning, and developer tooling — each built to solve a real problem.
        </motion.p>
      </div>

      {/* ── Project slides ───────────────────────────────────────── */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {list.map((project, i) => (
          <ProjectSlide
            key={project.id ?? i}
            project={project}
            index={i}
            total={list.length}
            isDark={isDark}
          />
        ))}
      </div>

      {/* ── Footer CTA ───────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          position: "relative", zIndex: 1,
          padding: "6rem 2.5rem 8rem",
          textAlign: "center",
          borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.07)"}`,
        }}
      >
        <p style={{
          fontSize: "0.72rem",
          fontFamily: "monospace",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#3b82f6",
          marginBottom: "1.25rem",
        }}>
          Want to collaborate?
        </p>
        <h2 style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 900,
          letterSpacing: "-0.03em",
          color: text1,
          marginBottom: "2rem",
        }}>
          Let's build something{" "}
          <span style={{
            fontStyle: "italic",
            background: "linear-gradient(130deg,#3b82f6,#818cf8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            great.
          </span>
        </h2>
        <a
          href="/#contact"
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
            padding: "0.9rem 2.25rem",
            borderRadius: 50,
            background: "linear-gradient(130deg,#3b82f6,#6366f1)",
            color: "#fff",
            fontSize: "0.84rem",
            fontWeight: 700,
            letterSpacing: "0.04em",
            textDecoration: "none",
            boxShadow: "0 8px 32px rgba(59,130,246,0.3)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(59,130,246,0.45)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 8px 32px rgba(59,130,246,0.3)"; }}
        >
          Get in touch <FiArrowRight size={14} />
        </a>
      </motion.div>

      <style>{`
        .project-slide {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 5rem 0;
          overflow: hidden;
        }
        @media (max-width: 768px) {
          .project-inner {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .project-inner > * {
            order: unset !important;
          }
        }
      `}</style>
    </div>
  );
}