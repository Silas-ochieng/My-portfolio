import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Project from "./components/Project";
import Contact from "./components/Contact";
function App() {
  const [currentSection, setCurrentSection] = useState("home");

  return (
    <>
      <Navbar
        onSectionChange={setCurrentSection}
        currentSection={currentSection}
      />
      <Hero onSectionChange={setCurrentSection} />
      {currentSection === "about" && <About />}
      {currentSection === "resume" && (
        <>
          <Education />
          <Skills />
          <Project />
        </>
      )}
      {currentSection === "projects" && <Project />}
      {currentSection === "contact" && <Contact />}
    </>
  );
}

export default App;
