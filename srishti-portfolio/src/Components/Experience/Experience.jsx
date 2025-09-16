import React from "react";
import "./Experience.css";
import um from "../../assets/um.png";
import google from "../../assets/google.png";
import suretrust from "../../assets/suretrust.png";

const experiences = [
    {
    title: "Google Student Ambassador",
    company: "Google",
    type: "Remote · Part-time",
    time: "Aug 2025 – Present",
    logo:google,
    description:
      "Promote Google technologies and initiatives within the community, organize workshops, share insights about Google programs, and inspire peers to innovate.",
    tech: ["Google Programs", "Community Outreach", "Public Speaking", "Event Management"],
    certificate: "https://drive.google.com/file/d/1qLtJRdFY17_lUwvvIVqWGpxXq1DKZXZE/view?usp=sharing", 
  },
  {
    title: "DSA + Java Intern",
    company: "Sure Trust",
    type: "Remote · Part-time · Present",
    time: "Jul 2025 – Dec 2025",
    logo:suretrust,
    description:
      "Solved 100+ Java & DSA problems, participated in mock interviews, and completed structured modules covering recursion, OOP, and collections.",
    tech: ["Java", "DSA", "OOP", "GitHub"],
    certificate: "https://drive.google.com/file/d/1fhOS2gnw2o_MjlrLJ6BDEPQEEFej9ZC3/view?usp=sharing",
  },
  {
    title: "Web Development Intern",
    company: "Unified Mentor",
    type: "Remote · Full-time",
    time: "Apr 2025 – May 2025",
    logo:um,
    description:
      "Built dynamic web applications using React, HTML, CSS, and Firebase. Developed reusable components and integrated real-time database functionalities.",
    tech: ["React", "HTML", "CSS", "Firebase", "GitHub"],
    certificate:
      "https://drive.google.com/file/d/1CD2q26C6XG7wAf6qXgtHHrpcgPyRDPsl/view?usp=sharing",
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
              <h4 className="company-info">
                <img src={exp.logo} alt={exp.company} className="company-logo" />
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

              {exp.certificate && exp.certificate !== "#" && (
                <a
                  href={exp.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-btn"
                >
                  View Certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
