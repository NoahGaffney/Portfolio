import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className = "navbar">
            <h1> Noah Gaffney</h1>
            <div classname = "links">
                <a href ="/">Home</a>
                <a href ="/about">About</a>
                <a href ="/education">Education</a>
                <a href ="/experience">Experience</a>
                <a href ="/prodjects">Prodjects</a>
                <a href ="/skills">Skills</a>
                <a href="/Resume2024_Noah_Gaffney.pdf" target="_blank" rel="noopener noreferrer">CV</a>
            </div>
        </nav>
    );
}
 
export default Navbar;