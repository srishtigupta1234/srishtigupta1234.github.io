import React, { useEffect } from "react";
import "./About.css";
import me4 from "../../assets/me4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id="about" className="about">
      <div className="about-title" data-aos="fade-down">
        <h1>
          ABOUT <span>ME</span>
        </h1>
      </div>

      <div className="about-sections">
        <div className="about-left" data-aos="zoom-in-right">
          <img src={me4} alt="" />
        </div>

        <div className="about-right" data-aos="fade-left">
          <div className="about-para">
            <p>
              I'm a passionate web developer dedicated to crafting clean,
              responsive, and user-focused digital experiences. With a strong
              foundation in HTML, CSS, JavaScript, and React, I bring both
              creativity and precision to every project. Whether it's building
              elegant UIs or solving complex problems, I love turning ideas into
              interactive realities. Currently exploring modern web technologies
              and always open to exciting collaborations.
            </p>
            <p>
              I’ve applied my development skills through impactful real-world
              projects like Digital Gram Panchayat, a rural scheme platform that
              digitized manual workflows for over 200 users, and Career Campus,
              a college recommendation and application portal built with modern
              frontend tools and Firebase. I enjoy transforming complex logic
              into intuitive, elegant interfaces and have a strong grasp of
              frontend technologies, Firebase services, and responsive design
              principles. As a curious and committed learner, I’m constantly
              exploring new tools and frameworks, driven by a desire to create
              meaningful, user-centered solutions that blend both technical
              depth and visual clarity.
            </p>
          </div>
        </div>
      </div>

      <div className="about-achievements" data-aos="fade-up">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
