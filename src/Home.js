import Typewriter from "typewriter-effect";
import Linkbar from './Linkbar';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Noah Gaffney</h1>
      <p>
        I am a <span className="typeScroll">
          <Typewriter
            options={{
              strings: [
                'Game Dev',
                'Coder',
                'Developer',
                'Problem Solver',
                'Programmer',
                'Free Thinker',
                'ML/AI Enthusiast',
              ],
              autoStart: true,
              loop: true,
              cursor: '_',
            }}
          />
        </span>
      </p>

      <div className="home-navbar">
        <NavLink to="/" className="active-link">Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>About Me</NavLink>
        <NavLink to="/education" className={({ isActive }) => isActive ? 'active-link' : ''}>Education</NavLink>
        <NavLink to="/experience" className={({ isActive }) => isActive ? 'active-link' : ''}>Experience</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'active-link' : ''}>Projects</NavLink>
        <NavLink to="/skills" className={({ isActive }) => isActive ? 'active-link' : ''}>Skills</NavLink>
        <a
          href="/Resume2024_Noah_Gaffney.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </a>
      </div>

      <Linkbar />
    </div>
  );
};

export default Home;
