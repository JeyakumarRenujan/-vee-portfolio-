import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import TechStack from "./components/sections/TechStack";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import FloatingBackground from "./components/background/FloatingBackground";

function App() {
  return (
    
    <>

      <FloatingBackground />
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Education />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
}

export default App;