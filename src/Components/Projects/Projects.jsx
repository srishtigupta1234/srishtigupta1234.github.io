import React, { useEffect } from "react";
import "./Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Sample images
import dgpImg from "../../assets/dgp_insight.png";
import campusImg from "../../assets/career_insight.png";
import football from "../../assets/football.png";
import game from "../../assets/game.png";
import studentImg from "../../assets/student.png";
import plantImg from "../../assets/plant.jpeg";
import buzzbuy from "../../assets/buzzbuy.png";
import campusBuddyImg from "../../assets/campusBuddyImg (2).png";
import eventImg from "../../assets/smart_event.png";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [
  {
    title: "CampusBuddy – Unified Academic Management Portal",
    image: campusBuddyImg,
    description:
      "Architected a full-stack academic management platform to streamline attendance tracking, SGPA/CGPA calculation, and centralized resource access. Built using React, Redux Toolkit, Spring Boot, MySQL, and JWT authentication. Implemented weighted credit-based CGPA logic, dynamic dashboards with Recharts, and secure multi-role authentication (Student/Admin). Designed with a scalable layered backend architecture and professional admin command-center UI.",
    github: "https://github.com/srishtigupta/CampusBuddy",
    demo: "https://campus-buddy-chi.vercel.app/",
  },
  {
    title: "Smart Event Booking System",
    image: eventImg,
    description:
      "Developed a full-stack event booking platform with real-time seat management and booking persistence. Built using React (Redux), Spring Boot, MySQL, and JWT authentication. Implemented secure booking flow, cancellation logic, and relational mapping between User, Event, and Booking entities using JPA/Hibernate. Designed RESTful APIs with clean layered architecture and responsive UI for seamless user experience.",
    github: "https://github.com/srishtigupta1234/Smart-Event-Booking-System",
    demo: "https://smart-event-booking-system-blue.vercel.app/",
  },
  {
    title: "Buzzbuy – Full Stack E-Commerce Platform",
    image: buzzbuy,
    description:
      "Designed and developed a scalable full-stack e-commerce platform using React, Spring Boot, and MySQL. Implemented JWT-based authentication, role-based access control, product lifecycle management, cart persistence, and secure order workflows. Architected RESTful APIs with layered architecture (Controller → Service → Repository) and ensured state consistency using Redux Toolkit.",
    github: "https://github.com/srishtigupta1234/Buzzbuy_Ecommerce_Web",
    demo: "https://buzzbuyecommerce.vercel.app",
  },
  {
    title: "Digital Gram Panchayat",
    image: dgpImg,
    description:
      "Digitized rural governance workflows, reducing manual form processing by 70%. Enabled 200+ villagers to register through dynamic scheme-based forms. Built with React and Firebase (Auth + Firestore), featuring real-time application tracking, document uploads, and role-based admin dashboards for streamlined approvals.",
    github: "https://github.com/srishtigupta1234/Digital_Gram_Panchayat_Web",
    demo: "https://comforting-duckanoo-a487d5.netlify.app/home",
  },
  {
    title: "Career Campus",
    image: campusImg,
    description:
      "Built an eligibility-driven college application portal facilitating 100+ student submissions. Implemented Firebase Authentication with secure admin/student dashboards, automated eligibility filtering logic, and dynamic form rendering based on academic criteria.",
    github: "https://github.com/srishtigupta1234/Career_Campus",
    demo: "https://courageous-crepe-96002b.netlify.app/home",
  },
  {
    title: "Alien Invasion – Space Shooter Game",
    image: game,
    description:
      "Developed an arcade-style 2D space shooter using Python and Pygame. Engineered object collision detection, sprite animations, score tracking, and progressive difficulty scaling. Demonstrates strong OOP principles and game loop architecture implementation.",
    github: "https://github.com/srishtigupta1234/Alien-Invasion-",
    demo: "",
  },
  {
    title: "Online Plant Nursery Management System",
    image: plantImg,
    description:
      "Engineered a Spring Boot backend for an e-commerce nursery system with customer and admin roles. Implemented secure REST APIs, product inventory management, and order handling using JPA, Hibernate, and MySQL. Designed modular layered architecture ensuring maintainability and scalability.",
    github:
      "https://github.com/srishtigupta1234/OnlineNurseryPlanManagementSystem",
    demo: "",
  },
  {
    title: "Student Management System (Spring Boot)",
    image: studentImg,
    description:
      "Developed a RESTful backend system for managing student records with CRUD operations. Integrated validation, global exception handling, and database persistence using Spring Boot, JPA, and MySQL. Structured following clean layered architecture principles.",
    github: "https://github.com/srishtigupta1234/Student-Management-System",
    demo: "",
  },
];

  return (
    <div className="projects-container" id="projects">
      <h1 className="projects-title" data-aos="fade-up">
        MY <span>PROJECTS</span>
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
              {proj.demo && (
                <a href={proj.demo} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
