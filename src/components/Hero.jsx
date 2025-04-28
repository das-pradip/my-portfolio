import React from "react";
import Typewriter from "typewriter-effect";
import "./Hero.css"; 

function Hero() {
  return (
    <section id="home" className="hero-section">
      <h1 className="hero-title">
        Hi, I'm <span className="highlight">Pradip Das</span>
      </h1>

      <div className="hero-subtitle">
        <Typewriter
          options={{
            strings: [
              "Frontend Developer",
              "MERN Stack Enthusiast",
              "React.js Developer",
              "Passionate Coder 🚀",
            ],
            autoStart: true,
            loop: true,
            delay: 70,
            deleteSpeed: 40,
          }}
        />
      </div>

      <p className="hero-description">
        I love building modern, fast, and responsive websites with clean code and creative designs.
      </p>

      <a href="#projects" className="hero-button">
        See My Work
      </a>
    </section>
  );
}

export default Hero;
