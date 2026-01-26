import React, { useEffect } from "react";
import "./Education.css";
import AOS from "aos";
import { FaGraduationCap, FaUniversity, FaSchool } from "react-icons/fa";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const steps = [
    {
      title: "Bachelor of Computer Applications (BCA)",
      icon: <FaUniversity />, // Changed to Icon Component
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
      icon: <FaSchool />, // Changed to Icon Component
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
      icon: <FaSchool />, // Changed to Icon Component
      inst: "Model Kerela Higher Secondary School, Gwalior",
      year: "2020 – 2022",
      grade: "88.2%",
      cert: null, // Simplified logic for N/A
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
            {/* Icon Wrapper */}
            <div className="step-icon">
              {step.icon}
            </div>

            <div className="step-content">
              <h2>{step.title}</h2>
              <p className="edu-inst">{step.inst}</p>
              <p className="edu-year">{step.year}</p>
              <p className="edu-grade">{step.grade}</p>
              
              {/* Conditional rendering for Certificate */}
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

            {/* Connector Line (except for the last item) */}
            {index < steps.length - 1 && <div className="step-connector"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;