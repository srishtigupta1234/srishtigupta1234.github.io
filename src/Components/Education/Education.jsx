import React, { useEffect } from "react";
import "./Education.css";
import AOS from "aos";
import jiwaji from "../../assets/jiwaji.jpg";
import schoolIcon from "../../assets/excellence.jpg"; 
import model from "../../assets/model.webp";
import step from "../../assets/step.png";
import { FaGraduationCap } from "react-icons/fa";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const steps = [
    {
      title: "Bachelor of Computer Applications (BCA)",
      icon: jiwaji,
      inst: "Jiwaji University, Gwalior",
      year: "2024 – Present",
      grade: "8.45 CGPA (Expected Graduation: 2027)",
      cert: {
        text: "Internship Completion Certificate By Unified Mentor",
        link: "https://drive.google.com/file/d/1CD2q26C6XG7wAf6qXgtHHrpcgPyRDPsl/view",
      },
    },
    {
      title: "Higher Secondary (Commerce + Mathematics)",
      icon: schoolIcon,
      inst: "Govt. Excellence School, Gwalior",
      year: "2022 – 2024",
      grade: "87.8%",
      cert: {
        text: "Junior Software Developer Certificate By NSQF",
        link: "https://drive.google.com/file/d/15N2Z0TNAkyWstwFx-odNsdygJydgDZoT/view?usp=sharing",
      },
    },
    {
      title: "Secondary (MP Board)",
      icon: model,
      inst: "Model Kerela Higher Secondary School, Gwalior",
      year: "2020 – 2022",
      grade: "88.2%",
      cert: {
        text: "N/A",
        link: "#",
      },
    },
  ];

  return (
    <div className="education-container" id="education">
      <div className="education-title" data-aos="fade-up">
        <FaGraduationCap className="title-icon" />
        <h1>EDUCATION</h1>
      </div>

      <div className="education-stepper">
        {steps.map((step, index) => (
          <div className="step" key={index} data-aos="fade-up">
            <div className="step-icon">
              <img src={step.icon} alt={step.title} />
            </div>
            <div className="step-content">
              <h2>{step.title}</h2>
              <p className="edu-inst">{step.inst}</p>
              <p className="edu-year">{step.year}</p>
              <p className="edu-grade">{step.grade}</p>
              {step.cert && (
                <div className="edu-cert">
                  <a
                    href={step.cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-btn"
                  >
                    {step.cert.text}
                  </a>
                </div>
              )}
            </div>
            {index < steps.length - 1 && <div className="step-connector"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;