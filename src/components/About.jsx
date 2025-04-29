import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import bubbleSound from "../assets/bubble.mp3";

function About() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    audioRef.current = new Audio(bubbleSound);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.05;
    audioRef.current.play();

    return () => {
      audioRef.current.pause();
    };
  }, []);

  const toggleSound = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="about" className="about-section">
      <div className="bubbles-container">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="bubble"></div>
        ))}
      </div>

      <div className="about-content">
        {/* <button onClick={toggleSound} className="sound-toggle">
          {isPlaying ? "🔊 Sound On" : "🔇 Sound Off"}
        </button> */}
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          Hello! I'm <strong>Pradip Das</strong>, a passionate Frontend Developer
          who loves crafting interactive and visually appealing web experiences.
          <br /><br />
          I specialize in React.js, Tailwind CSS, and the MERN stack. My goal is to build smooth, responsive websites that bring ideas to life. 💡🚀
        </p>
       
      </div>
      <button onClick={toggleSound} className="sound-toggle">
          {isPlaying ? "🔊 Sound On" : "🔇 Sound Off"}
        </button>
    </section>
  );
}

export default About;
