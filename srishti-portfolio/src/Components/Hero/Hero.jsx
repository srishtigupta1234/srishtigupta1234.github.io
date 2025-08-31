import React, { useEffect } from "react";
import "./Hero.css";
import me4 from "../../assets/me4.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const resume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Srishti_Gupta_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="hero" id="hero">
    
      <img
        src={me4}
        alt="Srishti Gupta"
        className="profile-pic"
        data-aos="zoom-in"
      />

  
      <h1 data-aos="fade-up">
        Hi, I'm <span>Srishti Gupta</span>
      </h1>

    
      <div
        className="typing-wrapper"
    
      >
        <img
          src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=5EBCFF&center=true&vCenter=true&width=480&lines=Code.+Create.+Contribute.;Bringing+ideas+to+life+through+code.;Love+building+real-world+solutions."
          alt="Typing animation"
        />
      </div>

   <div className="hero-subtitle" data-aos="fade-up" data-aos-delay="300">
  <div className="subtitle-line">
    <p>A passionate</p>
    <div className="typing-wrapper" id="skills">
      <img
        src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=FFD700&center=true&vCenter=true&width=280&lines=Full-Stack+Developer;MERN+Stack+Developer;Java+Developer"
        alt="Typing animation"
      />
    </div>
  </div>

  <p className="subtitle-desc">
    turning ideas into <span className="highlight">elegant web experiences</span>.
  </p>
</div>


  
      <div className="hero-action" data-aos="fade-up" data-aos-delay="500">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="resume" onClick={resume}>
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
