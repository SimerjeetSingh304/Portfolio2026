import { motion } from "framer-motion";
import { FiCheck, FiStar, FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import { GitHubCalendar } from "react-github-calendar";

const focusAreas = [
  { label: "Full-Stack Architecture", sub: "Modern JS/TS ecosystem, React, Next.js, Node.js" },
  { label: "ML & AI Systems", sub: "TensorFlow, PyTorch, LLM integrations & GenAI pipelines" },
  { label: "Community Leadership", sub: "Founder of Geek Room · 15,000+ registrations" },
  { label: "Production Deployment", sub: "AWS, Vercel, Docker & containerized environments" },
];

const achievements = [
  { stat: "15K+", label: "Community Members", detail: "Founder of Geek Room — India's fastest-growing student tech community" },
  { stat: "50+", label: "Events Led", detail: "Hackathons, workshops, and tech talks orchestrated across campuses" },
  { stat: "Open Source", label: "Contributor", detail: "Active contributions to ML and web development open-source projects" },
  { stat: "∞", label: "Users Reached", detail: "Production apps serving thousands of users daily" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function About({ darkMode }) {
  const isDark = !!darkMode;
  const githubUsername = "prince545";

  const card = `
    position: relative;
    border-radius: 24px;
    border: 1px solid ${isDark ? "rgba(255,255,255,0.07)" : "rgba(15,23,42,0.08)"};
    background: ${isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.9)"};
    backdrop-filter: blur(20px);
    overflow: hidden;
    transition: border-color 0.25s, box-shadow 0.25s;
  `;

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
      {/* Subtle dot grid */}
      {/* Subtle dot grid removed for standardization */}

      {/* Large ambient glow */}
      <div style={{
        position: "absolute", top: "-20%", right: "-10%",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>

        {/* ── Section Header ───────────────────────────────────────── */}
        <motion.div {...fadeUp(0)} style={{ marginBottom: "5rem" }}>
          <span style={{
            display: "inline-block",
            fontFamily: "monospace",
            fontSize: "0.7rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#3b82f6",
            marginBottom: "1.25rem",
          }}>
            / Background
          </span>
          <h2 style={{
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
            color: isDark ? "#ffffff" : "#0f172a",
            margin: 0,
          }}>
            About<br />
            <span style={{
              fontStyle: "italic",
              background: "linear-gradient(130deg, #3b82f6 0%, #818cf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Me.
            </span>
          </h2>
        </motion.div>

        {/* ── Bento Grid ───────────────────────────────────────────── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "1.25rem" }}>

          {/* Story — spans 7 cols */}
          <motion.div
            {...fadeUp(0.05)}
            style={{ gridColumn: "span 12", ["@media(min-width:900px)"]: { gridColumn: "span 7" } }}
            className="about-col-7"
          >
            <div className="about-card" style={{
              padding: "3rem",
              height: "100%",
            }}>
              <p style={{
                fontFamily: "monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#3b82f6",
                marginBottom: "1.5rem",
              }}>
                01 — The Story
              </p>
              <p style={{
                fontSize: "1.15rem",
                lineHeight: 1.75,
                fontWeight: 300,
                color: isDark ? "#94a3b8" : "#475569",
                margin: 0,
              }}>
                A Computer Science student at{" "}
                <span style={{ color: isDark ? "#e2e8f0" : "#0f172a", fontWeight: 600 }}>
                  Maharaja Surajmal Institute of Technology
                </span>{" "}
                with a strong foundation in full-stack development and machine learning engineering.
                My journey spans from architecting scalable web applications to implementing sophisticated
                AI solutions. As the{" "}
                <span style={{ color: "#3b82f6", fontWeight: 600 }}>Founder of Geek Room</span>{" "}
                and GDG Lead, I've driven technical communities forward — orchestrating events that have
                reached over{" "}
                <span style={{ color: isDark ? "#e2e8f0" : "#0f172a", fontWeight: 700 }}>
                  15,000+ participants
                </span>.
              </p>
            </div>
          </motion.div>

          {/* Education — spans 5 cols */}
          <motion.div
            {...fadeUp(0.1)}
            id="education"
            className="about-col-5"
          >
            <div className="about-card" style={{ padding: "2.5rem", height: "100%" }}>
              <p style={{
                fontFamily: "monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#3b82f6",
                marginBottom: "1.75rem",
              }}>
                02 — Education
              </p>

              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.3rem 0.8rem",
                borderRadius: 50,
                border: "1px solid rgba(59,130,246,0.25)",
                background: "rgba(59,130,246,0.06)",
                marginBottom: "1.5rem",
              }}>
                <span style={{ fontSize: "0.7rem", color: "#3b82f6", fontWeight: 700, letterSpacing: "0.05em" }}>
                  2022 – 2026
                </span>
              </div>

              <h4 style={{
                fontSize: "1.35rem",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: isDark ? "#f1f5f9" : "#0f172a",
                marginBottom: "0.6rem",
                lineHeight: 1.2,
              }}>
                B.Tech in<br />Computer Science
              </h4>
              <p style={{
                fontSize: "0.9rem",
                color: isDark ? "#64748b" : "#94a3b8",
                marginBottom: "2rem",
                fontWeight: 500,
              }}>
                MSIT, New Delhi
              </p>

              <div style={{
                height: 1,
                background: isDark ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.07)",
                marginBottom: "1.5rem",
              }} />

              {[
                "Software Engineering, AI/ML & Systems Design",
                "Active in technical clubs and hackathons",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <div style={{
                    marginTop: 4,
                    width: 6, height: 6, borderRadius: "50%",
                    background: "#3b82f6",
                    flexShrink: 0,
                    boxShadow: "0 0 8px rgba(59,130,246,0.6)",
                  }} />
                  <p style={{ fontSize: "0.82rem", color: isDark ? "#64748b" : "#64748b", margin: 0, lineHeight: 1.5 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Focus Areas — full width */}
          <motion.div {...fadeUp(0.12)} style={{ gridColumn: "1 / -1" }}>
            <div className="about-card" style={{ padding: "2.5rem 3rem" }}>
              <p style={{
                fontFamily: "monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#3b82f6",
                marginBottom: "2rem",
              }}>
                03 — Core Focus Areas
              </p>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                gap: "1rem",
              }}>
                {focusAreas.map((area, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.45 }}
                    whileHover={{ y: -2 }}
                    style={{
                      padding: "1.25rem 1.5rem",
                      borderRadius: 16,
                      border: `1px solid ${isDark ? "rgba(255,255,255,0.07)" : "rgba(15,23,42,0.07)"}`,
                      background: isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.7)",
                      cursor: "default",
                      transition: "border-color 0.2s, box-shadow 0.2s",
                    }}
                    onHoverStart={(e) => {
                      e.target.style && (e.target.style.borderColor = "rgba(59,130,246,0.3)");
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.6rem" }}>
                      <div style={{
                        width: 24, height: 24, borderRadius: 8,
                        background: "rgba(59,130,246,0.1)",
                        border: "1px solid rgba(59,130,246,0.2)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                      }}>
                        <FiCheck size={13} color="#3b82f6" />
                      </div>
                      <span style={{
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        color: isDark ? "#e2e8f0" : "#0f172a",
                      }}>
                        {area.label}
                      </span>
                    </div>
                    <p style={{
                      fontSize: "0.75rem",
                      color: isDark ? "#64748b" : "#94a3b8",
                      margin: 0,
                      lineHeight: 1.5,
                      paddingLeft: "1.85rem",
                    }}>
                      {area.sub}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievements — full width bento row */}
          <motion.div {...fadeUp(0.14)} style={{ gridColumn: "1 / -1" }}>
            <p style={{
              fontFamily: "monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#3b82f6",
              marginBottom: "1.25rem",
            }}>
              04 — Achievements
            </p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1rem",
            }}>
              {achievements.map((a, i) => (
                <motion.div
                  key={i}
                  className="about-card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  style={{ padding: "2rem" }}
                >
                  <div style={{
                    fontSize: "2.6rem",
                    fontWeight: 900,
                    letterSpacing: "-0.04em",
                    background: "linear-gradient(130deg, #3b82f6, #818cf8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    lineHeight: 1,
                    marginBottom: "0.4rem",
                  }}>
                    {a.stat}
                  </div>
                  <div style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: isDark ? "#e2e8f0" : "#0f172a",
                    marginBottom: "0.6rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}>
                    {a.label}
                  </div>
                  <p style={{
                    fontSize: "0.78rem",
                    color: isDark ? "#475569" : "#94a3b8",
                    margin: 0,
                    lineHeight: 1.6,
                  }}>
                    {a.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* GitHub Activity — full width */}
          <motion.div {...fadeUp(0.16)} style={{ gridColumn: "1 / -1" }}>
            <div className="about-card" style={{ padding: "3rem" }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "2.5rem",
              }}>
                <div>
                  <p style={{
                    fontFamily: "monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#3b82f6",
                    marginBottom: "0.4rem",
                  }}>
                    05 — GitHub Activity
                  </p>
                  <p style={{
                    fontSize: "0.82rem",
                    color: isDark ? "#475569" : "#94a3b8",
                    margin: 0,
                  }}>
                    @{githubUsername}
                  </p>
                </div>
                <a
                  href={`https://github.com/${githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.6rem 1.4rem",
                    borderRadius: 50,
                    background: "linear-gradient(130deg, #3b82f6, #6366f1)",
                    color: "#fff",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    boxShadow: "0 4px 20px rgba(59,130,246,0.28)",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(59,130,246,0.4)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(59,130,246,0.28)"; }}
                >
                  <FiGithub size={14} />
                  View Profile
                  <FiArrowUpRight size={12} />
                </a>
              </div>

              {/* Stats row */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "1.25rem",
                marginBottom: "2.5rem",
              }}>
                {[
                  { type: "stats", label: "GitHub Stats" },
                  { type: "langs", label: "Top Languages" },
                ].map((card, i) => (
                  <div key={i} style={{
                    borderRadius: 16,
                    border: `1px solid ${isDark ? "rgba(255,255,255,0.07)" : "rgba(15,23,42,0.07)"}`,
                    background: isDark ? "rgba(255,255,255,0.02)" : "#f8fafc",
                    padding: "1.25rem",
                    overflow: "hidden",
                  }}>
                    <img
                      src={
                        card.type === "stats"
                          ? `https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=${isDark ? "transparent" : "default"}&hide_border=true&title_color=3b82f6&icon_color=3b82f6&text_color=${isDark ? "94a3b8" : "475569"}&bg_color=00000000`
                          : `https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=${isDark ? "transparent" : "default"}&hide_border=true&title_color=3b82f6&text_color=${isDark ? "94a3b8" : "475569"}&bg_color=00000000`
                      }
                      alt={card.label}
                      style={{ width: "100%", display: "block" }}
                    />
                  </div>
                ))}
              </div>

              {/* Heatmap */}
              <div style={{
                paddingTop: "2rem",
                borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.07)"}`,
              }}>
                <p style={{
                  fontFamily: "monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: isDark ? "#334155" : "#94a3b8",
                  marginBottom: "1.5rem",
                }}>
                  Contribution Heatmap
                </p>
                <div style={{ overflowX: "auto", paddingBottom: "0.5rem" }}>
                  <GitHubCalendar
                    username={githubUsername}
                    colorScheme={isDark ? "dark" : "light"}
                    theme={{
                      light: ["#f1f5f9", "#93c5fd", "#60a5fa", "#3b82f6", "#1d4ed8"],
                      dark: ["#1e293b", "#1e3a5f", "#1d4ed8", "#2563eb", "#60a5fa"],
                    }}
                    fontSize={12}
                    blockSize={13}
                    blockMargin={4}
                  />
                </div>
                <p style={{
                  marginTop: "1.25rem",
                  fontSize: "0.75rem",
                  fontStyle: "italic",
                  color: isDark ? "#334155" : "#94a3b8",
                }}>
                  Consistency is the hallmark of mastery.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        .about-card {
          position: relative;
          border-radius: 24px;
          border: 1px solid ${isDark ? "rgba(255,255,255,0.07)" : "rgba(15,23,42,0.08)"};
          background: ${isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.9)"};
          backdrop-filter: blur(20px);
          overflow: hidden;
          box-shadow: ${isDark ? "none" : "0 2px 20px rgba(15,23,42,0.06)"};
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        .about-card:hover {
          border-color: ${isDark ? "rgba(59,130,246,0.22)" : "rgba(59,130,246,0.18)"};
          box-shadow: ${isDark ? "0 0 0 1px rgba(59,130,246,0.1)" : "0 4px 32px rgba(59,130,246,0.1)"};
        }
        .about-col-7 {
          grid-column: span 12;
        }
        .about-col-5 {
          grid-column: span 12;
        }
        @media (min-width: 900px) {
          .about-col-7 { grid-column: span 7; }
          .about-col-5 { grid-column: span 5; }
        }
      `}</style>
    </section>
  );
}