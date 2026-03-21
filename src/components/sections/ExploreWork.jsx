import { motion } from "framer-motion";
import { 
  FiUser, FiTrendingUp, FiLayers, FiArrowRight,
  FiHome, FiStar, FiLayout, FiCalendar, FiActivity, FiMail 
} from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const techStack = [
  "JavaScript", "React.js", "Tailwind CSS", 
  "RESTful APIs", "Git", "GitHub"
];

const experience = [
  { 
    title: "Founder & Technical Lead", 
    company: "Geek Room", 
    period: "2023 - Present" 
  },
  { 
    title: "GDG Lead", 
    company: "Google Developer Groups", 
    period: "2024 - Present" 
  }
];

const navIcons = [
  { icon: FiHome,     to: "hero",      label: "Home" },
  { icon: FiUser,     to: "about",     label: "About" },
  { icon: FiStar,     to: "skills",    label: "Skills" },
  { icon: FiLayout,   to: "projects",  label: "Projects" },
  { icon: FiCalendar, to: "education", label: "Education" },
  { icon: FiActivity, to: "stats",     label: "Stats" },
  { icon: FiMail,     to: "contact",   label: "Contact" },
];

export default function ExploreWork({ darkMode }) {
  const isDark = !!darkMode;
  const navigate = useNavigate();

  const cardStyle = {
    background: isDark ? "rgba(10, 10, 15, 0.4)" : "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(12px)",
    borderRadius: "20px",
    border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"}`,
    padding: "2rem",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const titleColor = "#2DD4BF"; // Teal from the image

  return (
    <section 
      id="explore-work" 
      style={{ 
        padding: "6rem 0 10rem", 
        background: "transparent",
        position: "relative",
        zIndex: 10
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
        
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ 
            fontSize: "clamp(2.5rem, 5vw, 4rem)", 
            fontWeight: 800, 
            textAlign: "center", 
            marginBottom: "4rem",
            background: `linear-gradient(130deg, ${titleColor}, #22D3EE)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-0.02em"
          }}
        >
          Explore My Work
        </motion.h2>

        {/* Cards Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
          gap: "1.5rem" 
        }}>
          
          {/* Card 1: About */}
          <motion.div 
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div style={cardStyle}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: titleColor, letterSpacing: "0.1em" }}>ABOUT</span>
                <FiArrowRight color={titleColor} />
              </div>
              <p style={{ fontSize: "1rem", lineHeight: "1.7", color: isDark ? "#A1A1AA" : "#4B5563", margin: 0 }}>
                A Computer Science student at Maharaja Surajmal Institute of Technology with a strong foundation in full-stack development and AI systems engineering.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Experience */}
          <motion.div 
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div style={cardStyle}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: titleColor, letterSpacing: "0.1em" }}>RECENT EXPERIENCE</span>
                <FiArrowRight color={titleColor} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {experience.map((exp, i) => (
                  <div key={i}>
                    <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: isDark ? "#F4F4F5" : "#1F2937", margin: "0 0 0.25rem 0" }}>
                      {exp.title}
                    </h4>
                    <p style={{ fontSize: "0.75rem", color: isDark ? "#71717A" : "#6B7280", margin: 0 }}>
                      {exp.company} • {exp.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 3: Tech Stack */}
          <motion.div 
            whileHover={{ y: -5, boxShadow: "0 8px 32px rgba(45, 212, 191, 0.15)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => navigate("/skills")}
            style={{ cursor: "pointer" }}
          >
            <div style={cardStyle}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: titleColor, letterSpacing: "0.1em" }}>TECH STACK</span>
                <FiArrowRight color={titleColor} />
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                {techStack.map((tech, i) => (
                  <span 
                    key={i}
                    style={{ 
                      padding: "0.5rem 1rem", 
                      borderRadius: "100px", 
                      background: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.03)",
                      border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.06)"}`,
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      color: isDark ? "#D4D4D8" : "#374151"
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Floating Navbar (Dock) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ 
            marginTop: "6rem",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "1.25rem", 
            padding: "0.75rem 1.5rem",
            background: "rgba(10, 10, 10, 0.85)",
            backdropFilter: "blur(20px)",
            borderRadius: "100px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)"
          }}>
            {navIcons.map((item, i) => {
              if (item.to === "skills") {
                return (
                  <RouterLink
                    key={i}
                    to="/skills"
                    className="dock-item"
                    style={{ 
                      cursor: "pointer", 
                      position: "relative",
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    <item.icon size={20} color="#71717A" />
                  </RouterLink>
                );
              }
              return (
                <ScrollLink
                  key={i}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="dock-item"
                  style={{ 
                    cursor: "pointer", 
                    position: "relative",
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <item.icon size={20} color={i === 0 ? "#2DD4BF" : "#71717A"} />
                  {i === 0 && (
                    <div style={{ 
                      position: "absolute", 
                      bottom: "-6px", 
                      left: "50%", 
                      transform: "translateX(-50%)",
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "#2DD4BF"
                    }} />
                  )}
                </ScrollLink>
              );
            })}
          </div>
        </motion.div>

      </div>

      <style>{`
        .dock-item:hover svg {
          color: #fff !important;
          transition: color 0.2s ease;
        }
      `}</style>
    </section>
  );
}
