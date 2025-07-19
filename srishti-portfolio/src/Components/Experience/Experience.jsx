import React from "react";
import "./Experience.css";


const experiences = [
  {
    title: "Web Development Intern",
    company: "Unified Mentor",
    type: "Remote · Full-time",
    time: "Apr 2025 – May 2025",
    description:
      "Built dynamic web applications using React, HTML, CSS, and Firebase. Developed reusable components and integrated real-time database functionalities.",
    tech: ["React", "HTML", "CSS", "Firebase", "GitHub"],
  },
  {
    title: "DSA + Java Intern",
    company: "Sure Trust",
    type: "Remote · Part-time · Present ",
    time: "Jul 2025 – Dec 2025",
    description:
      "Solved 100+ Java & DSA problems, participated in mock interviews, and completed structured modules covering recursion, OOP, and collections.",
    tech: ["Java", "DSA", "OOP", "GitHub"],
  },
];

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <div className="experience-title">
        <h1>
          WORK <span>EXPERIENCE</span>
        </h1>
       
      </div>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            className="timeline-item"
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div className="timeline-date">{exp.time}</div>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h2>{exp.title}</h2>
              <h4>
                {exp.company} — <span>{exp.type}</span>
              </h4>
              <p>{exp.description}</p>
              <div className="tags">
                {exp.tech.map((tech, i) => (
                  <span className="tag" key={i}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
