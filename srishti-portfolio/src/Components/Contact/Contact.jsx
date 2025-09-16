import React, { useEffect } from 'react';
import "./Contact.css";
import email from "../../assets/email.svg";
import linkedin from "../../assets/linked.png";
import github from "../../assets/github.png";
import location from "../../assets/location.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "e5ed8f79-c17e-4104-97b6-67993bb39154");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      event.target.reset();
    }
  };

  return (
    <div id="contact" className="getInTouch">
      <div className="git-title" data-aos="fade-up">
        <h1>GET IN <span>TOUCH</span></h1>
      </div>
      <div className="department">
        <div className="git-left" data-aos="fade-right">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything you want me to work on. You can contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact">
              <img src={email} alt="Email Icon" />
              <p>srishtigupta97527@gmail.com</p>
            </div>
            <div className="contact">
              <img src={linkedin} alt="LinkedIn Icon" />
              <p>
                <a href="https://www.linkedin.com/in/srishti-gupta-ab6092323/" target="_blank" rel="noreferrer">
                  www.linkedin.com/in/srishti-gupta-ab6092323
                </a>
              </p>
            </div>
            <div className="contact">
              <img src={github} alt="GitHub Icon" />
              <p>
                <a href="https://github.com/srishtigupta1234" target="_blank" rel="noreferrer">
                  github.com/srishtigupta1234
                </a>
              </p>
            </div>
            <div className="contact">
              <img src={location} alt="Location Icon" />
              <p>Madhya Pradesh, India</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right" data-aos="fade-left">
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />

          <label>Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" required />

          <label>Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your message" required></textarea>

          <button type="submit" className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
