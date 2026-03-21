import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import projects from "../../data/projects.js";

const TILT_MAX = 8;

function ProjectCard({ project, darkMode, index }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    setTilt({ x: -dy * TILT_MAX, y: dx * TILT_MAX });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
      style={{ perspective: 1200 }}
    >
      <div
        style={{
          transform: hovered
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-4px)`
            : "rotateX(0deg) rotateY(0deg) translateY(0px)",
          transformStyle: "preserve-3d",
          transition: hovered ? "transform 0.08s linear" : "transform 0.55s cubic-bezier(0.22,1,0.36,1)",
          borderRadius: 24,
          overflow: "hidden",
          border: `1px solid ${darkMode ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.09)"}`,
          background: darkMode ? "rgba(255,255,255,0.03)" : "#ffffff",
          boxShadow: hovered
            ? darkMode
              ? "0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(59,130,246,0.2)"
              : "0 24px 60px rgba(15,23,42,0.14), 0 0 0 1px rgba(59,130,246,0.12)"
            : darkMode
              ? "0 4px 20px rgba(0,0,0,0.3)"
              : "0 2px 16px rgba(15,23,42,0.07)",
        }}
      >
        {/* Image */}
        <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
          <img
            src={project.image}
            alt={project.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.6s ease",
              transform: hovered ? "scale(1.06)" : "scale(1)",
              display: "block",
            }}
          />
          {/* Gradient overlay */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)",
          }} />
          {/* Category badge */}
          <span style={{
            position: "absolute",
            bottom: 16,
            left: 16,
            padding: "0.28rem 0.85rem",
            borderRadius: 50,
            background: "#2563eb",
            color: "#fff",
            fontSize: "0.65rem",
            fontWeight: 800,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}>
            {project.category}
          </span>
        </div>

        {/* Body */}
        <div style={{ padding: "1.75rem 1.75rem 1.5rem" }}>
          <h4 style={{
            fontSize: "1.2rem",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: darkMode ? "#f1f5f9" : "#0f172a",
            marginBottom: "0.6rem",
          }}>
            {project.name}
          </h4>

          <p style={{
            fontSize: "0.83rem",
            lineHeight: 1.65,
            color: darkMode ? "#64748b" : "#64748b",
            marginBottom: "1.25rem",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}>
            {project.description}
          </p>

          {/* Tech tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
            {project.tech.slice(0, 4).map((t) => (
              <span key={t} style={{
                padding: "0.22rem 0.7rem",
                borderRadius: 50,
                border: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(15,23,42,0.1)"}`,
                background: darkMode ? "rgba(255,255,255,0.04)" : "rgba(15,23,42,0.03)",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: darkMode ? "#475569" : "#94a3b8",
              }}>
                {t}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div style={{
            height: 1,
            background: darkMode ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.07)",
            marginBottom: "1.25rem",
          }} />

          {/* Links */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: "0.35rem",
                  fontSize: "0.75rem", fontWeight: 600,
                  color: darkMode ? "#475569" : "#94a3b8",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = darkMode ? "#e2e8f0" : "#0f172a"}
                onMouseLeave={(e) => e.currentTarget.style.color = darkMode ? "#475569" : "#94a3b8"}
              >
                <FiGithub size={15} /> Code
              </a>
            </div>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                padding: "0.45rem 1rem",
                borderRadius: 50,
                background: "linear-gradient(130deg, #3b82f6, #6366f1)",
                color: "#fff",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(59,130,246,0.3)",
                transition: "opacity 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(59,130,246,0.45)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.boxShadow = "0 4px 14px rgba(59,130,246,0.3)"; }}
            >
              Live Demo <FiExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HomeProjects({ darkMode }) {
  const isDark = !!darkMode;

  return (
    <section
      id="projects"
      style={{
        position: "relative",
        padding: "7rem 0 8rem",
        background: isDark ? "transparent" : "#f4f6f9",
        overflow: "hidden",
      }}
    >
      {/* Dot grid removed for standardization */}

      {/* Ambient glow */}
      <div style={{
        position: "absolute", bottom: "-10%", left: "50%", transform: "translateX(-50%)",
        width: 700, height: 400, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "4rem" }}
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
            / Portfolio Spotlight
          </span>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
            <h2 style={{
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              color: isDark ? "#ffffff" : "#0f172a",
              margin: 0,
            }}>
              Featured{" "}
              <span style={{
                fontStyle: "italic",
                background: "linear-gradient(130deg, #3b82f6 0%, #818cf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Work.
              </span>
            </h2>

            {/* Desktop CTA inline with heading */}
            <Link
              to="/projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.75rem",
                borderRadius: 50,
                border: `1.5px solid ${isDark ? "rgba(59,130,246,0.35)" : "rgba(59,130,246,0.3)"}`,
                color: "#3b82f6",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
                textDecoration: "none",
                transition: "background 0.2s, border-color 0.2s",
                flexShrink: 0,
                alignSelf: "center",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(59,130,246,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            >
              All Projects <FiArrowRight size={14} />
            </Link>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "1.5rem",
        }}>
          {projects.slice(0, 3).map((project, i) => (
            <ProjectCard key={project.id} project={project} darkMode={isDark} index={i} />
          ))}
        </div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{ marginTop: "3.5rem", textAlign: "center" }}
        >
          <Link
            to="/projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.9rem 2.5rem",
              borderRadius: 50,
              background: "linear-gradient(130deg, #3b82f6, #6366f1)",
              color: "#fff",
              fontSize: "0.82rem",
              fontWeight: 800,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              boxShadow: "0 8px 32px rgba(59,130,246,0.3)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(59,130,246,0.45)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(59,130,246,0.3)"; }}
          >
            Explore All Projects <FiExternalLink size={14} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}