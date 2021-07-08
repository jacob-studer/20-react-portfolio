import React from 'react';

export default function Nav() {
    return (
        <header>
            <nav className="navbar">
                <h2 className="nav-name">Jacob Studer</h2>
                <ul className="nav-list">
                    <li><a href="../../index.html" className="nav-links btn">Home</a></li>
                    <li><a href="aboutme.html" className="nav-links btn">About Me</a></li>
                    <li><a href="portfolio.html" className="nav-links btn">Portfolio</a></li>
                    <li><a href="contact.html" className="nav-links btn">Contact</a></li>
                    <li><a href="resume.html" className="nav-links btn">Resume</a></li>
                </ul>
            </nav>
        </header>
    );
}