// import { useState, useEffect, useRef } from "react";
// import { Link as ScrollLink } from "react-scroll";
// import { Link as RouterLink, useLocation } from "react-router-dom";
// import {
//   FiHome, FiFolder, FiGithub, FiLinkedin, FiTerminal,
//   FiSun, FiMoon, FiMail, FiLayers
// } from "react-icons/fi";
// import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";

// const dockLinks = [
//   { label: "Home",      to: "hero",      type: "scroll", icon: FiHome },
//   { label: "Skills",    to: "skills",    type: "scroll", icon: FiTerminal },
//   { label: "Projects",  to: "/projects", type: "router", icon: FiFolder },
//   { label: "About",     to: "about",     type: "scroll", icon: FiLayers },
//   { label: "Contact",   to: "contact",   type: "scroll", icon: FiMail },
// ];

// const externalLinks = [
//   { label: "GitHub",   href: "https://github.com/prince545",   icon: FiGithub },
//   { label: "LinkedIn", href: "https://linkedin.com", icon: FiLinkedin },
// ];

// /* ── Magnifying Dock Item ───────────────────────────────────────────────── */
// function DockItem({ children, label, mouseX, darkMode }) {
//   const ref = useRef(null);

//   const distance = useMotionValue(0);
//   const widthSync = useTransform(distance, [-120, 0, 120], [40, 52, 40]);
//   const width = useSpring(widthSync, { stiffness: 300, damping: 28 });

//   const [hovered, setHovered] = useState(false);

//   useEffect(() => {
//     return mouseX.on("change", (x) => {
//       if (!ref.current) return;
//       const rect = ref.current.getBoundingClientRect();
//       const center = rect.left + rect.width / 2;
//       distance.set(x - center);
//     });
//   }, [mouseX, distance]);

//   return (
//     <motion.div
//       ref={ref}
//       style={{ width }}
//       className="relative flex items-center justify-center"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {/* Tooltip */}
//       <AnimatePresence>
//         {hovered && (
//           <motion.span
//             initial={{ opacity: 0, y: 6, scale: 0.88 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 6, scale: 0.88 }}
//             transition={{ duration: 0.15 }}
//             className={`absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap pointer-events-none z-50
//               ${darkMode
//                 ? "bg-white/10 text-white backdrop-blur border border-white/10"
//                 : "bg-black/8 text-black backdrop-blur border border-black/8"
//               }`}
//           >
//             {label}
//           </motion.span>
//         )}
//       </AnimatePresence>
//       {children}
//     </motion.div>
//   );
// }

// /* ── Main Navbar ────────────────────────────────────────────────────────── */
// export default function Navbar({ darkMode, toggleDarkMode }) {
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("hero");
//   const location = useLocation();
//   const isHome = location.pathname === "/";
//   const mouseX = useMotionValue(Infinity);

//   /* Scroll threshold */
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   /* Shared render: dock icon style */
//   const renderDockIcon = (link, mouseX) => {
//     const Icon = link.icon;
//     const isActive = activeSection === link.to;

//     const iconClass = `relative w-full h-full flex items-center justify-center rounded-full transition-colors duration-200 cursor-pointer
//       ${isActive
//         ? darkMode ? "text-white bg-white/15" : "text-black bg-black/10"
//         : darkMode ? "text-slate-400 hover:text-white hover:bg-white/10" : "text-slate-500 hover:text-black hover:bg-black/5"
//       }`;

//     const inner = <Icon size={19} strokeWidth={2} />;

//     if (link.type === "router") {
//       return (
//         <DockItem label={link.label} mouseX={mouseX} darkMode={darkMode}>
//           <RouterLink to={link.to} className={iconClass} style={{ width: "100%", height: 44 }}>
//             {inner}
//             {isActive && (
//               <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full
//                 ${darkMode ? "bg-[#4F8EF7]" : "bg-[#4F8EF7]"}`}
//               />
//             )}
//           </RouterLink>
//         </DockItem>
//       );
//     }

//     return (
//       <DockItem label={link.label} mouseX={mouseX} darkMode={darkMode}>
//         <ScrollLink
//           to={link.to}
//           smooth duration={600} offset={-70}
//           spy onSetActive={() => setActiveSection(link.to)}
//           className={iconClass}
//           style={{ width: "100%", height: 44 }}
//         >
//           {inner}
//           {isActive && (
//             <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#4F8EF7]" />
//           )}
//         </ScrollLink>
//       </DockItem>
//     );
//   };

