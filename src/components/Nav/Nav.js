import React from 'react';


import { Link } from "react-router-dom";

export default function Nav() {
    return (
        
            <nav className="navbar">
                <h2 className="nav-name">Jacob Studer</h2>
                <ul className="nav-list">
                    <li><Link to="/20-react-portfolio/" className="nav-links btn">Home</Link></li>
                    <li><Link to="/20-react-portfolio/aboutme" className="nav-links btn">About Me</Link></li>
                    <li><Link to="/20-react-portfolio/portfolio" className="nav-links btn">Portfolio</Link></li>
                    <li><Link to="/20-react-portfolio/contact" className="nav-links btn">Contact</Link></li>
                    <li><Link to="/20-react-portfolio/resume" className="nav-links btn">Resume</Link></li>
                </ul>
            </nav>
        

       

     
    );
}