import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import Lottie from "lottie-react";
import contactBg from "../assets/contact.json";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      {/* Background Lottie Animation */}
      <div className="contact-lottie-bg">
        <Lottie animationData={contactBg} loop={true} />
      </div>

      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let's Connect
      </motion.h2>

      <motion.div
        className="contact-links"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <a href="https://www.linkedin.com/in/pradipdas99/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="contact-icon" />
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/das-pradip" target="_blank" rel="noopener noreferrer">
          <FaGithub className="contact-icon" />
          <span>GitHub</span>
        </a>
        {/* <a href="mailto:pradipdas.dev99@gmail.com">
          <FaEnvelope className="contact-icon" />
          <span>Email</span>
        </a> */}
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pradipdas.dev99@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="contact-icon" />
          <span>Email</span>
        </a>

        <a href="tel:+919382507639">
          <FaPhone className="contact-icon" />
          <span>Phone</span>
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
