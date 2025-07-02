import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Home = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`d-flex align-items-center justify-content-center px-4 py-5 ${isDark ? 'bg-dark text-light' : 'bg-light text-dark'}`}
      style={{
        minHeight: '100dvh',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Gradient Background */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 z-0"
        style={{
          background: isDark
            ? 'radial-gradient(circle at top left, #0f2027, #203a43, #2c5364)'
            : 'radial-gradient(circle at top left, #dfe9f3, #ffffff)',
          opacity: 0.25
        }}
      ></div>

      {/* Content */}
      <div className="position-relative z-1 text-center">
        <h1 className="display-4 fw-bold mb-3">Welcome to My Portfolio</h1>
        <p className="lead mb-4">I’m a passionate developer building web experiences with Python, React, and more.</p>
        <a
          href="projects"
          className={`btn ${isDark ? 'btn-outline-light' : 'btn-outline-dark'} rounded-pill px-4 shadow-sm`}
        >
          View Projects
        </a>
      </div>
    </div>
  );
};

export default Home;
