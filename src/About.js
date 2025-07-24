const About = () => {
    return (  
        <div className="About">
            <h2> About </h2>
            <div className="about-content">
                <img src="me.JPG" className="picOfMe" alt="Picture of me" />
                <p className="about-text">
                    I am many things, but above all else, I am striving to be more than I was the day before. 
                    I started learning how to program early, going to a summer camp that taught Java programming when I was thirteen years old because I wanted to learn how to make Minecraft mods. 
                    I did not take a mod-making class instead, I started with “Hello World” basics and was introduced to 
                    <a href="https://www.youtube.com/watch?v=WUhOnX8qt3I" target="_blank" rel="noopener noreferrer" className="highlight-link"> Meet the Pyro </a> 
                    as it came out while I was there (This is how I keep track of the date I started programming) and fell in love for a short time with making console-level text adventure games. 
                    From there I would teach myself how to make a whole 3D game in Java using the incredible tutorials made by 
                    <a href="https://www.youtube.com/playlist?list=PL656DADE0DA25ADBB" target="_blank" rel="noopener noreferrer" className="highlight-link"> The Cherno</a>, 
                    and eventually got around to making a few Minecraft mods. In my senior year of high school was properly introduced to OOP and finally began to grasp just how powerful programming could be.
                </p>
            </div>

            <h3> Details </h3>

            <div className="bullet-points-container">
            <ul className="bullet-points">
                <li>City: New Rochelle, NY</li>
                <li>Email: NoahDGaffney@Gmail.com</li>
            </ul>
        </div>

        </div>
    );
}

export default About;
