import React, { useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import LeftSection from "./Components/LeftSection/LeftSection";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import BackgroundAnimation from "./Components/BackgroundAnimation/BackgroundAnimation";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Certificate from "./Components/Certificate/Cerificate";
import ScrollProgress from "./Components/ScrollProgress/ScrollProgress";
import GithubStats from "../src/Components/GithubStats/GithubStats";

// 🔥 This component handles scroll-to-section when URL changes
function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.pathname.replace("/", "");

    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100); 
    }
  }, [location.pathname]);

  return null;
}

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <ScrollProgress/>
      <ScrollToSection />

      <div className="overlay-content">
        <BackgroundAnimation />
        <Navbar />
        <LeftSection />
        <ScrollToTop />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <GithubStats/>
        <Certificate />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
