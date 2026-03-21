import { motion } from "framer-motion";
import { FiGithub, FiArrowUpRight, FiMapPin, FiCalendar } from "react-icons/fi";
import { GitHubCalendar } from "react-github-calendar";

const focusAreas = [
  { num: "01", label: "Full-Stack Architecture",  sub: "React · Next.js · Node.js · TypeScript" },
  { num: "02", label: "ML & AI Systems",           sub: "TensorFlow · PyTorch · LLMs · GenAI" },
  { num: "03", label: "Community Leadership",      sub: "Geek Room Founder · 15,000+ members" },
  { num: "04", label: "Production Deployment",     sub: "AWS · Vercel · Docker · CI/CD" },
];

const achievements = [
  { stat: "15K+",  label: "Community Members",  detail: "Geek Room — India's fastest-growing student tech community", accent: "#3b82f6" },
  { stat: "50+",   label: "Events Organised",   detail: "Hackathons, workshops & tech talks across campuses", accent: "#8b5cf6" },
  { stat: "10+",   label: "Open Source PRs",    detail: "Active contributions to ML and web dev projects", accent: "#10b981" },
  { stat: "1K+",   label: "Daily Active Users", detail: "Production applications serving real users at scale", accent: "#f59e0b" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function About({ darkMode }) {
  const isDark    = !!darkMode;
  const githubUsername = "prince545";

  const t1     = isDark ? "#f1f5f9" : "#0f172a";
  const t2     = isDark ? "#64748b" : "#64748b";
  const tMid   = isDark ? "#94a3b8" : "#475569";
  const border = isDark ? "rgba(255,255,255,0.07)" : "rgba(15,23,42,0.08)";
  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.92)";
  const cardSh = isDark ? "none" : "0 2px 24px rgba(15,23,42,0.06)";

  const card = (extra = {}) => ({
    borderRadius: 24,
    border: `1px solid ${border}`,
    background: cardBg,
    backdropFilter: "blur(20px)",
    boxShadow: cardSh,
    transition: "border-color 0.25s, box-shadow 0.25s",
    ...extra,
  });

  return (
    <section
      id="about"
      style={{
        position: "relative",
        padding: "7rem 0 8rem",
        overflow: "hidden",
        background: isDark ? "transparent" : "#f4f6f9",
      }}
    >
      {isDark && (
        <div style={{
          position: "absolute", inset: 0, opacity: 0.15, pointerEvents: "none",
          backgroundImage: "radial-gradient(rgba(255,255,255,0.45) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }} />
      )}
      <div style={{
        position: "absolute", top: "-20%", right: "-10%",
        width: 600, height: 600, borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>

        {/* Header */}
        <motion.div {...fadeUp(0)} style={{ marginBottom: "5rem", textAlign: "center" }}>
          <span style={{
            fontFamily: "monospace", fontSize: "0.68rem", letterSpacing: "0.28em",
            textTransform: "uppercase", color: "#3b82f6",
            display: "inline-block", marginBottom: "1.25rem",
          }}>/ Background</span>
          <h2 style={{
            fontSize: "clamp(3rem, 8vw, 6.5rem)", fontWeight: 900,
            letterSpacing: "-0.04em", lineHeight: 0.95, color: t1, margin: "0 auto",
            maxWidth: "fit-content"
          }}>
            About<br />
            <span style={{
              fontStyle: "italic",
              background: "linear-gradient(130deg, #3b82f6, #818cf8)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Me.</span>
          </h2>
        </motion.div>

        {/* Row 1 — Story + Education */}
        <div className="ab-row1" style={{ display: "grid", gap: "1.25rem", marginBottom: "1.25rem" }}>

          {/* Story */}
          <motion.div {...fadeUp(0.05)} className="ab-story" style={{ minHeight: 0 }}>
            <div style={{ ...card({ padding: "2.75rem", height: "100%" }) }} className="ab-hover">
              <p style={{ fontFamily: "monospace", fontSize: "0.63rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#3b82f6", marginBottom: "1.5rem" }}>
                01 — The Story
              </p>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.82, fontWeight: 300, color: tMid, margin: 0 }}>
                A Computer Science student at{" "}
                <span style={{ color: t1, fontWeight: 600 }}>Maharaja Surajmal Institute of Technology</span>{" "}
                with a strong foundation in full-stack development and machine learning engineering.
                My journey spans from architecting scalable web applications to implementing sophisticated
                AI solutions. As the{" "}
                <span style={{ color: "#3b82f6", fontWeight: 600 }}>Founder of Geek Room</span>
                {" "}and GDG Lead, I've driven technical communities forward — orchestrating events
                that have reached over{" "}
                <span style={{ color: t1, fontWeight: 700 }}>15,000+ participants</span>.
              </p>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div {...fadeUp(0.1)} id="education" className="ab-edu" style={{ minHeight: 0 }}>
            <div style={{ ...card({ padding: "2.5rem", height: "100%", position: "relative", overflow: "hidden" }) }} className="ab-hover">
              {/* Gradient top bar */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: "linear-gradient(90deg, #3b82f6, #818cf8)",
                borderRadius: "24px 24px 0 0",
              }} />
              <p style={{ fontFamily: "monospace", fontSize: "0.63rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#3b82f6", marginBottom: "1.75rem" }}>
                02 — Education
              </p>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.45rem",
                padding: "0.3rem 0.9rem", borderRadius: 50,
                border: "1px solid rgba(59,130,246,0.25)",
                background: "rgba(59,130,246,0.06)", marginBottom: "1.4rem",
              }}>
                <FiCalendar size={11} color="#3b82f6" />
                <span style={{ fontSize: "0.7rem", color: "#3b82f6", fontWeight: 700, letterSpacing: "0.05em" }}>2022 – 2026</span>
              </div>
              <h4 style={{ fontSize: "1.4rem", fontWeight: 900, letterSpacing: "-0.025em", color: t1, marginBottom: "0.5rem", lineHeight: 1.15 }}>
                B.Tech in<br />Computer Science
              </h4>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "1.75rem" }}>
                <FiMapPin size={12} color={t2} />
                <span style={{ fontSize: "0.85rem", color: t2, fontWeight: 500 }}>MSIT, New Delhi</span>
              </div>
              <div style={{ height: 1, background: border, marginBottom: "1.5rem" }} />
              {["Software Engineering, AI/ML & Systems Design", "Active in technical clubs and hackathons"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.7rem" }}>
                  <div style={{ marginTop: 5, width: 6, height: 6, borderRadius: "50%", background: "#3b82f6", flexShrink: 0, boxShadow: "0 0 8px rgba(59,130,246,0.5)" }} />
                  <p style={{ fontSize: "0.82rem", color: t2, margin: 0, lineHeight: 1.55 }}>{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Row 2 — Focus Areas */}
        <motion.div {...fadeUp(0.12)} style={{ marginBottom: "1.25rem" }}>
          <div style={{ ...card({ padding: "2.5rem 2.75rem" }) }} className="ab-hover">
            <p style={{ fontFamily: "monospace", fontSize: "0.63rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#3b82f6", marginBottom: "2rem", textAlign: "center" }}>
              03 — Core Focus Areas
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: "1rem" }}>
              {focusAreas.map((area, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.45 }}
                  whileHover={{ y: -2 }}
                  style={{
                    padding: "1.4rem 1.5rem", borderRadius: 16,
                    border: `1px solid ${border}`,
                    background: isDark ? "rgba(255,255,255,0.025)" : "rgba(248,250,252,0.8)",
                    cursor: "default", position: "relative", overflow: "hidden",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                  onHoverStart={e => { if (e.currentTarget?.style) { e.currentTarget.style.borderColor = "rgba(59,130,246,0.3)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(59,130,246,0.07)"; }}}
                  onHoverEnd={e => { if (e.currentTarget?.style) { e.currentTarget.style.borderColor = border; e.currentTarget.style.boxShadow = "none"; }}}
                >
                  <span style={{
                    position: "absolute", top: 8, right: 14,
                    fontSize: "3.5rem", fontWeight: 900, lineHeight: 1,
                    color: "#3b82f6", opacity: 0.06, fontFamily: "monospace",
                    pointerEvents: "none", userSelect: "none",
                  }}>{area.num}</span>
                  <span style={{ fontFamily: "monospace", fontSize: "0.6rem", letterSpacing: "0.15em", color: "#3b82f6", fontWeight: 700, display: "block", marginBottom: "0.65rem" }}>
                    {area.num}
                  </span>
                  <div style={{ fontSize: "0.88rem", fontWeight: 800, color: t1, marginBottom: "0.45rem", letterSpacing: "-0.01em", lineHeight: 1.2 }}>
                    {area.label}
                  </div>
                  <p style={{ fontSize: "0.74rem", color: t2, margin: 0, lineHeight: 1.55 }}>{area.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Row 3 — Achievements */}
        <motion.div {...fadeUp(0.14)} style={{ marginBottom: "1.25rem" }}>
          <p style={{ fontFamily: "monospace", fontSize: "0.63rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#3b82f6", marginBottom: "1.1rem", textAlign: "center" }}>
            04 — Achievements
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1rem" }}>
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 + i * 0.07, duration: 0.5 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                style={{
                  ...card({ padding: "1.75rem 1.75rem 1.75rem 1.5rem", position: "relative", overflow: "hidden", cursor: "default" }),
                }}
              >
                <div style={{
                  position: "absolute", left: 0, top: "16%", bottom: "16%",
                  width: 3, borderRadius: "0 4px 4px 0",
                  background: a.accent, boxShadow: `2px 0 12px ${a.accent}55`,
                }} />
                <div style={{ fontSize: "2.8rem", fontWeight: 900, letterSpacing: "-0.04em", color: a.accent, lineHeight: 1, marginBottom: "0.4rem" }}>
                  {a.stat}
                </div>
                <div style={{ fontSize: "0.75rem", fontWeight: 800, color: t1, marginBottom: "0.55rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {a.label}
                </div>
                <p style={{ fontSize: "0.78rem", color: t2, margin: 0, lineHeight: 1.6 }}>{a.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Row 4 — GitHub */}
        <motion.div {...fadeUp(0.16)}>
          <div style={{ ...card({ overflow: "hidden" }) }} className="ab-hover">
            {/* Header */}
            <div style={{
              padding: "2rem 2.75rem",
              borderBottom: `1px solid ${border}`,
              display: "flex", alignItems: "center", justifyContent: "space-between",
              flexWrap: "wrap", gap: "1rem",
            }}>
              <div>
                <p style={{ fontFamily: "monospace", fontSize: "0.63rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#3b82f6", marginBottom: "0.3rem" }}>
                  05 — GitHub Activity
                </p>
                <p style={{ fontSize: "0.82rem", color: t2, margin: 0 }}>@{githubUsername}</p>
              </div>
              <a
                href={`https://github.com/${githubUsername}`}
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  padding: "0.58rem 1.35rem", borderRadius: 50,
                  background: "linear-gradient(130deg, #3b82f6, #6366f1)",
                  color: "#fff", fontSize: "0.78rem", fontWeight: 700,
                  textDecoration: "none", boxShadow: "0 4px 18px rgba(59,130,246,0.28)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 26px rgba(59,130,246,0.4)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 18px rgba(59,130,246,0.28)"; }}
              >
                <FiGithub size={13} /> View Profile <FiArrowUpRight size={12} />
              </a>
            </div>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
              {[
                { src: `https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=${isDark?"transparent":"default"}&hide_border=true&title_color=3b82f6&icon_color=3b82f6&text_color=${isDark?"94a3b8":"475569"}&bg_color=00000000`, alt: "GitHub Stats" },
                { src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=${isDark?"transparent":"default"}&hide_border=true&title_color=3b82f6&text_color=${isDark?"94a3b8":"475569"}&bg_color=00000000`, alt: "Top Languages" },
              ].map((img, i) => (
                <div key={i} style={{
                  padding: "2rem 2.25rem",
                  background: isDark ? "rgba(255,255,255,0.015)" : "#f8fafc",
                  borderRight: i === 0 ? `1px solid ${border}` : "none",
                  borderBottom: `1px solid ${border}`,
                }}>
                  <img src={img.src} alt={img.alt} style={{ width: "100%", display: "block" }} />
                </div>
              ))}
            </div>

            {/* Heatmap */}
            <div style={{ padding: "2.25rem 2.75rem 2.5rem" }}>
              <p style={{ fontFamily: "monospace", fontSize: "0.63rem", letterSpacing: "0.22em", textTransform: "uppercase", color: t2, marginBottom: "1.5rem" }}>
                Contribution Heatmap
              </p>
              <div style={{ overflowX: "auto", paddingBottom: "0.5rem" }}>
                <GitHubCalendar
                  username={githubUsername}
                  colorScheme={isDark ? "dark" : "light"}
                  theme={{
                    light: ["#f1f5f9", "#93c5fd", "#60a5fa", "#3b82f6", "#1d4ed8"],
                    dark:  ["#1e293b", "#1e3a5f", "#1d4ed8", "#2563eb", "#60a5fa"],
                  }}
                  fontSize={12}
                  blockSize={13}
                  blockMargin={4}
                />
              </div>
              <p style={{ marginTop: "1.5rem", fontSize: "0.75rem", fontStyle: "italic", color: isDark ? "#334155" : "#94a3b8" }}>
                Consistency is the hallmark of mastery.
              </p>
            </div>
          </div>
        </motion.div>

      </div>

      <style>{`
        .ab-row1 { 
          grid-template-columns: 1fr; 
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
        }
        @media (min-width: 1100px) {
          .ab-row1 { grid-template-columns: 7fr 5fr; }
        }
        .ab-hover:hover {
          border-color: ${isDark ? "rgba(59,130,246,0.2)" : "rgba(59,130,246,0.16)"} !important;
          box-shadow: ${isDark ? "0 0 0 1px rgba(59,130,246,0.08)" : "0 6px 36px rgba(59,130,246,0.09)"} !important;
        }
        .ab-story, .ab-edu {
          width: 100%;
        }
      `}</style>
    </section>
  );
}