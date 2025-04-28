import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Pradip Das</div>

      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
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

      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </nav>
  );
}

export default Navbar;


