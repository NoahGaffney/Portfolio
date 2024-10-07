import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className = "navbar">
            <h1> Noah Gaffney</h1>
            <div classname = "links">
            <Link to="/">Home</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/education">Education</Link>
                    <Link to="/experience">Experience</Link>
                    <Link to="/prodjects">Prodjects</Link>
                    <Link to="/skills">Skills</Link>
                <a href="/Resume2024_Noah_Gaffney.pdf" target="_blank" rel="noopener noreferrer">CV</a>
            </div>
        </nav>
    );
}
 
export default Navbar;