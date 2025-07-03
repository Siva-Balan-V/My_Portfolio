// src/pages/About.jsx
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
const About = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`w-100 position-relative overflow-hidden ${isDark ? 'bg-dark text-light' : 'bg-light text-dark'}`}
      style={{ minHeight: '100dvh' }} // Uses entire screen height but still grows with content
    >
      {/* Background gradient */}
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

      {/* Foreground content */}
      <div className="position-relative container-fluid px-4 py-5 z-1">
        <motion.h2
          className="mb-4 text-center display-4 fw-bold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <motion.p
              className="lead"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm a passionate developer focused on building clean, intuitive, and scalable web
              applications. With a strong foundation in Python and full-stack web technologies, I enjoy
              turning ideas into real-world applications.
            </motion.p>

            <motion.p
              className="mt-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I believe in continuous learning, open-source collaboration, and developing impactful
              solutions that blend functionality with elegant design.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
