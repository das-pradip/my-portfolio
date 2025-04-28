// import React from "react";
// import "./Hero.css";

// // import "./Hero.css";

// const Hero = () => {
//   return (
//     <section className="hero" id="home">
//       <h1>Hello, I'm <span>Pradip Das</span></h1>
//       <p>A Frontend Developer passionate about building beautiful websites.</p>
//       <a href="#projects" className="cta-button">See My Work</a>
//     </section>
//   );
// };

// export default Hero;
import React from "react";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Pradip Das</h1>
      <div className="text-xl md:text-3xl text-gray-700">
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
            delay: 75,
            deleteSpeed: 50,
          }}
        />
      </div>
    </div>
  );
}

export default Hero;

