// src/components/BackgroundAnimation.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import * as flubber from "flubber";
import "./BackgroundAnimation.css";

const BackgroundAnimation = () => {
  const blobRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    // Generate particles
    const particlesContainer = particlesRef.current;
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");

      const size = Math.random() * 5 + 3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${10 + Math.random() * 10}s`;

      particlesContainer.appendChild(particle);
    }

    // Animate blob
    const blobs = [
      "M421,325Q410,400,357,468Q304,536,237,505Q170,474,139.5,408.5Q109,343,151,272Q193,201,251,156Q309,111,373.5,137.5Q438,164,429.5,232Q421,300,421,325Z",
      "M397,321Q396,392,339,431.5Q282,471,222,452Q162,433,139.5,380.5Q117,328,149.5,267Q182,206,239,164Q296,122,352,155.5Q408,189,402.5,244.5Q397,300,397,321Z",
      "M412,318Q409,366,362,413Q315,460,254.5,468Q194,476,160,424Q126,372,126.5,313.5Q127,255,160,190.5Q193,126,253,148Q313,170,361,204Q409,238,412,278Q412,318,412,318Z",
    ];

    let current = 0;
    const blob = blobRef.current;

    const animateBlob = () => {
      const next = (current + 1) % blobs.length;
      const interpolator = flubber.interpolate(blobs[current], blobs[next]);
      gsap.to({ i: 0 }, {
        i: 1,
        duration: 4,
        ease: "power2.inOut",
        onUpdate: function () {
          blob.setAttribute("d", interpolator(this.targets()[0].i));
        }
      });
      current = next;
    };

    const interval = setInterval(animateBlob, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="blob-container">
        <svg id="blobs" viewBox="0 0 1000 1000">
          <path ref={blobRef} id="blob" fill="#ffb800" d="" />
        </svg>
      </div>

      <div className="particles" ref={particlesRef}></div>
    </>
  );
};

export default BackgroundAnimation;
