import React, { useState } from "react";
import {
  FaCertificate,
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
} from "react-icons/fa";
import "./Certificate.css";
import postman from "../../assets/Postman.png";
import nsqf from "../../assets/NSQF.jpg";
import um from "../../assets/certificateUM.jpg";
import deloitte from "../../assets/deloitte.png";
import gssoc from "../../assets/gssoc.jpg"
import google from "../../assets/google (2).png";
const certificates = [
  {
    title: "Google Student Campus Ambassador",
    organization: "Google",
    image: google,
    link: "https://drive.google.com/file/d/1WcibTewZqi-ZDS3W7zhZypA_tHMmv_g6/view?usp=sharing",
  },

  {
    title: "Open Source Contributor – GSSoC",
    organization: "GirlScript Summer of Code",
    image: gssoc,
    link: "https://drive.google.com/file/d/1ez9x4-zmbCsASCZIMi58cDz_hujqoxRE/view?usp=sharing",
  },

  {
    title: "Postman API Fundamentals Student Expert",
    organization: "Postman",
    image: postman,
    link: "https://badgr.com/public/assertions/a41cjfHxRI-hqiy_i94hnA?identity__email=srishtigupta97527@gmail.com",
  },

  {
    title: "Junior Software Developer – NSQF Level 5",
    organization: "IT-ITeS Sector Skill Council NASSCOM",
    image: nsqf,
    link: "https://drive.google.com/file/d/15N2Z0TNAkyWstwFx-odNsdygJydgDZoT/view?usp=drive_link",
  },

  {
    title: "Certified Full Stack Web Developer",
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

  // Show 3 certificates on desktop, fewer on mobile via CSS
  const visibleCards = 3;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < certificates.length - visibleCards ? prev + 1 : prev,
    );
  };

  return (
    <section className="cert-section" id="certificate">
      <div className="cert-bg-glow"></div>

      <div className="cert-header" data-aos="fade-down">
        <div className="icon-badge">
          <FaCertificate className="title-icon" />
        </div>
        <h1 className="cert-title">
          PROFESSIONAL <span>ACCREDITATION</span>
        </h1>
        <p className="cert-subtitle">
          Validated expertise across Full Stack Development and Open Source.
        </p>
      </div>

      <div className="carousel-wrapper">
        <button
          className={`nav-btn prev ${currentIndex === 0 ? "hidden" : ""}`}
          onClick={handlePrev}
        >
          <FaArrowLeft />
        </button>

        <div className="cert-track">
          {certificates
            .slice(currentIndex, currentIndex + visibleCards)
            .map((cert, index) => (
              <div className="cert-card-glass" key={index} data-aos="zoom-in">
                <div className="cert-card-top">
                  <div className="org-logo">
                    <img src={cert.image} alt={cert.organization} />
                  </div>
                  <div className="cert-stamp">
                    <FaCertificate />
                  </div>
                </div>

                <div className="cert-card-body">
                  <p className="org-name">{cert.organization}</p>
                  <h2 className="cert-name">{cert.title}</h2>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-action-btn"
                  >
                    Verify Credentials <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            ))}
        </div>

        <button
          className={`nav-btn next ${currentIndex >= certificates.length - visibleCards ? "hidden" : ""}`}
          onClick={handleNext}
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Certificate;
