import { TypeAnimation } from "react-type-animation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiDownload, FiGithub, FiArrowRight } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";
import profilePhoto from "../../assets/Gemini_Generated_Image_ufqljnufqljnufql (1).jpg";

const YOUR_NAME_LINE1 = "Simerjeet";
const YOUR_NAME_LINE2 = "Singh";
const GITHUB_URL = "https://github.com/prince545";
const CV_URL = "/your-cv.pdf";

const ROLES = [
  "Full-Stack Developer", 1500,
  "ML Engineer", 1500,
  "Community Builder", 1500,
  "Problem Solver", 1500,
];

const STATS = [
  { value: "15K+", label: "Community" },
  { value: "50+",  label: "Events led" },
  { value: "3+",   label: "Years coding" },
];

const CARDS = [
  {
    tag: "About",
    content: (isDark) => (
      <p style={{
        fontSize: "0.88rem", lineHeight: 1.75, fontWeight: 300,
        color: isDark ? "#94a3b8" : "#64748b", margin: 0,
      }}>
        A Computer Science student at Maharaja Surajmal Institute of Technology
        with a strong foundation in full-stack development and ML engineering.
      </p>
    ),
    link: "about",
  },
  {
    tag: "View Projects",
    content: (isDark) => (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <p style={{
          fontSize: "0.88rem", lineHeight: 1.75, fontWeight: 300,
          color: isDark ? "#94a3b8" : "#64748b", margin: 0,
        }}>
          Explore my recent work, including full-stack applications, machine learning models, and open-source contributions.
        </p>
      </div>
    ),
    link: "projects",
  },
  {
    tag: "Tech Stack",
    content: (isDark) => (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {["JavaScript", "React.js", "Tailwind CSS", "RESTful APIs", "Git", "GitHub", "Python", "Node.js"].map((t) => (
          <span key={t} style={{
            padding: "0.28rem 0.75rem",
            borderRadius: 50,
            border: `1px solid ${isDark ? "rgba(59,130,246,0.22)" : "rgba(59,130,246,0.18)"}`,
            background: isDark ? "rgba(59,130,246,0.06)" : "rgba(59,130,246,0.04)",
            fontSize: "0.72rem", fontWeight: 600,
            color: isDark ? "#93c5fd" : "#2563eb",
            letterSpacing: "0.02em",
          }}>
            {t}
          </span>
        ))}
      </div>
    ),
    link: "skills",
  },
];

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const fadeOnly = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, delay },
});

