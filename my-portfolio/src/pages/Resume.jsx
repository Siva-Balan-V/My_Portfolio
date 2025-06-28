// src/pages/Resume.jsx
const Resume = () => (
  <div>
    <h2 className="mb-3">Resume</h2>
    <a
      href="/Sivabalan_Resume.pdf"
      download
      className="btn btn-primary mb-3"
    >
      Download Resume
    </a>
    <div style={{ height: '80vh' }}>
      <iframe
        src="/Sivabalan_Resume.pdf"
        width="100%"
        height="100%"
        title="Sivabalan's Resume"
        style={{ border: '1px solid #ccc', borderRadius: '8px' }}
      ></iframe>
    </div>
  </div>
);

export default Resume;
// This component displays a link to download the resume and an embedded PDF viewer for the resume file.