import React, { useEffect } from "react";
import "./About.css";
import { Player } from "@lottiefiles/react-lottie-player";
import codingGirl from "../../assets/codingGirl.json";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-title" data-aos="fade-down">
        <h1>
          ABOUT <span>ME</span>
        </h1>
      </div>

      <div className="about-sections">
          <div className="player-wrapper">
            <Player
              autoplay
              loop
              src={codingGirl}
              style={{ height: "300px", width: "300px" }}
            />
        </div>

        <div className="about-right" data-aos="fade-left">
          <div className="about-para">
           <p> I'm a passionate <strong>Full-Stack Developer</strong> dedicated to crafting clean, responsive, and user-focused digital experiences. With a strong foundation in <strong>HTML, CSS, JavaScript, React, Firebase, and Java</strong>, I combine creativity and precision to build elegant UIs and solve complex problems. Whether it's developing interactive web applications or automating workflows, I enjoy turning innovative ideas into meaningful digital solutions. </p> <p> As a <strong>Google Student Ambassador</strong>, I actively promote Google technologies, organize tech workshops, and empower my peers to innovate using the latest tools. I’ve applied my skills to impactful real-world projects like <strong>Digital Gram Panchayat</strong> (digitizing workflows for 200+ users) and <strong>Career Campus</strong> (a college recommendation & application portal). </p> <p> Currently, I contribute to <strong>GSSoC</strong>, collaborating on open-source projects, while strengthening my <strong>DSA & algorithmic skills</strong> through competitive programming challenges. My passion lies in transforming complex logic into intuitive, elegant interfaces, continuously exploring new frameworks and technologies to craft efficient, user-centered solutions. </p>
          </div>
        </div>
      </div>

      <div className="about-achievements" data-aos="fade-up">
        <div className="achievement-card">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="achievement-card">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <div className="achievement-card">
          <h1>100+</h1>
          <p>DSA PROBLEM SOLVED</p>
        </div>
      </div>
    </section>
  );
};

export default About;
