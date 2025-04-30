// import React from "react";
// import Typewriter from "typewriter-effect";
// import Lottie from "lottie-react";
// import ninjaAnimation from "../assets/coder.json";


// import "./Hero.css"; 

// function Hero() {
  
//   return (
//     <section id="home" className="hero-section">
//       <h1 className="hero-title">
//         Hi, I'm <span className="highlight">Pradip Das</span>
//       </h1>

//       <div className="hero-subtitle">
//         <Typewriter
//           options={{
//             strings: [
//               "Frontend Developer",
//               "MERN Stack Enthusiast",
//               "React.js Developer",
//               "Passionate Coder 🚀",
//             ],
//             autoStart: true,
//             loop: true,
//             delay: 70,
//             deleteSpeed: 40,
//           }}
//         />
//       </div>
   

//       {/* Lottie Animation */}
//       <div className="animation-container">
//         <Lottie animationData={ninjaAnimation} loop={true} />
//       </div>

//       <p className="hero-description">
//         I love building modern, fast, and responsive websites with clean code and creative designs.
//       </p>

//       <a href="#projects" className="hero-button">
//         See My Work
//       </a>
//     </section>
//   );
// }
// export default Hero;

import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import Lottie from "lottie-react";
import ninjaAnimation from "../assets/coder.json";
import "./Hero.css";

function Hero() {
  useEffect(() => {
    // Emoji bombing effect
    const emojis = ['🎉', '🎈', '👏','🎉','🏆', '✨','🎉',  '👏', '🎊','✨', '🥳'];
    const container = document.querySelector('.hero-section');
    
    const createEmoji = () => {
      const emoji = document.createElement('div');
      emoji.className = 'emoji-bomb';
      emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      
      // Random position
      emoji.style.left = `${Math.random() * 100}%`;
      emoji.style.top = `${Math.random() * 100}%`;
      
      // Random animation duration
      emoji.style.animationDuration = `${Math.random() * 3 + 2}s`;
      
      container.appendChild(emoji);
      
      // Remove emoji after animation completes
      setTimeout(() => {
        emoji.remove();
      }, 3000);
    };
    
    // Create multiple emojis
    const emojiInterval = setInterval(createEmoji, 300);
    
    // Stop after 2 seconds
    setTimeout(() => {
      clearInterval(emojiInterval);
    }, 2000);
    
    return () => clearInterval(emojiInterval);
  }, []);

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

      <div className="animation-container">
        <Lottie animationData={ninjaAnimation} loop={true} />
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