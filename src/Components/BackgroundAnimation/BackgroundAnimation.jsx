// src/components/BackgroundAnimation.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import * as flubber from "flubber";
import "./BackgroundAnimation.css";

const BackgroundAnimation = () => {
  const blobRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    const particlesContainer = particlesRef.current;

    // === Generate stars ===
    for (let i = 0; i < 280; i++) {
      const star = document.createElement("div");
      star.classList.add("particle", "star");

      const size = Math.random() * 2.5 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDuration = `${3 + Math.random() * 3}s`;
      star.style.animationDelay = `${Math.random() * 5}s`;

      particlesContainer.appendChild(star);
    }

    // === Generate bubbles ===
    for (let i = 0; i < 30; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add("particle", "bubble");

      const size = Math.random() * 12 + 6;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.top = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${8 + Math.random() * 8}s`;

      particlesContainer.appendChild(bubble);
    }

    // === Blob morph animation ===
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
        duration: 6,
        ease: "power2.inOut",
        onUpdate: function () {
          blob.setAttribute("d", interpolator(this.targets()[0].i));
        }
      });

      current = next;
    };

    const interval = setInterval(animateBlob, 7000);

    // === 🎮 Interactivity ===
    let lastMove = 0;
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastMove < 50) return; // throttle
      lastMove = now;

      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 30;
      const y = (clientY / window.innerHeight - 0.5) * 30;

      // Parallax blob movement
      gsap.to(blob, { x, y, duration: 1, ease: "power2.out" });

      // Repel nearby particles
      Array.from(particlesContainer.children).forEach((particle) => {
        const rect = particle.getBoundingClientRect();
        const dx = rect.left + rect.width / 2 - clientX;
        const dy = rect.top + rect.height / 2 - clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          gsap.to(particle, {
            x: dx * 0.3,
            y: dy * 0.3,
            duration: 0.6,
            ease: "power2.out"
          });
        } else {
          gsap.to(particle, { x: 0, y: 0, duration: 1.5, ease: "power1.out" });
        }
      });
    };

    const handleClick = (e) => {
      // Burst bubbles on click
      for (let i = 0; i < 8; i++) {
        const burst = document.createElement("div");
        burst.classList.add("particle", "bubble");
        burst.style.width = "8px";
        burst.style.height = "8px";
        burst.style.left = `${e.clientX}px`;
        burst.style.top = `${e.clientY}px`;
        particlesContainer.appendChild(burst);

        gsap.to(burst, {
          x: (Math.random() - 0.5) * 250,
          y: (Math.random() - 0.5) * 250,
          opacity: 0,
          duration: 2,
          ease: "power2.out",
          onComplete: () => burst.remove(),
        });
      }
    };

    // Support touch devices
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        handleMouseMove(e.touches[0]);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <>
      <div className="blob-container">
        <svg id="blobs" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff4d4d" />
              <stop offset="100%" stopColor="#4d79ff" />
            </linearGradient>
          </defs>
          <path ref={blobRef} id="blob" fill="url(#grad1)" d="" />
        </svg>
      </div>

      <div className="particles" ref={particlesRef}></div>
    </>
  );
};

export default BackgroundAnimation;
