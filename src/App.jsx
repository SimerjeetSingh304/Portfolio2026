import { useState, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import HomePage from "./components/layout/HomePage.jsx";
import Projects from "./components/sections/Projects.jsx";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const particlesInitialized = useRef(false);
  const location = useLocation();

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      document.body.classList.toggle("light", !newMode);
      return newMode;
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (particlesInitialized.current) return;

    const init = () => {
      if (typeof window.particlesJS === "undefined") {
        setTimeout(init, 50);
        return;
      }
      particlesInitialized.current = true;
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 40,
            density: { enable: true, value_area: 800 },
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: {
            value: 1.0,
            random: false,
            anim: { enable: false },
          },
          size: {
            value: 5,
            random: true,
            anim: { enable: false },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 1.0,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce",
            bounce: false,
            },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: ["grab", "repulse"]
              },
              onclick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              grab: {
                distance: 200,
                line_linked: { opacity: 1.0 },
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
            },
          },
          retina_detect: true,
        });
      };

    init();

    return () => {
      if (window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom.forEach((dom) => {
          if (dom.pJS && dom.pJS.fn && dom.pJS.fn.vendors) {
            window.cancelAnimationFrame(dom.pJS.fn.drawAnimFrame);
          }
        });
        window.pJSDom = [];
      }
      particlesInitialized.current = false;
    };
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-500`}
      style={{
        fontFamily: "Poppins, sans-serif",
        backgroundColor: darkMode ? "#000000" : "#f8fafc"
      }}
    >
      {darkMode && (
        <>
          <div className="bg-circle-tr-1" />
          <div className="bg-circle-tr-2" />
          <div className="bg-circle-tr-3" />
          <div className="bg-circle-bl-small" />
          <div className="bg-ring-right" />

          <div className="wave-lines">
            <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 150C50 120 100 180 150 150C200 120 250 180 300 150C350 120 400 180 400 150" stroke="#4F8EF7" strokeWidth="2" opacity="0.6" />
              <path d="M0 160C50 130 100 190 150 160C200 130 250 190 300 160C350 130 400 190 400 160" stroke="#4F8EF7" strokeWidth="2" opacity="0.4" />
              <path d="M0 170C50 140 100 200 150 170C200 140 250 200 300 170C350 140 400 200 400 170" stroke="#4F8EF7" strokeWidth="2" opacity="0.2" />
            </svg>
          </div>
        </>
      )}

      <div
        id="particles-js"
        className="fixed inset-0"
        style={{ zIndex: 0 }}
      />

      <div className="relative z-10 w-full">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage darkMode={darkMode} />} />
            <Route path="/projects" element={<Projects darkMode={darkMode} />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

