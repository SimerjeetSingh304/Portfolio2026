import Hero from "../sections/Hero.jsx";
import Skills from "../sections/Skills.jsx";
import Education from "../sections/Education.jsx";
import HomeProjects from "../sections/HomeProjects.jsx";
import Contact from "../sections/Contact.jsx";

export default function HomePage({ darkMode }) {
  return (
    <>
      <Hero darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Education darkMode={darkMode} />
      <HomeProjects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </>
  );
}
