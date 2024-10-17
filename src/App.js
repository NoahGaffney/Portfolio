import Home from './Home';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import About from './About';
import Skills from './Skills';
import Navbar from './Navbar';
import Linkbar from './Linkbar'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {


  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Home/>
            <Linkbar/>
          </Route>
          <Route exact path="/about">
          <Navbar/>
            <About/>
            <Linkbar/>
          </Route>
          <Route exact path="/education">
          <Navbar/>
            <Education/>
          </Route>
          <Route exact path="/experience">
          <Navbar/>
            <Experience/>
          </Route>
          <Route exact path="/projects">
          <Navbar/>
            <Projects/>
          </Route>
          <Route exact path="/skills">
          <Navbar/>
            <Skills/>
          </Route>
        </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
