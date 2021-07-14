import React from "react";

import Home from './views/Home/Home'
import AboutMe from './views/AboutMe/AboutMe'
import Portfolio from './views/Portfolio/Portfolio'
import Contact from './views/Contact/Contact'
import Resume from './views/Resume/Resume'


import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      

      <Switch>
          <Route exact path='/20-react-portfolio/' component={Home} />
          <Route path='/20-react-portfolio/aboutme' component={AboutMe} />  
          <Route path='/20-react-portfolio/portfolio' component={Portfolio} />  
          <Route path='/20-react-portfolio/contact' component={Contact} />  
          <Route path='/20-react-portfolio/resume' component={Resume} />
      </Switch>

  </Router>
  );
}

export default App;
