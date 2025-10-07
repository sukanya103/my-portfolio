import React from "react";

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <h2>Contact Me</h2>
      <p>Let's connect! You can reach me via email or LinkedIn.</p>
      <div className="contact-links">
        <a href="mailto:sukanya@example.com" className="btn-primary">Email Me</a>
        <a href="https://www.linkedin.com/in/sukanyamathapati" target="_blank" rel="noopener noreferrer" className="btn-secondary">
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
