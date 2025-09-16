import React, { useEffect } from "react";
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

const App = () => {
   useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <div className='overlay-content'>
        <BackgroundAnimation/>
        <Navbar/>
        <LeftSection/>
        <ScrollToTop/>
        <Hero/>
        <About/>
        <Experience/>
        <Skills/>
        <Education/>
        <Projects/>
        <Certificate/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
};

export default App;