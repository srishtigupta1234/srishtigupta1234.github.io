import React, { useEffect } from "react";
import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Importing icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiFirebase,
  SiMysql,
  SiPostman,
  SiSwagger,
  SiNetlify,
  SiVite,
} from "react-icons/si";
import { FaLightbulb, FaUsers, FaHandsHelping, FaBrain } from "react-icons/fa";
import { MdOutlinePsychology, MdGroups } from "react-icons/md";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Mapping skills to icons
  const skillIcons = {
    HTML5: <FaHtml5 color="#E44D26" />,
    CSS3: <FaCss3Alt color="#264de4" />,
    JavaScript: <FaJs color="#f7df1e" />,
    "React.js": <FaReact color="#61DBFB" />,
    Vite: <SiVite color="#646CFF" />,

    "Spring Boot": <SiSpringboot color="green" />,
    Firebase: <SiFirebase color="#FFA611" />,
    "REST APIs": <SiPostman color="#FF6C37" />,

    "Firebase Realtime DB": <SiFirebase color="#FFA611" />,
    MySQL: <SiMysql color="#8fd1e0ff" />,

    Java: <FaJava color="#f89820" />,
    Python: <FaPython color="#3776AB" />,
    SQL: <FaDatabase color="gray" />,

    Postman: <SiPostman color="#FF6C37" />,
    "Swagger UI": <SiSwagger color="green" />,

    Git: <FaGitAlt color="#F1502F" />,
    GitHub: <FaGithub />,
    Netlify: <SiNetlify color="#00C7B7" />,

    "Firebase Hosting": <SiFirebase color="#FFA611" />,
    "Firebase Auth": <SiFirebase color="#FFA611" />,
    "Firebase Storage": <SiFirebase color="#FFA611" />,

    "Problem Solving": <FaBrain color="#ffcc00" />,
    Communication: <MdGroups color="#00bcd4" />,
    Leadership: <FaUsers color="#ff5722" />,
    Teamwork: <FaHandsHelping color="#4caf50" />,
    "Creative Thinking": <FaLightbulb color="#ffc107" />,
    Adaptability: <MdOutlinePsychology color="#9c27b0" />,
  };

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
                  {skillIcons[skill] && (
                    <span className="icon">{skillIcons[skill]}</span>
                  )}
                  <span className="skill-text">{skill}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Skills;
