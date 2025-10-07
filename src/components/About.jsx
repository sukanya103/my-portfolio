import React from "react";
import profilePhoto from "../assets/sukanya.jpg";

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="about-container">
        <img src={profilePhoto} alt="Sukanya Mathapati" className="about-photo" />
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hi, I'm <strong>Sukanya Mathapati</strong> — a passionate React Developer
            who loves creating interactive and modern web applications with clean
            UI/UX and efficient functionality.
          </p>
          <p>
            I enjoy learning new technologies, solving real-world problems, and
            continuously improving my development skills.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
