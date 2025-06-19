import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { useEffect } from 'react';
import Home from './Home';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import About from './About';
import Skills from './Skills';
import Navbar from './Navbar';
import Linkbar from './Linkbar';

const AppContent = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      {/* Show Navbar only if NOT on homepage */}
      {!isHome && <Navbar />}

      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about">
              <About />
              <Linkbar />
            </Route>
            <Route exact path="/education" component={Education} />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/skills" component={Skills} />
          </Switch>
        </header>
      </div>
    </>
  );
};


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

      <AppContent />
    </Router>
  );
}

export default App;
