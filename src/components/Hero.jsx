
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from 'vanta/src/vanta.net';


import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import ninjaAnimation from "../assets/coder.json";
import "./Hero.css";

function Hero() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    // Initialize Vanta Background
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          color: 0xff0000,
          // color: 0x00ff00 ,
          // color: 0xff3f81,
          backgroundColor: 0x0a192f,
          // backgroundColor: 0x23153c,
          points: 13.0,
          maxDistance: 22.0,
          spacing: 18.0,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          // color: 0xe00000
        })
      );
    }

    // Emoji bombing effect
    const emojis = ["🎉", "🎈", "👏", "🏆", "✨", "🎊", "🥳"];
    const container = document.querySelector(".hero-section");

    const createEmoji = () => {
      const emoji = document.createElement("div");
      emoji.className = "emoji-bomb";
      emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.style.left = `${Math.random() * 100}%`;
      emoji.style.top = `${Math.random() * 100}%`;
      emoji.style.animationDuration = `${Math.random() * 3 + 2}s`;
      container.appendChild(emoji);
      setTimeout(() => emoji.remove(), 3000);
    };

    const emojiInterval = setInterval(createEmoji, 300);
    setTimeout(() => clearInterval(emojiInterval), 2000);

    return () => {
      if (vantaEffect) vantaEffect.destroy();
      clearInterval(emojiInterval);
    };
  }, [vantaEffect]);

  return (
    <section id="home" className="hero-section" ref={vantaRef}>
      <h1 className="hero-title">
        Hi, I'm <span className="highlight">Pradip Das</span>
      </h1>

      <div className="hero-subtitle">
        <Typewriter
          words={["Web Developer", "React Developer", "MERN Stack Enthusiast"]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>

      <div className="animation-container">
        <Lottie animationData={ninjaAnimation} loop={true} />
      </div>

      <p className="hero-description">
        I love building modern, fast, and responsive websites with clean code and creative designs.
      </p>

      <div className="hero-buttons-container">
        <a href="#projects" className="hero-button">
          See My Work
        </a>
        <a href="/PradipdasCV_FullStack.pdf" className="hero-button" download>
          See My Resume
        </a>
      </div>

    </section>
  );
}

export default Hero;
