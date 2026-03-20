import { useState } from "react";

const getInputStyle = (isDark) => ({
  width: "100%",
  background: isDark ? "transparent" : "rgba(255,255,255,0.75)",
  border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.12)"}`,
  borderRadius: "10px",
  padding: "14px 18px",
  color: isDark ? "#fff" : "#0f172a",
  fontSize: "0.95rem",
  fontFamily: "'Segoe UI', sans-serif",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
});

const getLabelStyle = (isDark) => ({
  display: "block",
  color: isDark ? "#ffffff" : "#0f172a",
  fontSize: "0.95rem",
  fontWeight: 600,
  marginBottom: "8px",
  fontFamily: "'Segoe UI', sans-serif",
});

export default function Contact({ darkMode }) {
  const isDark = !!darkMode;
  const inputStyle = getInputStyle(isDark);
  const labelStyle = getLabelStyle(isDark);
  const sectionBg = isDark
    ? "transparent"
    : "linear-gradient(135deg, rgba(248,250,252,1) 0%, rgba(224,242,254,0.75) 45%, rgba(226,232,240,0.7) 100%)";
  const buttonBaseBg = isDark ? "transparent" : "rgba(255,255,255,0.75)";

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [focused, setFocused] = useState("");

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const fieldStyle = (name) => ({
    ...inputStyle,
    borderColor:
      focused === name
        ? isDark
          ? "rgba(255,255,255,0.35)"
          : "rgba(15,23,42,0.35)"
        : isDark
          ? "rgba(255,255,255,0.08)"
          : "rgba(15,23,42,0.12)",
  });

  return (
    <section style={{
      minHeight: "100vh",
      background: sectionBg,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "60px 24px",
    }}>

      {/* Title */}
      <h1 style={{
        margin: "0 0 48px",
        fontSize: "clamp(2rem, 5vw, 3.8rem)",
        fontWeight: 800,
        fontFamily: "'Segoe UI', sans-serif",
        letterSpacing: "0.04em",
        textAlign: "center",
        lineHeight: 1,
      }}>
        <span style={{ color: isDark ? "#ffffff" : "#0f172a" }}>GET IN </span>
        <span style={{ color: isDark ? "#888" : "#6b7280" }}>TOUCH </span>
        <span style={{ color: isDark ? "#555" : "#64748b" }}>WITH </span>
        <span style={{ color: isDark ? "#333" : "#0f172a" }}>ME</span>
      </h1>

      {/* Form */}
      <div style={{ width: "100%", maxWidth: "680px", display: "flex", flexDirection: "column", gap: "20px" }}>

        <div>
          <label style={labelStyle}>Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handle}
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused("")}
            placeholder="Enter your name"
            style={fieldStyle("name")}
          />
        </div>

        <div>
          <label style={labelStyle}>Email Address</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handle}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused("")}
            placeholder="Enter your email address"
            style={fieldStyle("email")}
          />
        </div>

        <div>
          <label style={labelStyle}>Subject</label>
          <input
            name="subject"
            value={form.subject}
            onChange={handle}
            onFocus={() => setFocused("subject")}
            onBlur={() => setFocused("")}
            placeholder="Enter the subject"
            style={fieldStyle("subject")}
          />
        </div>

        <div>
          <label style={labelStyle}>Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handle}
            onFocus={() => setFocused("message")}
            onBlur={() => setFocused("")}
            placeholder="Enter your message"
            rows={6}
            style={{
              ...fieldStyle("message"),
              resize: "vertical",
              minHeight: "140px",
            }}
          />
        </div>

        {/* Submit */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "8px" }}>
          <button
            onClick={() => alert("Message sent!")}
            style={{
              background: buttonBaseBg,
              border: `1px solid ${isDark ? "rgba(255,255,255,0.15)" : "rgba(15,23,42,0.15)"}`,
              borderRadius: "50px",
              color: isDark ? "#fff" : "#0f172a",
              fontSize: "1rem",
              fontWeight: 600,
              padding: "13px 36px",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "'Segoe UI', sans-serif",
              transition: "background 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = isDark
                ? "rgba(255,255,255,0.06)"
                : "rgba(219,234,254,0.9)";
              e.currentTarget.style.borderColor = isDark
                ? "rgba(255,255,255,0.35)"
                : "rgba(15,23,42,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = buttonBaseBg;
              e.currentTarget.style.borderColor = isDark
                ? "rgba(255,255,255,0.15)"
                : "rgba(15,23,42,0.15)";
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            Submit
          </button>
        </div>

      </div>
    </section>
  );
}