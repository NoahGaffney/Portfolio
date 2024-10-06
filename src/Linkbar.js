const Linkbar = () => {
    return (  
        <nav className="linkbar">
            <div className="socialLinks">
                <a href="https://github.com/NoahDGaff" target="_blank" rel="noopener noreferrer">
                    <img src="github.png" alt="Github" className="png" />
                </a>
                <a href="https://www.linkedin.com/in/noah-micheal-gaffney/" target="_blank" rel="noopener noreferrer">
                    <img src="linkedin.png" alt="LinkedIn" className="png" />
                </a>
                <a href="https://www.youtube.com/channel/UCtgV94mC0rGCtNWfggfpTyA" target="_blank" rel="noopener noreferrer">
                    <img src="youtube.png" alt="YouTube" className="png" />
                </a>
            </div>
        </nav>
    );
}

export default Linkbar;
