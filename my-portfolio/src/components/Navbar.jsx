import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <nav className={`navbar navbar-expand-lg ${isDark ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} shadow`}>
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">My Portfolio</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resume">Resume</Link>
            </li>
          </ul>
          

          {/* Theme toggle button on the right */}
          <div className="d-flex align-items-center">
            
            <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