//   return (
//     <AnimatePresence mode="wait">
//       {!scrolled ? (
//         /* ── TOP HEADER (MINT PILL) ──────────────────────────────── */
//         <motion.nav
//           key="top-nav"
//           initial={{ y: -80, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: -80, opacity: 0 }}
//           transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//           className="fixed top-8 left-0 right-0 z-[100] flex justify-center pointer-events-none"
//           style={{ fontFamily: "'Syne', sans-serif" }}
//         >
//           <div
//             className="pointer-events-auto flex items-center gap-1 px-4 py-1.5 rounded-full border backdrop-blur-md"
//             style={{
//               background: "rgba(5, 5, 5, 0.4)",
//               borderColor: "rgba(180, 255, 220, 0.18)",
//               boxShadow: "0 0 24px rgba(100, 255, 180, 0.05), inset 0 0 12px rgba(100, 255, 180, 0.03)",
//             }}
//           >
//             {/* Nav Links */}
//             {[
//               { label: "About",   to: "about" },
//               { label: "Work",    to: "projects" },
//               { label: "Contact", to: "contact" },
//             ].map((link) => {
//               const isActive = activeSection === link.to;
//               const baseClass = `px-6 py-2 rounded-full text-[14px] font-semibold tracking-wide transition-all duration-300 cursor-pointer whitespace-nowrap
//                 ${isActive
//                   ? "text-[#b4ffdc] bg-[#b4ffdc]/10 shadow-[0_0_10px_rgba(180,255,220,0.1)]"
//                   : "text-[#b4ffdc]/65 hover:text-[#b4ffdc]/95 hover:bg-[#b4ffdc]/06"
//                 }`;

//               return (
//                 <ScrollLink
//                   key={link.label}
//                   to={link.to}
//                   smooth duration={600} offset={-70}
//                   spy onSetActive={() => setActiveSection(link.to)}
//                   className={baseClass}
//                 >
//                   {link.label}
//                 </ScrollLink>
//               );
//             })}
//           </div>

//           <style>{`
//             @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');
//           `}</style>
//         </motion.nav>
//       ) : (
//         /* ── BOTTOM DOCK ──────────────────────────────────────────── */
//         <motion.div
//           key="bottom-dock"
//           initial={{ y: 100, x: "-50%", opacity: 0 }}
//           animate={{ y: 0, x: "-50%", opacity: 1 }}
//           exit={{ y: 100, x: "-50%", opacity: 0 }}
//           transition={{ type: "spring", stiffness: 240, damping: 26 }}
//           className="fixed bottom-7 left-1/2 z-[100]"
//           onMouseMove={(e) => mouseX.set(e.clientX)}
//           onMouseLeave={() => mouseX.set(Infinity)}
//         >
//           <nav
//             className={`flex items-center gap-0.5 px-3 py-2 rounded-2xl transition-all duration-300
//               shadow-[0_12px_48px_rgba(0,0,0,0.35),0_2px_8px_rgba(0,0,0,0.15)]
//               ${darkMode
//                 ? "bg-[#0C0C0E]/85 backdrop-blur-2xl border border-white/[0.08]"
//                 : "bg-white/85 backdrop-blur-2xl border border-black/[0.07]"
//               }`}
//           >
//             {/* Nav icon links */}
//             {dockLinks.map((link) => (
//               <div key={link.label} className="flex items-center justify-center h-11 w-11">
//                 {renderDockIcon(link, mouseX)}
//               </div>
//             ))}

//             <div className={`w-px h-7 mx-2 ${darkMode ? "bg-white/10" : "bg-black/8"}`} />

//             {/* External icon links */}
//             {externalLinks.map((link) => (
//               <DockItem key={link.label} label={link.label} mouseX={mouseX} darkMode={darkMode}>
//                 <a
//                   href={link.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={{ width: "100%", height: 44 }}
//                   className={`flex items-center justify-center rounded-full transition-colors duration-200
//                     ${darkMode
//                       ? "text-slate-400 hover:text-white hover:bg-white/10"
//                       : "text-slate-500 hover:text-black hover:bg-black/5"
//                     }`}
//                 >
//                   <link.icon size={19} strokeWidth={2} />
//                 </a>
//               </DockItem>
//             ))}

//             <div className={`w-px h-7 mx-2 ${darkMode ? "bg-white/10" : "bg-black/8"}`} />

