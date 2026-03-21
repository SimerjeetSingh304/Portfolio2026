import Skills from "../sections/Skills.jsx";
import TechMarquee from "../sections/TechMarquee.jsx";

export default function SkillsPage({ darkMode }) {
  return (
    <div className="pt-20">
      <Skills darkMode={darkMode} />
      <TechMarquee darkMode={darkMode} />
    </div>
  );
}
