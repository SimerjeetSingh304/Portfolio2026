import { useRef, useState } from "react";

const educationData = [
  {
    id: 1,
    degree: "Senior Secondary",
    field: "Non Medical (2019 - 2021)",
    institution: "Kendriya Vidyalaya Sector - 5",
  },
  {
    id: 2,
    degree: "Bachelor of Technology",
    field: "AIML (2021 - 2025)",
    institution: "Guru Tegh Bahadur Institute of Technology",
  },
];

function Card({ edu, darkMode }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const isDark = !!darkMode;

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 14;
    const y = -((e.clientY - r.top) / r.height - 0.5) * 14;
    setTilt({ x: y, y: x });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
      style={{
        border: `1px solid ${
          isDark ? "rgba(255,255,255,0.2)" : "rgba(15,23,42,0.15)"
        }`,
        borderRadius: "18px",
        padding: "32px 40px",
        textAlign: "center",
        cursor: "default",
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${hovered ? "-6px" : "0"})`,
        transition: "transform 0.15s ease, box-shadow 0.3s, border-color 0.3s, background 0.3s",
        boxShadow: hovered ? "0 20px 60px rgba(0,0,0,0.7)" : "none",
        background: hovered
          ? isDark
            ? "rgba(255,255,255,0.04)"
            : "rgba(15,23,42,0.03)"
          : "transparent",
      }}
    >
      <h3 style={{
        margin: 0,
        fontSize: "1.45rem",
        fontWeight: 700,
        color: isDark ? "#ffffff" : "#0f172a",
        fontFamily: "'Segoe UI', sans-serif",
      }}>
        {edu.degree}
      </h3>
      <p style={{
        margin: "10px 0 6px",
        fontSize: "0.95rem",
        color: isDark ? "rgba(255,255,255,0.45)" : "rgba(15,23,42,0.62)",
        fontFamily: "'Segoe UI', sans-serif",
      }}>
        {edu.field}
      </p>
      <p style={{
        margin: 0,
        fontSize: "0.9rem",
        color: isDark ? "rgba(255,255,255,0.3)" : "rgba(15,23,42,0.45)",
        fontFamily: "'Segoe UI', sans-serif",
        fontStyle: "italic",
      }}>
        {edu.institution}
      </p>
    </div>
  );
}

function Constellation({ darkMode }) {
  const isDark = !!darkMode;
  const lineStroke = isDark ? "rgba(255,255,255,0.1)" : "rgba(15,23,42,0.08)";
  const dotFill = isDark ? "rgba(255,255,255,0.3)" : "rgba(15,23,42,0.22)";

  const dots = [
    [60,40],[150,120],[300,60],[500,30],[700,90],[900,50],[1100,110],[1300,40],[1450,80],
    [80,300],[250,280],[420,350],[600,260],[800,320],[1000,270],[1200,340],[1400,290],
    [100,500],[350,520],[550,480],[750,540],[950,490],[1150,530],[1350,500],
    [200,700],[400,680],[650,720],[850,690],[1050,730],[1250,700],
    [50,150],[180,200],[330,170],[480,210],[630,160],[780,200],[930,170],[1080,210],
    [1230,160],[1380,200],[1100,400],[950,430],[800,410],[650,440],[500,415],
  ];
  const lines = [
    [60,40,150,120],[150,120,300,60],[300,60,500,30],[500,30,700,90],
    [700,90,900,50],[900,50,1100,110],[1100,110,1300,40],[1300,40,1450,80],
    [80,300,250,280],[250,280,420,350],[420,350,600,260],[600,260,800,320],
    [800,320,1000,270],[1000,270,1200,340],[1200,340,1400,290],
    [60,40,80,300],[150,120,250,280],[300,60,420,350],[700,90,600,260],
    [900,50,800,320],[1100,110,1000,270],[1300,40,1200,340],
    [80,300,100,500],[250,280,350,520],[600,260,550,480],[800,320,750,540],
    [1000,270,950,490],[1200,340,1150,530],[1400,290,1350,500],
    [100,500,200,700],[350,520,400,680],[550,480,650,720],[750,540,850,690],
    [1100,400,950,430],[950,430,800,410],[800,410,650,440],[650,440,500,415],
    [1100,110,1100,400],[800,320,800,410],[600,260,650,440],
  ];

  return (
    <svg style={{ position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none" }}>
      {lines.map(([x1,y1,x2,y2],i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={lineStroke} strokeWidth="1"/>
      ))}
      {dots.map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="2.5" fill={dotFill}/>
      ))}
    </svg>
  );
}

export default function Education({ darkMode }) {
  const isDark = !!darkMode;
  const buttonBorderBase = isDark ? "rgba(255,255,255,0.45)" : "rgba(15,23,42,0.35)";
  const buttonHoverBg = isDark ? "rgba(255,255,255,0.07)" : "rgba(15,23,42,0.05)";
  const buttonHoverBorder = isDark ? "rgba(255,255,255,0.85)" : "rgba(15,23,42,0.75)";
  const sectionBg = isDark
    ? "transparent"
    : "linear-gradient(135deg, rgba(248,250,252,1) 0%, rgba(219,234,254,0.65) 45%, rgba(226,232,240,0.7) 100%)";

  return (
    <section style={{
      position: "relative",
      minHeight: "100vh",
      background: sectionBg,
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      padding: "60px 40px",
    }}>
      <Constellation darkMode={isDark} />

      <div style={{
        position: "relative",
        zIndex: 1,
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        gap: "80px",
      }}>

        {/* Left illustration */}
        <div style={{
          flexShrink: 0,
          width: "300px",
          height: "300px",
          borderRadius: "24px",
          background: isDark ? "transparent" : "rgba(255,255,255,0.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "7rem",
          boxShadow: "none",
          border: `1px solid ${isDark ? "rgba(255,255,255,0.12)" : "rgba(15,23,42,0.12)"}`,
          color: isDark ? "#ffffff" : "#0f172a",
        }}>
          📖
        </div>

        {/* Right content */}
        <div style={{ flex: 1 }}>
          <h2 style={{
            margin: "0 0 28px",
            fontSize: "2.8rem",
            fontWeight: 700,
            color: isDark ? "#ffffff" : "#0f172a",
            fontFamily: "'Segoe UI', sans-serif",
            textAlign: "right",
          }}>
            Education
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {educationData.map((edu) => (
              <Card key={edu.id} edu={edu} darkMode={isDark} />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "44px" }}>
            <button
              style={{
                background: "transparent",
                border: `2px solid ${buttonBorderBase}`,
                borderRadius: "50px",
                color: isDark ? "#fff" : "#0f172a",
                fontSize: "1rem",
                fontWeight: 600,
                padding: "13px 34px",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "'Segoe UI', sans-serif",
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = buttonHoverBg;
                e.currentTarget.style.borderColor = buttonHoverBorder;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = buttonBorderBase;
              }}
            >
              Contact Me
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}