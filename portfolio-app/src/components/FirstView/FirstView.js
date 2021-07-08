import React from 'react';
import AboutMe from '../AboutMe/AboutMe'


export default function FirstView() {
    return (
    <main className="center-div">


        <div className="headshot">
            <img src="" alt="headshot" className="headshot-img"></img>
        </div>

        <div className="links">
            
                <button onClick={<AboutMe />} className="link-margin-small btn">About me</button>
                <a href="public/html/portfolio.html" className="link-margin-large btn">Portfolio</a>
                <a href="public/html/contact.html" className="link-margin-large btn">Contact</a>
                <a href="public/html/resume.html" className="link-margin-small btn">Resume</a>
            
        </div>

    </main>
    );
}