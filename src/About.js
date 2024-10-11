import Navbar from './Navbar';
import Linkbar from './Linkbar'; 

const About = () => {
    return (  
        <div className="About">
            <Navbar/>
            <h2> About </h2>
            <img src="me.JPG" className="picOfMe" />


            <Linkbar/>
        </div>

    );
}
 
export default About;