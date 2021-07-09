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
                    <li><Link href="../../index.html" className="nav-links btn">Home</Link></li>
                    <li><Link href="aboutme.html" className="nav-links btn">About Me</Link></li>
                    <li><Link href="portfolio.html" className="nav-links btn">Portfolio</Link></li>
                    <li><Link href="contact.html" className="nav-links btn">Contact</Link></li>
                    <li><Link href="resume.html" className="nav-links btn">Resume</Link></li>
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