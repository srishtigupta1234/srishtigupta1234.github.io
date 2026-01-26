import React from "react";
import "./Footer.css";
import icon from "../../assets/icon2.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  // Automatically update the year
  const currentYear = new Date().getFullYear();

  // Function to smooth scroll to top when logo is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Section 1: Brand & Description */}
        <div className="footer-section brand">
          {/* Added onClick to scroll to top */}
          <div 
            className="brand-header" 
            onClick={scrollToTop} 
            style={{ cursor: "pointer" }}
            role="button"
            tabIndex={0}
          >
            <img src={icon} alt="Srishti Gupta Logo" className="footer-logo" />
            <h3>Srishti Gupta</h3>
          </div>
          <p className="footer-tagline">
            Building reliable and user-focused digital experiences with modern web technologies.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Section 3: Socials */}
        <div className="footer-section social">
          <h4>Connect</h4>
          <div className="social-icons">
            <a
              href="https://github.com/srishtigupta1234"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/srishtigupta1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:srishtigupta97527@gmail.com" 
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p>© {currentYear} Srishti Gupta. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;