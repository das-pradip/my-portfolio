

// import React from "react";
// import "./Skills.css";

// const skills = [
//   { name: "HTML5", level: 90 },
//   { name: "CSS3", level: 90 },
//   { name: "JavaScript", level: 70 },
//   { name: "ReactJS", level: 60 },
//   { name: "NodeJS", level: 70 },
//   { name: "ExpressJS", level: 70 },
//   { name: "MongoDB", level: 70 },
//   { name: "MySQL", level: 70 },
//   { name: "Java", level: 60 },
//   { name: "C", level: 65 },
//   { name: "Communication Skill", level: 90 },
//   { name: "Problem Solving", level: 60 },
// ];

// function Skills() {
//   return (
//     <section id="skills" className="skills-section">
//       <h2 className="section-title">My Skills</h2>
//       <div className="skills-grid">
//         {skills.map((skill, index) => (
//           <div className="skill-card" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
//             <span className="skill-name">{skill.name}</span>
//             <div className="skill-bar">
//               <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
//             </div>
//             <span className="skill-percent">{skill.level}%</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Skills;

import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

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

// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import "./Skills.css"; // Optional: for custom styles

// const skills = [
//   { name: "HTML5", level: "90%" },
//   { name: "CSS3", level: "90%" },
//   { name: "JavaScript", level: "70%" },
//   { name: "ReactJS", level: "60%" },
//   { name: "NodeJS", level: "70%" },
//   { name: "Express JS", level: "70%" },
//   { name: "MongoDB", level: "70%" },
//   { name: "MySQL", level: "70%" },
//   { name: "Java", level: "60%" },
//   { name: "C", level: "65%" },
//   { name: "Communication", level: "90%" },
//   { name: "Problem Solving", level: "60%" },
// ];

// const SkillBar = ({ name, level }) => {
//   const { ref, inView } = useInView({
//     triggerOnce: false, 
//     threshold: 0.1,
//   });

//   return (
//     <motion.div
//       ref={ref}
//       className="skill-box"
//       initial={{ opacity: 0, y: 50 }}
//       animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h4>{name}</h4>
//       <div className="bar-bg">
//         <motion.div
//           className="bar-fill"
//           style={{ width: inView ? level : "0%" }}
//           transition={{ duration: 1 }}
//         />
//       </div>
//     </motion.div>
//   );
// };

// const Skills = () => {
//   return (
//     <section id="skills" className="skills-section">
//       <h2>My Skills</h2>
//       <div className="skills-grid">
//         {skills.map((skill, index) => (
//           <SkillBar key={index} name={skill.name} level={skill.level} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;
