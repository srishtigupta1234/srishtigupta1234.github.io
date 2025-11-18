import React, { useState, useEffect } from "react";
import "./ScrollToTop.css"; 

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
       {visible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <i className="fa-solid fa-arrow-up"></i>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
