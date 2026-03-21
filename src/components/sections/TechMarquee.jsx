import {
  SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript,
  SiNodedotjs, SiExpress, SiPython, SiFlask, SiFastapi,
  SiMongodb, SiPostgresql, SiMysql,
  SiTensorflow, SiPytorch, SiScikitlearn, SiOpencv, SiJupyter,
  SiDocker, SiVercel, SiGit, SiGithub,
  SiPostman, SiLinux, SiFigma, SiGooglecolab,
  SiHtml5, SiCss, SiBootstrap, SiOpenai, SiFirebase,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";

const TECHS = [
  { icon: <SiReact />,       name: "React",       color: "#61DAFB" },
  { icon: <SiNextdotjs />,   name: "Next.js",     color: "#ffffff" },
  { icon: <SiJavascript />,  name: "JavaScript",  color: "#F7DF1E" },
  { icon: <SiTypescript />,  name: "TypeScript",  color: "#3178C6" },
  { icon: <SiTailwindcss />, name: "Tailwind",    color: "#38BDF8" },
  { icon: <SiHtml5 />,       name: "HTML5",       color: "#E34F26" },
  { icon: <SiCss />,        name: "CSS3",        color: "#1572B6" },
  { icon: <SiNodedotjs />,   name: "Node.js",     color: "#68A063" },
  { icon: <SiExpress />,     name: "Express",     color: "#aaaaaa" },
  { icon: <SiPython />,      name: "Python",      color: "#FFD43B" },
  { icon: <SiFastapi />,     name: "FastAPI",     color: "#009688" },
  { icon: <SiFlask />,       name: "Flask",       color: "#aaaaaa" },
  { icon: <SiMongodb />,     name: "MongoDB",     color: "#4DB33D" },
  { icon: <SiPostgresql />,  name: "PostgreSQL",  color: "#336791" },
  { icon: <SiMysql />,       name: "MySQL",       color: "#4479A1" },
  { icon: <SiFirebase />,    name: "Firebase",    color: "#FFCA28" },
  { icon: <SiTensorflow />,  name: "TensorFlow",  color: "#FF6F00" },
  { icon: <SiPytorch />,     name: "PyTorch",     color: "#EE4C2C" },
  { icon: <SiScikitlearn />, name: "Sklearn",     color: "#F7931E" },
  { icon: <SiOpencv />,      name: "OpenCV",      color: "#5C3EE8" },
  { icon: <SiJupyter />,     name: "Jupyter",     color: "#F37626" },
  { icon: <SiGooglecolab />, name: "Colab",       color: "#F9AB00" },
  { icon: <SiOpenai />,      name: "OpenAI",      color: "#aaaaaa" },
  { icon: <SiDocker />,      name: "Docker",      color: "#2496ED" },
  { icon: <SiVercel />,      name: "Vercel",      color: "#aaaaaa" },
  { icon: <SiGit />,         name: "Git",         color: "#F05032" },
  { icon: <SiGithub />,      name: "GitHub",      color: "#aaaaaa" },
  { icon: <SiPostman />,     name: "Postman",     color: "#FF6C37" },
  { icon: <SiLinux />,       name: "Linux",       color: "#FCC624" },
  { icon: <SiFigma />,       name: "Figma",       color: "#F24E1E" },
  { icon: <VscVscode />,     name: "VS Code",     color: "#007ACC" },
  { icon: <FaJava />,        name: "Java",        color: "#F89820" },
  { icon: <SiBootstrap />,   name: "Bootstrap",   color: "#7952B3" },
];

/* duplicate for seamless loop */
const ROW1 = [...TECHS, ...TECHS];

function MarqueeRow({ items, direction = "left", speed = 40, isDark }) {
  const duration = `${(items.length / 2) * speed * 0.12}s`;

  return (
    <div style={{
      overflow: "hidden",
      maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
    }}>
      <div
        className={direction === "left" ? "marquee-left" : "marquee-right"}
        style={{
          display: "flex",
          gap: "1rem",
          width: "max-content",
          animationDuration: duration,
        }}
      >
        {items.map((tech, i) => (
          <div
            key={i}
            title={tech.name}
            style={{
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              width: 72,
              height: 72,
              borderRadius: 18,
              border: `1px solid ${isDark ? "rgba(255,255,255,0.07)" : "rgba(15,23,42,0.08)"}`,
              background: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.85)",
              boxShadow: isDark ? "0 4px 16px rgba(0,0,0,0.3)" : "0 2px 12px rgba(15,23,42,0.06)",
              transition: "transform 0.2s, border-color 0.2s, box-shadow 0.2s",
              cursor: "default",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-4px) scale(1.08)";
              e.currentTarget.style.borderColor = tech.color + "66";
              e.currentTarget.style.boxShadow = `0 8px 28px ${tech.color}33`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.07)" : "rgba(15,23,42,0.08)";
              e.currentTarget.style.boxShadow = isDark ? "0 4px 16px rgba(0,0,0,0.3)" : "0 2px 12px rgba(15,23,42,0.06)";
            }}
          >
            <span style={{
              fontSize: "1.6rem",
              color: tech.color === "#ffffff" || tech.color === "#aaaaaa"
                ? (isDark ? "#e2e8f0" : "#334155")
                : tech.color,
              lineHeight: 1,
              display: "flex",
            }}>
              {tech.icon}
            </span>
            <span style={{
              fontSize: "0.55rem",
              fontWeight: 700,
              letterSpacing: "0.04em",
              color: isDark ? "#475569" : "#94a3b8",
              textAlign: "center",
              lineHeight: 1,
              maxWidth: 60,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}>
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechMarquee({ darkMode }) {
  const isDark = !!darkMode;

  return (
    <section
      id="tech-marquee"
      style={{
        position: "relative",
        padding: "5rem 0",
        overflow: "hidden",
        background: isDark ? "transparent" : "#f4f6f9",
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: 800, height: 300, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "2.75rem" }}>
        <span style={{
          fontFamily: "monospace",
          fontSize: "0.68rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "#3b82f6",
          display: "inline-block",
          marginBottom: "0.75rem",
        }}>
          / Technologies
        </span>
        <h2 style={{
          fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
          fontWeight: 900,
          letterSpacing: "-0.03em",
          color: isDark ? "#f1f5f9" : "#0f172a",
          margin: 0,
        }}>
          Technology{" "}
          <span style={{
            fontStyle: "italic",
            background: "linear-gradient(130deg, #3b82f6, #818cf8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Stack
          </span>
        </h2>
      </div>

      {/* Single centered row — scrolls right to left */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <MarqueeRow items={ROW1} direction="left" speed={38} isDark={isDark} />
      </div>

      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .marquee-left {
          animation: marquee-left linear infinite;
        }
        .marquee-right {
          animation: marquee-right linear infinite;
        }
        .marquee-left:hover,
        .marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
