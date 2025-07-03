import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Home = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`w-100 ${isDark ? 'bg-dark text-light' : 'bg-light text-dark'}`}
      style={{ position: 'relative', minHeight: '100dvh', overflow: 'hidden' }}
    >
      {/* Background Gradient Layer */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: isDark
            ? 'radial-gradient(circle at top left, #0f2027, #203a43, #2c5364)'
            : 'radial-gradient(circle at top left, #dfe9f3, #ffffff)',
          opacity: 0.25,
          zIndex: 0,
        }}
      ></div>

      {/* Content Container */}
      <div
        className="container d-flex flex-column justify-content-center align-items-center text-center px-4 py-5"
        style={{ minHeight: '100dvh', zIndex: 1, position: 'relative' }}
      >
        <h1 className="display-4 fw-bold mb-3">Welcome to My Portfolio</h1>
        <p className="lead mb-4">
          I’m a passionate developer building web experiences with Python, React, and more.
        </p>
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