export default function Hero({ darkMode }) {
  const isDark  = !!darkMode;
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Cards slide up as user scrolls into the bottom of the hero
  const cardsY   = useTransform(scrollYProgress, [0, 0.25], ["100px", "0px"]);
  const cardsOp  = useTransform(scrollYProgress, [0, 0.2],  [0, 1]);

  const text1   = isDark ? "#f8fafc" : "#0f172a";
  const text2   = isDark ? "#94a3b8" : "#64748b";
  const textMid = isDark ? "#cbd5e1" : "#334155";
  const border  = isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.10)";
  const pageBg  = isDark ? "#050507" : "#f4f6f9";
  const cardBg  = isDark ? "rgba(10,12,18,0.85)" : "rgba(255,255,255,0.9)";
  const cardBorder = isDark ? "rgba(59,130,246,0.15)" : "rgba(15,23,42,0.09)";

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingBottom: "8rem",
        overflow: "hidden",
        background: "transparent",
      }}
    >
      {/* Ambient glows */}
      <div style={{
        position:"absolute",top:"-18%",right:"-12%",zIndex:0,
        width:680,height:680,borderRadius:"50%",pointerEvents:"none",
        background:"radial-gradient(circle,rgba(59,130,246,0.10) 0%,transparent 68%)",
      }}/>
      <div style={{
        position:"absolute",bottom:"-22%",left:"-10%",zIndex:0,
        width:520,height:520,borderRadius:"50%",pointerEvents:"none",
        background:"radial-gradient(circle,rgba(99,102,241,0.07) 0%,transparent 65%)",
      }}/>

      {/* Dot grid */}
      {isDark && (
        <div style={{
          position:"absolute",inset:0,opacity:0.15,zIndex:0,pointerEvents:"none",
          backgroundImage:"radial-gradient(rgba(255,255,255,0.5) 1px,transparent 1px)",
          backgroundSize:"32px 32px",
        }}/>
      )}

      {/* ── Main content ─────────────────────────────────────── */}
      <div
        className="hero-grid"
        style={{
          position:"relative",zIndex:1,
          flex: 1,
          maxWidth:1280,width:"100%",margin:"0 auto",
          padding:"7rem 2rem 2rem",
          display:"grid",
          gridTemplateColumns:"1fr auto",
          alignItems:"center",
          gap:"5rem",
        }}
      >
        {/* LEFT */}
        <div>
          {/* Availability pill */}
          <motion.div {...fadeOnly(0.1)} style={{marginBottom:"2.75rem"}}>
            <span style={{
              display:"inline-flex",alignItems:"center",gap:"0.55rem",
              padding:"0.35rem 1rem 0.35rem 0.7rem",
              borderRadius:50,
              border:`1px solid ${isDark?"rgba(59,130,246,0.28)":"rgba(59,130,246,0.22)"}`,
              background:isDark?"rgba(59,130,246,0.06)":"rgba(59,130,246,0.05)",
              fontSize:"0.72rem",fontWeight:700,letterSpacing:"0.05em",color:"#3b82f6",
            }}>
              <span style={{
                width:7,height:7,borderRadius:"50%",background:"#22c55e",
                boxShadow:"0 0 0 3px rgba(34,197,94,0.2)",display:"inline-block",
                animation:"hpulse 2.4s ease infinite",
              }}/>
              Available for opportunities
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p {...up(0.18)} style={{
            fontFamily:"monospace",fontSize:"0.95rem",
            letterSpacing:"0.1em",color:"#3b82f6",
            marginBottom:"0.75rem",fontWeight:600,
          }}>
            नमस्ते! I'm
          </motion.p>

          {/* Name */}
          <div style={{marginBottom:"1.75rem",lineHeight:0.9}}>
            <motion.div initial={{opacity:0,x:-36}} animate={{opacity:1,x:0}} transition={{duration:0.8,delay:0.22,ease:[0.22,1,0.36,1]}}>
              <span style={{
                display:"block",
                fontSize:"clamp(3rem,8.5vw,7.2rem)",
                fontWeight:900,letterSpacing:"-0.045em",color:text1,
              }}>
                {YOUR_NAME_LINE1}
              </span>
            </motion.div>
            <motion.div initial={{opacity:0,x:-36}} animate={{opacity:1,x:0}} transition={{duration:0.8,delay:0.30,ease:[0.22,1,0.36,1]}}>
              <span style={{
                display:"block",
                fontSize:"clamp(3rem,8.5vw,7.2rem)",
                fontWeight:900,letterSpacing:"-0.045em",
                color:"transparent",
                WebkitTextStroke:`2.5px ${isDark?"rgba(255,255,255,0.45)":"rgba(15,23,42,0.35)"}`,
              }}>
                {YOUR_NAME_LINE2}
              </span>
            </motion.div>
          </div>

          {/* Role */}
          <motion.div {...up(0.42)} style={{
            display:"flex",alignItems:"center",flexWrap:"wrap",
            gap:"0.45rem",marginBottom:"1.75rem",minHeight:"2.4rem",
          }}>
            <span style={{fontSize:"clamp(1rem,2.6vw,1.4rem)",fontWeight:300,color:text2}}>
              I build
            </span>
            <TypeAnimation
              sequence={ROLES}
              wrapper="span"
              speed={54}
              repeat={Infinity}
              style={{
                fontSize:"clamp(1rem,2.6vw,1.4rem)",
                fontWeight:700,letterSpacing:"-0.02em",
                background:"linear-gradient(130deg,#3b82f6 0%,#818cf8 100%)",
                WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",
              }}
            />
          </motion.div>

          {/* Bio */}
          <motion.p {...up(0.52)} style={{
            fontSize:"1rem",lineHeight:1.8,fontWeight:300,
            color:text2,maxWidth:460,marginBottom:"2.75rem",
          }}>
            CS student at MSIT · Founder of{" "}
            <span style={{color:textMid,fontWeight:600}}>Geek Room</span>
            {" "}· GDG Lead. I craft full-stack applications and AI systems — and love the craft of building things that matter.
          </motion.p>

          {/* CTAs */}
          <motion.div {...up(0.62)} style={{
            display:"flex",flexWrap:"wrap",
            gap:"0.875rem",alignItems:"center",marginBottom:"3.5rem",
          }}>
            <a href={CV_URL} download style={{
              display:"inline-flex",alignItems:"center",gap:"0.5rem",
              padding:"0.82rem 1.9rem",borderRadius:50,
              background:"linear-gradient(130deg,#3b82f6,#6366f1)",
              color:"#fff",fontSize:"0.84rem",fontWeight:700,letterSpacing:"0.02em",
              textDecoration:"none",boxShadow:"0 6px 28px rgba(59,130,246,0.3)",
              transition:"transform 0.2s,box-shadow 0.2s",
            }}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 10px 36px rgba(59,130,246,0.46)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="0 6px 28px rgba(59,130,246,0.3)";}}
            >
              <FiDownload size={15}/> Download CV
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" style={{
              display:"inline-flex",alignItems:"center",gap:"0.5rem",
              padding:"0.82rem 1.9rem",borderRadius:50,
              border:`1.5px solid ${border}`,color:textMid,
              fontSize:"0.84rem",fontWeight:700,letterSpacing:"0.02em",
              textDecoration:"none",background:"transparent",
              transition:"border-color 0.2s,color 0.2s,background 0.2s",
            }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(59,130,246,0.45)";e.currentTarget.style.color="#3b82f6";e.currentTarget.style.background="rgba(59,130,246,0.05)";}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor=border;e.currentTarget.style.color=textMid;e.currentTarget.style.background="transparent";}}
            >
              <FiGithub size={15}/> GitHub
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeOnly(0.85)} style={{
            display:"flex",alignItems:"center",gap:"2.25rem",
            paddingTop:"2.25rem",borderTop:`1px solid ${border}`,
          }}>
            {STATS.map((s,i)=>(
              <div key={i}>
                <div style={{
                  fontSize:"1.6rem",fontWeight:900,letterSpacing:"-0.03em",lineHeight:1,
                  background:"linear-gradient(130deg,#3b82f6,#818cf8)",
                  WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",
                }}>
                  {s.value}
                </div>
                <div style={{
                  fontSize:"0.68rem",fontWeight:600,letterSpacing:"0.09em",
                  textTransform:"uppercase",color:text2,marginTop:"0.25rem",
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT – Photo */}
        <motion.div
          className="hero-photo-wrap"
          initial={{opacity:0,scale:0.88}}
          animate={{opacity:1,scale:1}}
          transition={{duration:1.0,delay:0.15,ease:[0.22,1,0.36,1]}}
          style={{
            position:"relative",
            width:"clamp(260px,28vw,390px)",
            height:"clamp(260px,28vw,390px)",
            flexShrink:0,
          }}
        >
          <div style={{
            position:"absolute",inset:"-13%",borderRadius:"50%",
            border:`1px solid ${isDark?"rgba(59,130,246,0.14)":"rgba(59,130,246,0.11)"}`,
            animation:"orbit 20s linear infinite",pointerEvents:"none",
          }}>
            <div style={{
              position:"absolute",top:"7%",left:"50%",
              width:8,height:8,borderRadius:"50%",
              background:"#3b82f6",boxShadow:"0 0 10px rgba(59,130,246,0.8)",
              transform:"translate(-50%,-50%)",
            }}/>
          </div>
          <div style={{
            position:"absolute",inset:"-4%",borderRadius:"50%",
            border:`1px dashed ${isDark?"rgba(255,255,255,0.05)":"rgba(15,23,42,0.07)"}`,
            animation:"orbit 34s linear infinite reverse",pointerEvents:"none",
          }}/>
          <div style={{
            width:"100%",height:"100%",borderRadius:"50%",padding:3,
            background:"linear-gradient(140deg,#3b82f6 0%,#818cf8 55%,#f59e0b 100%)",
            boxShadow:isDark
              ?"0 0 72px rgba(59,130,246,0.22),0 0 32px rgba(99,102,241,0.14)"
              :"0 20px 72px rgba(59,130,246,0.18),0 8px 28px rgba(15,23,42,0.08)",
          }}>
            <div style={{
              width:"100%",height:"100%",borderRadius:"50%",overflow:"hidden",
              border:`4px solid ${isDark?"#050507":"#ffffff"}`,
              background:isDark?"#0f172a":"#e2e8f0",
            }}>
              <img src={profilePhoto} alt="Simerjeet Singh"
                style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
            </div>
          </div>

          {/* Badge bottom-right */}
          <motion.div
            initial={{opacity:0,y:10,scale:0.7}} animate={{opacity:1,y:0,scale:1}}
            transition={{delay:0.9,duration:0.55,ease:[0.22,1,0.36,1]}}
            style={{
              position:"absolute",bottom:"4%",right:"-6%",
              padding:"0.6rem 1rem",borderRadius:14,
              background:isDark?"rgba(8,8,12,0.92)":"rgba(255,255,255,0.96)",
              border:`1px solid ${border}`,boxShadow:"0 8px 28px rgba(0,0,0,0.18)",
              backdropFilter:"blur(14px)",
              display:"flex",alignItems:"center",gap:"0.5rem",whiteSpace:"nowrap",
            }}
          >
            <span style={{fontSize:"1.05rem"}}>👨‍💻</span>
            <div>
              <div style={{fontSize:"0.7rem",fontWeight:800,color:text1}}>Full-Stack · AI</div>
              <div style={{fontSize:"0.62rem",color:text2,fontWeight:500}}>MSIT · GDG Lead</div>
            </div>
          </motion.div>

          {/* Badge top-left */}
          <motion.div
            initial={{opacity:0,y:-10,scale:0.7}} animate={{opacity:1,y:0,scale:1}}
            transition={{delay:1.05,duration:0.55,ease:[0.22,1,0.36,1]}}
            style={{
              position:"absolute",top:"6%",left:"-14%",
              padding:"0.5rem 0.9rem",borderRadius:12,
              background:isDark?"rgba(8,8,12,0.92)":"rgba(255,255,255,0.96)",
              border:`1px solid ${isDark?"rgba(59,130,246,0.22)":"rgba(59,130,246,0.18)"}`,
              boxShadow:"0 4px 18px rgba(59,130,246,0.14)",
              backdropFilter:"blur(14px)",
              display:"flex",alignItems:"center",gap:"0.45rem",whiteSpace:"nowrap",
            }}
          >
            <span style={{
              width:7,height:7,borderRadius:"50%",background:"#22c55e",
              boxShadow:"0 0 0 3px rgba(34,197,94,0.2)",flexShrink:0,
              animation:"hpulse 2.4s ease infinite",display:"inline-block",
            }}/>
            <span style={{fontSize:"0.68rem",fontWeight:700,color:text1}}>Open to work</span>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Preview Cards ─────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 18, delay: 1.2 }}
      >
        <div style={{
          position: "relative", zIndex: 3,
          maxWidth: 1280, margin: "0 auto",
          padding: "0 2rem 3rem",
        }}>
          <div className="hero-cards-grid">
            {CARDS.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.22 } }}
                style={{
                  borderRadius: 20,
                  border: `1px solid ${cardBorder}`,
                  background: cardBg,
                  backdropFilter: "blur(20px)",
                  padding: "1.5rem 1.75rem",
                  boxShadow: isDark
                    ? "0 16px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(59,130,246,0.06)"
                    : "0 8px 32px rgba(15,23,42,0.08), 0 0 0 1px rgba(15,23,42,0.04)",
                  cursor: "pointer",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                onHoverStart={e => {
                  if (e.currentTarget?.style) {
                    e.currentTarget.style.borderColor = "rgba(59,130,246,0.35)";
                    e.currentTarget.style.boxShadow = isDark
                      ? "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(59,130,246,0.15)"
                      : "0 12px 40px rgba(59,130,246,0.12)";
                  }
                }}
                onHoverEnd={e => {
                  if (e.currentTarget?.style) {
                    e.currentTarget.style.borderColor = cardBorder;
                    e.currentTarget.style.boxShadow = isDark
                      ? "0 16px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(59,130,246,0.06)"
                      : "0 8px 32px rgba(15,23,42,0.08)";
                  }
                }}
              >
                {/* Card header */}
                {card.link === "skills" || card.link === "projects" ? (
                  <div
                    onClick={() => navigate(`/${card.link}`)}
                    style={{
                      display: "flex", alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1.1rem",
                      cursor: "pointer",
                    }}
                  >
                    <span style={{
                      fontFamily: "monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      color: "#3b82f6",
                    }}>
                      {card.tag}
                    </span>
                    <FiArrowRight
                      size={14}
                      color="#3b82f6"
                      style={{ opacity: 0.7 }}
                    />
                  </div>
                ) : (
                  <ScrollLink
                    to={card.link}
                    smooth duration={600} offset={-70}
                    style={{
                      display: "flex", alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1.1rem",
                      cursor: "pointer",
                    }}
                  >
                    <span style={{
                      fontFamily: "monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      color: "#3b82f6",
                    }}>
                      {card.tag}
                    </span>
                    <FiArrowRight
                      size={14}
                      color="#3b82f6"
                      style={{ opacity: 0.7 }}
                    />
                  </ScrollLink>
                )}

                {/* Card body */}
                {card.content(isDark)}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div style={{
        position:"absolute",bottom:0,left:0,right:0,
        height:80,zIndex:2,pointerEvents:"none",
        background:`linear-gradient(to bottom,transparent,${pageBg})`,
      }}/>

      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes hpulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(34,197,94,0.20); }
          50%      { box-shadow: 0 0 0 6px rgba(34,197,94,0.06); }
        }

        .hero-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        @media (max-width: 900px) {
          .hero-cards-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 760px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            padding-top: 6.5rem !important;
            text-align: center;
          }
          .hero-photo-wrap {
            width: clamp(200px,62vw,280px) !important;
            height: clamp(200px,62vw,280px) !important;
            margin: 0 auto;
            order: -1;
          }
          .hero-grid > div:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}