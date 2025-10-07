import React from "react";

function Projects() {
  const projects = [
    {
      title: "Student Query Management System",
      description:
        "A MERN stack app where students can raise and track queries; admin can manage and resolve them.",
      link: "https://github.com/sukanya103/student-query-system",
    },
    {
      title: "Job Application Tracker",
      description:
        "A React app to track and manage job applications efficiently with status updates.",
      link: "https://github.com/sukanya103/Job-Application-Tracker",
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p, index) => (
          <div key={index} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
