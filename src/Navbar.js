import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <h1>Noah Gaffney</h1>

      <div className="menu" onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </div>

      <div className={`links ${isOpen ? 'open' : ''}`}>
        <NavLink exact to="/" activeClassName="active-link" onClick={() => setIsOpen(false)}>Home</NavLink>
        <NavLink to="/about" activeClassName="active-link" onClick={() => setIsOpen(false)}>About Me</NavLink>
        <NavLink to="/education" activeClassName="active-link" onClick={() => setIsOpen(false)}>Education</NavLink>
        <NavLink to="/experience" activeClassName="active-link" onClick={() => setIsOpen(false)}>Experience</NavLink>
        <NavLink to="/projects" activeClassName="active-link" onClick={() => setIsOpen(false)}>Projects</NavLink>
        <NavLink to="/skills" activeClassName="active-link" onClick={() => setIsOpen(false)}>Skills</NavLink>
        <a href="/Noah_Gaffney_Resume_2025.pdf" target="_blank" rel="noopener noreferrer">CV</a>
      </div>
    </nav>
  );
};

export default Navbar;
