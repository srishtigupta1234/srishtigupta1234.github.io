import React from "react";
import "./Footer.css";
import icon from "../../assets/icon2.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={icon} alt="logo" />
          <p>
            I’ve spent a decade building tech with the best — now I’m building
            for impact, my way.
          </p>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">
          Built with curiosity, caffeine & clean code — © 2025 Srishti Gupta
        </p>

        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
