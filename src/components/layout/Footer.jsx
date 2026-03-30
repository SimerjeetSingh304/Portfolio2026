import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/SimerjeetSingh304", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/simerjeet-singh-8b1700295/", label: "LinkedIn" },
  { icon: FiTwitter, href: "https://twitter.com", label: "Twitter" },
];

export default function Footer({ darkMode }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className={`relative z-10 border-t transition-colors duration-300 ${
        darkMode 
          ? "bg-[#050505] border-white/5 text-slate-400" 
          : "bg-slate-50 border-slate-200 text-slate-600"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className={`text-xl font-bold tracking-wide ${darkMode ? "text-white" : "text-slate-900"}`}>
              Simerjeet Singh
            </span>
            <span className="text-sm">
              &copy; {currentYear} All rights reserved.
            </span>
          </div>

          {/* Contact Actions */}
          <div className="flex items-center gap-6">
            <a 
              href="mailto:contact@example.com" 
              className={`text-sm font-medium transition-colors hover:text-blue-500`}
            >
              contact@example.com
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`p-2.5 rounded-full transition-all duration-300 border ${
                    darkMode 
                      ? "bg-white/5 border-white/10 hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-400" 
                      : "bg-white border-slate-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600"
                  }`}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

        </div>
      </div>
    </footer>
  );
}
