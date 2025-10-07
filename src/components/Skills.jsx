import React from "react";

function Skills() {
  const skills = [
    "React.js",
    "JavaScript (ES6+)",
    "HTML5 / CSS3",
    "MongoDB",
    "Express.js",
    "Node.js",
    "Git & GitHub",
  ];

  return (
    <section id="skills" className="section skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={i} className="skill-box">{skill}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
