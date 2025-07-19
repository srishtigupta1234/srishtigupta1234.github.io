import React, { useEffect } from "react";
import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
     useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skillCategories = [
    {
      title: "Front-End",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Vite"],
    },
    {
      title: "Back-End",
      skills: ["Spring Boot", "Firebase", "REST APIs"],
    },
    {
      title: "Databases",
      skills: ["Firebase Realtime DB", "MySQL"],
    },
    {
      title: "Languages",
      skills: ["Java", "Python", "JavaScript", "SQL"],
    },
    {
      title: "Testing & APIs",
      skills: ["Postman", "Swagger UI"],
    },
    {
      title: "DevOps & Version Control",
      skills: ["Git", "GitHub", "Netlify"],
    },
    {
      title: "Cloud Concepts",
      skills: ["Firebase Hosting", "Firebase Auth", "Firebase Storage"],
    },
    {
      title: "Soft Skills",
      skills: [
        "Problem Solving",
        "Communication",
        "Leadership",
        "Teamwork",
        "Creative Thinking",
        "Adaptability",
      ],
    },
  ];

 return (
    <div className="skills-container" id="skills">
      <div className="skills-title" data-aos="fade-up">
        <span>SKILLS</span> <span className="highlight">& TOOLS</span>
      </div>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className="skills-category" data-aos="fade-up" key={index}>
            <h3>{category.title}</h3>
            <div className="skills-tags">
              {category.skills.map((skill, i) => (
                <span className="tag" key={i}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Skills