import About from "../sections/About.jsx";

export default function AboutPage({ darkMode }) {
  return (
    <>
      <div className="sticky top-0 h-screen w-full overflow-y-auto scrollbar-hide">
        <div className="relative w-full min-h-full flex items-center justify-center py-20">
          <About darkMode={darkMode} />
        </div>
      </div>
    </>
  );
}
