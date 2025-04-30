import React from "react";
import "./Footer.css";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Made with <FaHeart className="footer-heart" /> by{" "}
        <a href="https://www.linkedin.com/in/pradipdas99/" target="_blank" rel="noopener noreferrer">
          Pradip Das
        </a>{" "}
        | &copy; {new Date().getFullYear()} All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
