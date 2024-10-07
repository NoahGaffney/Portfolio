import Home from './Home';
import Education from './Education';
import Experience from './Experience';
import Prodjects from './Prodjects';
import About from './About';
import Skills from './Skills';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {


  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/education">
            <Education/>
          </Route>
          <Route exact path="/experience">
            <Experience/>
          </Route>
          <Route exact path="/prodjects">
            <Prodjects/>
          </Route>
          <Route exact path="/skills">
            <Skills/>
          </Route>
        </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
