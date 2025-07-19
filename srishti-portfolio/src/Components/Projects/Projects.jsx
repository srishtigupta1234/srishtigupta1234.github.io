import React, { useEffect } from "react";
import "./Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Sample images
import dgpImg from "../../assets/dgp_insight.png";
import campusImg from "../../assets/career_insight.png";
import axiosImg from "../../assets/blog.png";
import weatherImg from "../../assets/location.png";
import studentImg from "../../assets/student.png";
import plantImg from "../../assets/plant.jpeg";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      title: "Digital Gram Panchayat",
      image: dgpImg,
      description:
        "Reduced manual form processing by 70% by digitizing rural schemes. Enabled 200+ villagers to register via responsive dashboards. Features include dynamic forms, Firebase Auth, real-time tracking, and document uploads.",
      github: "https://github.com/srishtigupta1234/Digital_Gram_Panchayat_Web",
      demo: "https://comforting-duckanoo-a487d5.netlify.app/home",
    },
    {
      title: "Career Campus",
      image: campusImg,
      description:
        "Facilitated 100+ student applications through dynamic eligibility-based college forms. Integrated secure Firebase Auth with admin & student dashboards to track applications and automate submissions.",
      github: "https://github.com/srishtigupta1234/Career_Campus",
      demo: "https://courageous-crepe-96002b.netlify.app/home",
    },
    {
      title: "React Axios CRUD App",
      image: axiosImg,
      description:
        "Built a full-stack CRUD app using Axios and JSON-server for managing user data. Supports create, read, update, and delete.",
      github: "https://github.com/srishtigupta1234/React_Axios_Crud_Fullstack",
      demo: "https://reactaxiosfullstack.netlify.app/",
    },
    {
      title: "Weather Detector",
      image: weatherImg,
      description:
        "Simple weather app that fetches real-time weather data using the OpenWeatherMap API and React.",
      github: "https://github.com/srishtigupta1234/weather_detector",
      demo: "https://frolicking-conkies-b32159.netlify.app/",
    },
    {
      title: "Online Plant Nursery Management System",
      image: plantImg, // Add a placeholder image in assets
      description:
        "Spring Boot backend for an e-commerce plant nursery. Supports customer and admin roles, product management, and RESTful APIs. Implements layered architecture with JPA, Hibernate, and MySQL.",
      github:
        "https://github.com/srishtigupta1234/Online-Plant-Nursery-Backend",
      demo: "", // No live frontend needed, or add Swagger if hosted
    },
    {
      title: "Student Management System (Spring Boot)",
      image: studentImg, // Add placeholder image
      description:
        "A Spring Boot-based backend system to manage student records. Includes CRUD APIs for student details, validations, exception handling, and database integration with MySQL.",
      github: "https://github.com/srishtigupta1234/Student_Management_System",
      demo: "", // Optional: add Swagger/demo if hosted
    },
  ];

  return (
    <div className="projects-container" id="projects">
      <h1 className="projects-title" data-aos="fade-up">
        My <span>Projects</span>
      </h1>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project-card" data-aos="zoom-in" key={index}>
            <img src={proj.image} alt={proj.title} />
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
            <div className="project-links">
              <a href={proj.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={proj.demo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
