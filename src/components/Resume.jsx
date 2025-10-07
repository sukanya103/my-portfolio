import React, { useState } from "react";

function Resume() {
  const [open, setOpen] = useState(false);
  const resumeFile = process.env.PUBLIC_URL + "/Sukanya_resume1.pdf";

  return (
    <section id="resume" className="section resume-section">
      <h2>Resume</h2>
      <p>View or download my resume below:</p>
      <div className="resume-buttons">
        <button onClick={() => setOpen(true)} className="btn-primary">View</button>
        <a href={resumeFile} download className="btn-secondary">Download</a>
      </div>

      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setOpen(false)}>
              &times;
            </button>
            <iframe src={resumeFile} title="Resume" width="100%" height="600px" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Resume;
