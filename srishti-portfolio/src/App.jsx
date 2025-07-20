import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
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

const App = () => {
   useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
    <div className="fullscreen">
      {/* Animation Background Layer */}
      <div className="animation-layer">
        <DotLottieReact
          src="https://lottie.host/6feadcc9-2fd5-4363-845c-978b82781470/O7059DG9nS.lottie"
          autoplay
          loop
        />
      </div>
      </div>
      
      {/* Content Overlay Layer */}
      <div className='overlay-content'>
        <Navbar/>
        <LeftSection/>
        <Hero/>
        <About/>
        <Experience/>
        <Skills/>
        <Education/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
};

export default App;