import React, { useState } from "react";
import "./Certificate.css";
import postman from "../../assets/Postman.png";
import nsqf from "../../assets/NSQF.jpg";
import um from "../../assets/certificateUM.jpg";
import deloitte from "../../assets/deloitte.png";
import { FaCertificate, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const certificates = [
  {
    title: "Postman api fundamental student expert",
    organization: "Postman",
    image: postman,
    link: "https://badgr.com/public/assertions/a41cjfHxRI-hqiy_i94hnA?identity__email=srishtigupta97527@gmail.com",
  },
  {
    title: "Junior Software Developer – NSQF Level ",
    organization: "IT-ITeS Sector Skill Council NASSCOM",
    image: nsqf,
    link: "https://drive.google.com/file/d/15N2Z0TNAkyWstwFx-odNsdygJydgDZoT/view?usp=drive_link",
  },
  {
    title: "Certified full stack web developer",
    organization: "Unified Mentor Private Limited",
    image: um,
    link: "https://drive.google.com/file/d/1CD2q26C6XG7wAf6qXgtHHrpcgPyRDPsl/view?usp=drive_link",
  },
  {
    title: "Deloitte Australia - Technology Job Simulation",
    organization: "Forage",
    image: deloitte,
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_GH5kSofB9TW8uxfZK_1750906304735_completion_certificate.pdf",
  },
];

const Certificate = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : certificates.length - 3
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < certificates.length - 3 ? prevIndex + 1 : 0
    );
  };

  return (
    <section className="education-container" id="certificate">
      <div className="education-title">
        <FaCertificate className="title-icon" />
        <h1>CERTIFICATIONS</h1>
      </div>

      <div className="carousel-container">
        <button
          className="carousel-button left-button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <FaArrowLeft />
        </button>

        <div className="certificate-carousel-track">
          {certificates
            .slice(currentIndex, currentIndex + 3)
            .map((cert, index) => (
              <div className="step" key={index}>
                <div className="step-icon">
                  <img src={cert.image} alt={cert.title} />
                </div>
                <div className="step-content">
                  <h2>{cert.title}</h2>
                  <p className="edu-inst">{cert.organization}</p>
                  <div className="edu-cert">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-btn"
                    >
                      View Certificate
                      <FaCertificate className="btn-icon" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <button
          className="carousel-button right-button"
          onClick={handleNext}
          disabled={currentIndex >= certificates.length - 3}
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Certificate;