import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowRight } from "react-icons/fi";

const SOCIALS = [
  { icon: <FiGithub size={18} />,   label: "GitHub",   href: "https://github.com/SimerjeetSingh304",         color: "#f1f5f9", username: "SimerjeetSingh304" },
  { icon: <FiLinkedin size={18} />, label: "LinkedIn",  href: "https://www.linkedin.com/in/simerjeet-singh-8b1700295/",    color: "#0A66C2", username: "simerjeet-singh-8b1700295" },
  { icon: <FiTwitter size={18} />,  label: "Twitter",   href: "https://twitter.com/yourusername",        color: "#1DA1F2", username: "yourusername" },
  { icon: <FiMail size={18} />,     label: "Email",     href: "mailto:your@email.com",                   color: "#3b82f6", username: "your@email.com" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Contact({ darkMode }) {
  const isDark = !!darkMode;

  const [form, setForm]       = useState({ name: "", email: "", subject: "", message: "" });
  const [focused, setFocused] = useState("");
  const [sent, setSent]       = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  /* tokens */
  const t1     = isDark ? "#f1f5f9" : "#0f172a";
  const t2     = isDark ? "#64748b" : "#64748b";
  const tMid   = isDark ? "#94a3b8" : "#475569";
  const border = isDark ? "rgba(255,255,255,0.07)" : "rgba(15,23,42,0.09)";
  const inputBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.9)";
  const focusBorder = "#3b82f6";

  const inputStyle = (name) => ({
    width: "100%",
    background: inputBg,
    border: `1px solid ${focused === name ? focusBorder + "88" : border}`,
    borderRadius: 12,
    padding: "13px 16px",
    color: t1,
    fontSize: "0.9rem",
    fontWeight: 400,
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxShadow: focused === name ? `0 0 0 3px ${focusBorder}18` : "none",
    backdropFilter: "blur(8px)",
  });

  return (
    <section
      id="contact"
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
        position: "absolute", bottom: "-10%", left: "50%",
        transform: "translateX(-50%)",
        width: 700, height: 400, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 68%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 2rem" }}>

        {/* ── Header ───────────────────────────────────────────── */}
        <motion.div {...fadeUp(0)} style={{ marginBottom: "5rem" }}>
          <span style={{
            fontFamily: "monospace", fontSize: "0.68rem",
            letterSpacing: "0.28em", textTransform: "uppercase",
            color: "#3b82f6", display: "inline-block", marginBottom: "1.25rem",
          }}>
            / Contact
          </span>
          <h2 style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.95,
            color: t1, margin: 0,
          }}>
            Get in{" "}
            <span style={{
              fontStyle: "italic",
              background: "linear-gradient(130deg, #3b82f6, #818cf8)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              touch.
            </span>
          </h2>
        </motion.div>

        {/* ── Split layout ─────────────────────────────────────── */}
        <div className="contact-grid" style={{ display: "grid", gap: "3rem", alignItems: "start" }}>

          {/* LEFT — info */}
          <motion.div {...fadeUp(0.08)}>

            <p style={{
              fontSize: "1.05rem", lineHeight: 1.8, fontWeight: 300,
              color: tMid, marginBottom: "2.5rem", maxWidth: 400,
            }}>
              Have a project in mind, want to collaborate, or just want to say hi?
              I'm always open to new opportunities and conversations.
            </p>

            {/* Social links */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "3rem" }}>
              {SOCIALS.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.12 + i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 4, transition: { duration: 0.15 } }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.85rem",
                    padding: "0.85rem 1.25rem",
                    borderRadius: 14,
                    border: `1px solid ${border}`,
                    background: isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.85)",
                    textDecoration: "none",
                    backdropFilter: "blur(12px)",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                    maxWidth: 320,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = s.color + "55";
                    e.currentTarget.style.boxShadow = `0 4px 20px ${s.color}18`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = border;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <span style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: s.color + "18",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: s.color === "#f1f5f9" ? (isDark ? "#e2e8f0" : "#334155") : s.color,
                    flexShrink: 0,
                  }}>
                    {s.icon}
                  </span>
                  <div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 700, color: t1 }}>{s.label}</div>
                    <div style={{ fontSize: "0.72rem", color: t2 }}>{s.username}</div>
                  </div>
                  <FiArrowRight
                    size={14}
                    style={{ marginLeft: "auto", color: t2, opacity: 0.5 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Availability note */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.6rem",
              padding: "0.5rem 1rem 0.5rem 0.7rem",
              borderRadius: 50,
              border: `1px solid ${isDark ? "rgba(34,197,94,0.22)" : "rgba(34,197,94,0.2)"}`,
              background: "rgba(34,197,94,0.06)",
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 0 3px rgba(34,197,94,0.2)",
                display: "inline-block",
                animation: "cpulse 2.4s ease infinite",
              }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#22c55e" }}>
                Currently available for new projects
              </span>
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.div {...fadeUp(0.12)}>
            <div style={{
              borderRadius: 24,
              border: `1px solid ${border}`,
              background: isDark ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.9)",
              backdropFilter: "blur(20px)",
              padding: "2.5rem",
              boxShadow: isDark ? "none" : "0 4px 32px rgba(15,23,42,0.07)",
              transition: "border-color 0.25s",
            }}>

              {/* Form header */}
              <div style={{ marginBottom: "2rem" }}>
                <p style={{
                  fontFamily: "monospace", fontSize: "0.63rem",
                  letterSpacing: "0.22em", textTransform: "uppercase",
                  color: "#3b82f6", marginBottom: "0.4rem",
                }}>
                  Send a message
                </p>
                <p style={{ fontSize: "0.85rem", color: t2, margin: 0, fontWeight: 300 }}>
                  I'll get back to you within 24 hours.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>

                {/* Name + Email row */}
                <div className="contact-row" style={{ display: "grid", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: tMid, marginBottom: "0.5rem", letterSpacing: "0.04em" }}>
                      Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handle}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused("")}
                      placeholder="Your name"
                      style={inputStyle("name")}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: tMid, marginBottom: "0.5rem", letterSpacing: "0.04em" }}>
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handle}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused("")}
                      placeholder="your@email.com"
                      style={inputStyle("email")}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: tMid, marginBottom: "0.5rem", letterSpacing: "0.04em" }}>
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handle}
                    onFocus={() => setFocused("subject")}
                    onBlur={() => setFocused("")}
                    placeholder="What's this about?"
                    style={inputStyle("subject")}
                  />
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: tMid, marginBottom: "0.5rem", letterSpacing: "0.04em" }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused("")}
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    style={{
                      ...inputStyle("message"),
                      resize: "vertical",
                      minHeight: 130,
                      lineHeight: 1.65,
                    }}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  onClick={handleSubmit}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: "100%",
                    padding: "0.9rem",
                    borderRadius: 12,
                    border: "none",
                    background: sent
                      ? "linear-gradient(130deg, #22c55e, #16a34a)"
                      : "linear-gradient(130deg, #3b82f6, #6366f1)",
                    color: "#fff",
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    letterSpacing: "0.03em",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.6rem",
                    boxShadow: sent
                      ? "0 6px 24px rgba(34,197,94,0.32)"
                      : "0 6px 24px rgba(59,130,246,0.3)",
                    transition: "background 0.3s, box-shadow 0.3s",
                    marginTop: "0.25rem",
                  }}
                >
                  {sent ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      Message sent!
                    </>
                  ) : (
                    <>
                      <FiSend size={15} />
                      Send Message
                    </>
                  )}
                </motion.button>

              </div>
            </div>
          </motion.div>
        </div>

      </div>

      <style>{`
        @keyframes cpulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(34,197,94,0.20); }
          50%      { box-shadow: 0 0 0 6px rgba(34,197,94,0.06); }
        }
        .contact-grid {
          grid-template-columns: 1fr;
        }
        .contact-row {
          grid-template-columns: 1fr;
        }
        @media (min-width: 800px) {
          .contact-grid {
            grid-template-columns: 1fr 1.3fr;
          }
          .contact-row {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
}