//             {/* Theme toggle */}
//             <DockItem label={darkMode ? "Light mode" : "Dark mode"} mouseX={mouseX} darkMode={darkMode}>
//               <button
//                 onClick={toggleDarkMode}
//                 aria-label="Toggle theme"
//                 style={{ width: "100%", height: 44 }}
//                 className={`flex items-center justify-center rounded-full transition-colors duration-200
//                   ${darkMode
//                     ? "text-amber-400 hover:bg-white/10"
//                     : "text-slate-500 hover:bg-black/5"
//                   }`}
//               >
//                 {darkMode ? <FiSun size={19} strokeWidth={2} /> : <FiMoon size={19} strokeWidth={2} />}
//               </button>
//             </DockItem>
//           </nav>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }
import { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  FiHome, FiFolder, FiGithub, FiLinkedin, FiTerminal,
  FiSun, FiMoon, FiMail, FiLayers
} from "react-icons/fi";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";

const dockLinks = [
  { label: "Home",      to: "/",         type: "router", icon: FiHome },
  { label: "Skills",    to: "/#skills",  type: "router", icon: FiTerminal },
  { label: "Projects",  to: "/projects", type: "router", icon: FiFolder },
  { label: "About",     to: "/about",    type: "router", icon: FiLayers },
  { label: "Contact",   to: "/contact",  type: "router", icon: FiMail },
];

const externalLinks = [
  { label: "GitHub",   href: "https://github.com/prince545",   icon: FiGithub },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FiLinkedin },
];

/* ── Magnifying Dock Item ───────────────────────────────────────────────── */
function DockItem({ children, label, mouseX, darkMode }) {
  const ref = useRef(null);

  const distance = useMotionValue(0);
  const widthSync = useTransform(distance, [-120, 0, 120], [40, 52, 40]);
  const width = useSpring(widthSync, { stiffness: 300, damping: 28 });

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    return mouseX.on("change", (x) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      distance.set(x - center);
    });
  }, [mouseX, distance]);

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="relative flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: 6, scale: 0.88 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.88 }}
            transition={{ duration: 0.15 }}
            className={`absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap pointer-events-none z-50
              ${darkMode
                ? "bg-white/10 text-white backdrop-blur border border-white/10"
                : "bg-black/8 text-black backdrop-blur border border-black/8"
              }`}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
      {children}
    </motion.div>
  );
}

/* ── Animated Pill Nav Link ─────────────────────────────────────────────── */
function PillNavLink({ link, activeSection, setActiveSection }) {
  const [hovered, setHovered] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === link.to;

  return (
    <RouterLink
      to={link.to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: "relative", cursor: "pointer", textDecoration: "none" }}
    >
      {/* Sliding background highlight */}
      <AnimatePresence>
        {(hovered || isActive) && (
          <motion.span
            layoutId="pill-highlight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "999px",
              background: isActive
                ? "rgba(180,255,220,0.10)"
                : "rgba(180,255,220,0.05)",
              boxShadow: isActive ? "0 0 12px rgba(180,255,220,0.12)" : "none",
              zIndex: 0,
            }}
          />
        )}
      </AnimatePresence>

      <span
        style={{
          position: "relative",
          zIndex: 1,
          display: "block",
          padding: "8px 24px",
          borderRadius: "999px",
          fontSize: "14px",
          fontWeight: 600,
          letterSpacing: "0.04em",
          color: isActive
            ? "#b4ffdc"
            : hovered
            ? "rgba(180,255,220,0.90)"
            : "rgba(180,255,220,0.55)",
          transition: "color 0.22s ease",
          whiteSpace: "nowrap",
        }}
      >
        {link.label}
      </span>
    </RouterLink>
  );
}

