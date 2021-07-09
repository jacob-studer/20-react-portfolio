import React from 'react';
import AboutMe from '../../views/AboutMe/AboutMe'
import Portfolio from '../../views/Portfolio/Portfolio'
import Contact from '../../views/Contact/Contact'
import Resume from '../../views/Resume/Resume'
import Home from '../../views/Home/Home'

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default function Nav() {
    return (
        <Router>
        <header>
            <nav className="navbar">
                <h2 className="nav-name">Jacob Studer</h2>
                <ul className="nav-list">
                    <li><Link to="/" className="nav-links btn">Home</Link></li>
                    <li><Link to="/aboutme" className="nav-links btn">About Me</Link></li>
                    <li><Link to="/portfolio" className="nav-links btn">Portfolio</Link></li>
                    <li><Link to="/contact" className="nav-links btn">Contact</Link></li>
                    <li><Link to="/resume" className="nav-links btn">Resume</Link></li>
                </ul>
            </nav>
        </header>

        <Switch>
          <Route path='/' component={Home} />
          <Route path='/aboutme' component={AboutMe} />  
          <Route path='/portfolio' component={Portfolio} />  
          <Route path='/contact' component={Contact} />  
          <Route path='/resume' component={Resume} />
          </Switch>

        </Router>
    );
}