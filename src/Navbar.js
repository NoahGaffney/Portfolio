import { NavLink, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/'; // detect homepage

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Me' },
    { to: '/education', label: 'Education' },
    { to: '/experience', label: 'Experience' },
    { to: '/projects', label: 'Projects' },
    { to: '/skills', label: 'Skills' },
  ];

  return (
    <nav className={`navbar ${isHome ? 'hidden-navbar' : ''}`}>
      <h1>Noah Gaffney</h1>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`links ${menuOpen ? "open" : ""}`}>
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            exact
            to={to}
            activeClassName="active-link"
          >
            {label}
          </NavLink>
        ))}
        <a href="/Resume2024_Noah_Gaffney.pdf" target="_blank" rel="noopener noreferrer">
          CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