/* ── Main Navbar ────────────────────────────────────────────────────────── */
export default function Navbar({ darkMode, toggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const location = useLocation();
  const isHome = location.pathname === "/";
  const mouseX = useMotionValue(Infinity);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const renderDockIcon = (link, mouseX) => {
    const Icon = link.icon;
    const isActive = activeSection === link.to;

    const iconClass = `relative w-full h-full flex items-center justify-center rounded-full transition-colors duration-200 cursor-pointer
      ${isActive
        ? darkMode ? "text-white bg-white/15" : "text-black bg-black/10"
        : darkMode ? "text-slate-400 hover:text-white hover:bg-white/10" : "text-slate-500 hover:text-black hover:bg-black/5"
      }`;

    const inner = <Icon size={19} strokeWidth={2} />;

    if (link.type === "router") {
      return (
        <DockItem label={link.label} mouseX={mouseX} darkMode={darkMode}>
          <RouterLink to={link.to} className={iconClass} style={{ width: "100%", height: 44 }}>
            {inner}
            {isActive && (
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#4F8EF7]" />
            )}
          </RouterLink>
        </DockItem>
      );
    }

    return (
      <DockItem label={link.label} mouseX={mouseX} darkMode={darkMode}>
        <ScrollLink
          to={link.to}
          smooth duration={600} offset={-70}
          spy onSetActive={() => setActiveSection(link.to)}
          className={iconClass}
          style={{ width: "100%", height: 44 }}
        >
          {inner}
          {isActive && (
            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#4F8EF7]" />
          )}
        </ScrollLink>
      </DockItem>
    );
  };

  const topNavLinks = [
    { label: "About",   to: "/about" },
    { label: "Work",    to: "/projects" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <AnimatePresence mode="wait">
      {!scrolled ? (
        /* ── TOP HEADER (MINT PILL) ──────────────────────────────── */
        <motion.nav
          key="top-nav"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-8 left-0 right-0 z-[100] flex justify-center pointer-events-none"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          <div
            className="pointer-events-auto flex items-center gap-1 px-2 py-1.5 rounded-full border backdrop-blur-md"
            style={{
              background: "rgba(5, 5, 5, 0.55)",
              borderColor: "rgba(180, 255, 220, 0.18)",
              boxShadow:
                "0 0 32px rgba(100, 255, 180, 0.06), inset 0 0 16px rgba(100, 255, 180, 0.03)",
            }}
          >
            {topNavLinks.map((link) => (
              <PillNavLink
                key={link.label}
                link={link}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              />
            ))}
          </div>

          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');
          `}</style>
        </motion.nav>
      ) : (
        /* ── BOTTOM DOCK ──────────────────────────────────────────── */
        <motion.div
          key="bottom-dock"
          initial={{ y: 100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
          exit={{ y: 100, x: "-50%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 240, damping: 26 }}
          className="fixed bottom-7 left-1/2 z-[100]"
          onMouseMove={(e) => mouseX.set(e.clientX)}
          onMouseLeave={() => mouseX.set(Infinity)}
        >
          <nav
            className={`flex items-center gap-0.5 px-3 py-2 rounded-2xl transition-all duration-300
              shadow-[0_12px_48px_rgba(0,0,0,0.35),0_2px_8px_rgba(0,0,0,0.15)]
              ${darkMode
                ? "bg-[#0C0C0E]/85 backdrop-blur-2xl border border-white/[0.08]"
                : "bg-white/85 backdrop-blur-2xl border border-black/[0.07]"
              }`}
          >
            {dockLinks.map((link) => (
              <div key={link.label} className="flex items-center justify-center h-11 w-11">
                {renderDockIcon(link, mouseX)}
              </div>
            ))}

            <div className={`w-px h-7 mx-2 ${darkMode ? "bg-white/10" : "bg-black/8"}`} />

            {externalLinks.map((link) => (
              <DockItem key={link.label} label={link.label} mouseX={mouseX} darkMode={darkMode}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: "100%", height: 44 }}
                  className={`flex items-center justify-center rounded-full transition-colors duration-200
                    ${darkMode
                      ? "text-slate-400 hover:text-white hover:bg-white/10"
                      : "text-slate-500 hover:text-black hover:bg-black/5"
                    }`}
                >
                  <link.icon size={19} strokeWidth={2} />
                </a>
              </DockItem>
            ))}

            <div className={`w-px h-7 mx-2 ${darkMode ? "bg-white/10" : "bg-black/8"}`} />

            <DockItem label={darkMode ? "Light mode" : "Dark mode"} mouseX={mouseX} darkMode={darkMode}>
              <button
                onClick={toggleDarkMode}
                aria-label="Toggle theme"
                style={{ width: "100%", height: 44 }}
                className={`flex items-center justify-center rounded-full transition-colors duration-200
                  ${darkMode
                    ? "text-amber-400 hover:bg-white/10"
                    : "text-slate-500 hover:bg-black/5"
                  }`}
              >
                {darkMode ? <FiSun size={19} strokeWidth={2} /> : <FiMoon size={19} strokeWidth={2} />}
              </button>
            </DockItem>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}