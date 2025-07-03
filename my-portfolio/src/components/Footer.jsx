import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <footer
      className={`text-center py-4 mt-5 ${isDark ? 'bg-dark text-light' : 'bg-light text-dark'}`}
      style={{
        borderTop: isDark ? '1px solid #495057' : '1px solid #dee2e6',
      }}
    >
      <div className="mb-3">
        <a
          href="https://github.com/Siva-Balan-V"
          target="_blank"
          rel="noopener noreferrer"
          className={`mx-3 fs-4 ${isDark ? 'text-light' : 'text-dark'}`}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/sivabalan51103"
          target="_blank"
          rel="noopener noreferrer"
          className={`mx-3 fs-4 ${isDark ? 'text-light' : 'text-dark'}`}
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:sivabalan2005@gmail.com"
          className={`mx-3 fs-4 ${isDark ? 'text-light' : 'text-dark'}`}
        >
          <FaEnvelope />
        </a>
      </div>
      <small>&copy; {new Date().getFullYear()} Sivabalan V. All rights reserved.</small>
    </footer>
  );
};

export default Footer;
