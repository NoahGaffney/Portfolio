import { Link } from 'react-router-dom';
import React, { useState } from "react"; 

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="navbar">
            <h1> Noah Gaffney</h1>
            <div className="menu" onClick = {() => {
                setMenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`links ${menuOpen ? "open" : ""}`}>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/education">Education</Link>
                <Link to="/experience">Experience</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/skills">Skills</Link>
                <a href="/Resume2024_Noah_Gaffney.pdf" target="_blank" rel="noopener noreferrer">CV</a>
            </div>
        </nav>
    );
}

export default Navbar;