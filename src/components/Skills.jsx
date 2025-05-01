

import React from "react";
import { motion } from "framer-motion";
import "./skills.css";

const skillsData = [
  { name: "HTML5", level: 90 },
  { name: "CSS3", level: 90 },
  { name: "JavaScript", level: 70 },
  { name: "ReactJS", level: 60 },
  { name: "NodeJS", level: 70 },
  { name: "ExpressJS", level: 70 },
  { name: "MongoDB", level: 70 },
  { name: "MySQL", level: 70 },
  { name: "Java", level: 60 },
  { name: "C", level: 65 },
  { name: "Communication Skill", level: 90 },
  { name: "Problem Solving", level: 60 },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      type: "spring",
    },
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <h3>{skill.name}</h3>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span className="progress-text">{skill.level}%</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;


