import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import icon2 from "../../assets/icon2.png";
import toggle from "../../assets/toggle.svg";
import close from "../../assets/close.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const openMenu = () => {
    setMenuOpen(true);
    document.body.classList.add("menu-open");
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove("menu-open");
  };

  return (
    <div className="nav">
      <img src={icon2} alt="logo" className="logo" />

      {/* Only show open menu icon when menu is closed */}
      {!menuOpen && (
        <img
          src={toggle}
          onClick={openMenu}
          alt="menu"
          className="nav-mob-open"
        />
      )}

      {/* Only show close icon when menu is open */}
      {menuOpen && (
        <img
          src={close}
          onClick={closeMenu}
          alt="close"
          className="nav-mob-close"
        />
      )}

      <ul ref={menuRef} className={`nav-menu ${menuOpen ? "active" : ""}`}>
        {["hero", "about", "experience", "skills", "education", "projects", "contact"].map((item) => (
          <li key={item}>
            <AnchorLink
              className="anchor-link"
              offset={50}
              href={`#${item}`}
              onClick={closeMenu}
            >
              <p>{item.charAt(0).toUpperCase() + item.slice(1)}</p>
            </AnchorLink>
          </li>
        ))}
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};


export default Navbar;
