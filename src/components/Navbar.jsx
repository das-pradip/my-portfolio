
import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navbarRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close menu when scrolling
  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      // Active section detection
      const sections = ["hero", "about", "skills", "projects", "contact"];
      let current = "";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = id;
          }
        }
      });

      setActiveSection(current);

      // Close menu on scroll
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (Math.abs(st - lastScrollTop) > 5 && isOpen) {
        setIsOpen(false);
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Pradip Das</div>

      <div className={`navbar-backdrop ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(false)} />

      <ul className={`navbar-links ${isOpen ? "open" : ""}`} ref={navbarRef}>
        <li>
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className={activeSection === "skills" ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </li>
      </ul>

      <div 
        className={`hamburger ${isOpen ? "open" : ""}`} 
        onClick={toggleMenu}
        ref={hamburgerRef}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </nav>
  );
}

export default Navbar;