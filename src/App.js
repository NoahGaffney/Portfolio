import Home from './Home';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import About from './About';
import Skills from './Skills';
import Navbar from './Navbar';
import Linkbar from './Linkbar'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Helmet } from "react-helmet";

function App() {
  return (
    <Router>
      <Helmet>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SWDJPMYT38"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SWDJPMYT38');
          `}
        </script>
      </Helmet>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/">
              <Home/>
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
