import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <footer className={`text-center py-3 mt-auto ${isDark ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <div className="container">
        <small>
          &copy; {new Date().getFullYear()} Sivabalan V All rights reserved. |{' '}
          <a
            href="https://github.com/Siva-Balan-V"
            className={`text-decoration-none ${isDark ? 'text-info' : 'text-primary'}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{' '}
          |{' '}
          <a
            href="mailto:your.email@example.com"
            className={`text-decoration-none ${isDark ? 'text-info' : 'text-primary'}`}
          >
            Contact
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
