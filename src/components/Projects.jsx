// import React from "react";
// import { motion } from "framer-motion";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// import Lottie from "lottie-react";
// import "./Projects.css"; 
// import blogwebapp from "../assets/blogwebapp.json";
// import flight from "../assets/flight.json";
// import music from "../assets/music.json";
// import to_do_list from "../assets/to_do_list.json";

// const projects = [
//   {
//     title: "MERN Blog Web App",
//     description: "A full-featured blogging platform built using the MERN stack.",
//     live: "https://your-deployed-blog-app-link.com",
//     github: "https://github.com/yourusername/mern-blog",
//     // img: "https://via.placeholder.com/300x180", // replace with screenshot if any
//     animation: blogwebapp,
//   },
//   {
//     title: "Airplane Booking App",
//     description: "Still in progress. Book flights with dynamic scheduling.",
//     live: null,
//     github: "https://github.com/yourusername/airplane-booking",
//     // img: "https://via.placeholder.com/300x180",
//     animation: flight,
//   },
//   {
//     title: "Music App",
//     description: "Play, pause and manage your playlist with beautiful UI.",
//     live: null,
//     github: "https://github.com/yourusername/music-app",
//     // img: "https://via.placeholder.com/300x180",
//     animation: music,
//   },
//   {
//     title: "To-Do List App",
//     description: "A minimal and fast to-do list to manage daily tasks.",
//     live: null,
//     github: "https://github.com/yourusername/todo-list",
//     // img: "https://via.placeholder.com/300x180",
//     animation: to_do_list,
//   },
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="projects-section">
//       <h2 className="projects-title">My Projects</h2>
//       <div className="projects-grid">
//         {projects.map((project, index) => (
//           <motion.div
//             className="project-card"
//             key={index}
//             initial={{ opacity: 0, y: 100 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2, duration: 0.6 }}
//             viewport={{ once: false, amount: 0.3 }}
//           >
//             <img src={project.img} alt={project.title} className="project-img" />
//             <h3>{project.title}</h3>
//             <p>{project.description}</p>
//             <div className="project-links">
//               {project.github && (
//                 <a href={project.github} target="_blank" rel="noopener noreferrer">
//                   <FaGithub />
//                 </a>
//               )}
//               {project.live && (
//                 <a href={project.live} target="_blank" rel="noopener noreferrer">
//                   <FaExternalLinkAlt />
//                 </a>
//               )}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Lottie from "lottie-react";
import "./Projects.css";

import blogwebapp from "../assets/blogwebapp.json";
import flight from "../assets/flight.json";
import music from "../assets/music.json";
import to_do_list from "../assets/to_do_list.json";

const projects = [
  {
    title: "MERN Blog Web App",
    description: "A full-featured blogging platform built using the MERN stack.",
    live: "https://mern-blog-box7.onrender.com",
    github: "https://github.com/das-pradip/mern_blog",
    animation: blogwebapp,
  },
  {
    title: "Airplane Booking App",
    description: "Still in progress. Book flights with dynamic scheduling.",
    live: null,
    github: "https://github.com/das-pradip/node_project_template",
    animation: flight,
  },
  {
    title: "Music App",
    description: "Play, pause and manage your playlist with beautiful UI.",
    live: null,
    github: "https://github.com/das-pradip/musicplayer",
    animation: music,
  },
  {
    title: "To-Do List App",
    description: "A minimal and fast to-do list to manage daily tasks.",
    live: null,
    github: "https://github.com/yourusername/todo-list",
    animation: to_do_list,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Lottie
              animationData={project.animation}
              loop
              autoplay
              className="project-lottie"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View Source Code"
                >
                  <FaGithub />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Live Demo"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
