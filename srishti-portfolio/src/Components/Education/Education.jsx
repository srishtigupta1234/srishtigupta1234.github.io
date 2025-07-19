import React, { useEffect } from "react";
import "./Education.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="education-container" id="education">
      <div className="education-title" data-aos="fade-up">
        <h1>EDUCATION</h1>
      </div>

      <div className="education-timeline">
        <div className="edu-card" data-aos="fade-right">
          <h2>Bachelor of Computer Applications (BCA)</h2>
          <p className="edu-inst">Jiwaji University, Gwalior</p>
          <p className="edu-year">2024 – Present</p>
          <p className="edu-grade">🎓 8.6 SGPA (Expected Graduation: 2027)</p>
        </div>

        <div className="edu-card" data-aos="fade-left">
          <h2>Higher Secondary (Commerce + Mathematics)</h2>
          <p className="edu-inst">Govt. Excellence School, Gwalior</p>
          <p className="edu-year">2022 – 2024</p>
          <p className="edu-grade">🎓 87.8%</p>
        </div>

        <div className="edu-card" data-aos="fade-right">
          <h2>Secondary (MP Board)</h2>
          <p className="edu-inst">Model Kerela Higher Secondary School, Gwalior</p>
          <p className="edu-year">2020 – 2022</p>
          <p className="edu-grade">🎓 88.2%</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
