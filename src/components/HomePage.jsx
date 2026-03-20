import Hero from "./Hero.jsx";
import Skills from "./Skills.jsx";
import Education from "./Education.jsx";
import HomeProjects from "./HomeProjects.jsx";
import Contact from "./Contact.jsx";

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
