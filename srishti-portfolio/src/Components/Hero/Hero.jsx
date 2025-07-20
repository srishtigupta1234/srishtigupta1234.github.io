import React, { useEffect } from "react";
import "./Hero.css";
import me4 from "../../assets/me4.jpg";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const resume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; 
    link.download = 'Srishti_Gupta_Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="hero" id="hero">
      <img src={me4} alt="Srishti Gupta" className="profile-pic" data-aos="zoom-in" />
      <h1 data-aos="fade-up">
        Hi, I'm <span>Srishti Gupta</span>
      </h1>
      <p data-aos="fade-up" data-aos-delay="200">
        A passionate Full Stack Developer turning ideas into elegant web
        experiences.
      </p>
      <div className="hero-action" data-aos="fade-up" data-aos-delay="400">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="resume"  onClick={resume}>My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
