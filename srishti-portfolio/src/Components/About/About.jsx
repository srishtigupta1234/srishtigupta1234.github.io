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
    <section id="about" className="about">
      {/* Title */}
      <div className="about-title" data-aos="fade-down">
        <h1>
          ABOUT <span>ME</span>
        </h1>
      </div>

      {/* Content Split */}
      <div className="about-sections">
        {/* Left Image */}
        <div className="about-left" data-aos="fade-right">
          <img src={me4} alt="About Me" />
        </div>

        {/* Right Text */}
        <div className="about-right" data-aos="fade-left">
          <div className="about-para">
            <p>
              I'm a passionate web developer dedicated to crafting clean,
              responsive, and user-focused digital experiences. With a strong
              foundation in HTML, CSS, JavaScript, and React, I bring both
              creativity and precision to every project. Whether it's building
              elegant UIs or solving complex problems, I love turning ideas into
              interactive realities.
            </p>
            <p>
              I’ve applied my skills to impactful real-world projects like
              <b> Digital Gram Panchayat</b> (digitizing workflows for 200+
              users) and <b>Career Campus</b> (a college recommendation &
              application portal). I enjoy transforming complex logic into
              intuitive, elegant interfaces and exploring new frameworks to
              create meaningful, user-centered solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Achievements */}
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
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </section>
  );
};

export default About;
