// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import "./App.css"; // still include empty or basic styles

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//     </>
//   );
// }

// export default App;
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import "./App.css";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about" style={{ height: "auto" }}>
        <h1>About Section</h1>
        <About />
      </section>
      <section id="skills" style={{ height: "auto" }}>
        <h1>Skills Section</h1>
        <Skills />
      </section>
      <section id="projects" style={{ height: "auto" }}>
        <h1>Projects Section</h1>
        <Projects />
      </section>
      <section id="contact" style={{ height: "100vh" }}>
        <h1>Contact Section</h1>
      </section>
    </>
  );
}

export default App;


