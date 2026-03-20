import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

const PORTFOLIO_LOGO = "YourName />";

const navLinks = [
  { label: "Home", to: "hero", type: "scroll" },
  { label: "Skills", to: "skills", type: "scroll" },
  { label: "Education", to: "education", type: "scroll" },
  { label: "Projects", to: "/projects", type: "router" },
  { label: "Contact", to: "contact", type: "scroll" },
];

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderLink = (link) => {
    if (link.type === "scroll" && isHome) {
      return (
        <ScrollLink
          to={link.to}
          smooth={true}
          duration={600}
          offset={-70}
          className={`text-sm font-medium cursor-pointer transition-all duration-300 hover:text-[#4F8EF7] group inline-flex flex-col ${darkMode ? "text-gray-300" : "text-gray-600"}`}
        >
          {link.label}
          <span className="h-[2px] w-0 bg-[#4F8EF7] transition-all duration-300 group-hover:w-full" />
        </ScrollLink>
      );
    }

    return (
      <RouterLink
        to={link.type === "scroll" ? `/#${link.to}` : link.to}
        className={`text-sm font-medium cursor-pointer transition-all duration-300 hover:text-[#4F8EF7] group inline-flex flex-col ${darkMode ? "text-gray-300" : "text-gray-600"}`}
      >
        {link.label}
        <span className="h-[2px] w-0 bg-[#4F8EF7] transition-all duration-300 group-hover:w-full" />
      </RouterLink>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled
        ? darkMode
          ? "bg-black/80 backdrop-blur-lg border-b border-white/5 py-3"
          : "bg-white/80 backdrop-blur-lg border-b border-black/5 py-3 shadow-sm"
        : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <RouterLink
          to="/"
          className="text-2xl font-bold cursor-pointer transition-all duration-300 hover:scale-105"
        >
          <span className="gradient-text">{PORTFOLIO_LOGO}</span>
        </RouterLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                {renderLink(link)}
              </li>
            ))}
          </ul>

          <button
            onClick={toggleDarkMode}
            className={`p-2.5 rounded-full transition-all duration-300 hover:scale-110 shadow-lg ${darkMode
              ? "bg-white/5 text-yellow-400 hover:bg-white/10"
              : "bg-black/5 text-gray-700 hover:bg-black/10"
              }`}
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${darkMode ? "bg-white/5 text-yellow-400" : "bg-black/5 text-gray-700"}`}
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button
            className={`p-2 rounded-lg ${darkMode ? "text-white" : "text-gray-900"}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden absolute top-full left-0 right-0 p-6 flex flex-col gap-6 animate-fadeIn ${darkMode
            ? "bg-black/95 backdrop-blur-xl border-b border-white/5"
            : "bg-white/95 backdrop-blur-xl border-b border-black/5 shadow-2xl"
            }`}
        >
          {navLinks.map((link) => (
            <div key={link.to} onClick={() => setMenuOpen(false)}>
               {renderLink(link)}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}

