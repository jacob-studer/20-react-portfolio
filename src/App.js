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
    <Router basename={process.env.PUBLIC_URL}>
      

      <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/aboutme' component={AboutMe} />  
          <Route path='/portfolio' component={Portfolio} />  
          <Route path='/contact' component={Contact} />  
          <Route path='/resume' component={Resume} />
      </Switch>

  </Router>
  );
}

export default App;
