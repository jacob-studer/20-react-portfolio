import React from 'react';


import { Link } from "react-router-dom";

export default function Nav() {
    return (
        
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
        

       

     
    );
}