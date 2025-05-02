
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import Chatbot from "./components/Chatbot";


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
      <section id="contact" style={{ height: "auto" }}>
        <h1>Contact Section</h1>
        <Contact />
      </section>
      <section id="contact" style={{ height: "auto" }}>
        {/* <h1>Contact Section</h1> */}
        <Chatbot />
        <Footer />
      </section>
    </>
  );
}

export default App;


