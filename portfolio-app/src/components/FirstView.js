import React from 'react';

export default function FirstView() {
    return (
    <main className="center-div">


        <div className="headshot">
            <img src="images/headshot.jpg" alt="headshot" className="headshot-img"></img>
        </div>

        <div className="links">
            
                <a href="public/html/aboutme.html" className="link-margin-small btn">About me</a>
                <a href="public/html/portfolio.html" className="link-margin-large btn">Portfolio</a>
                <a href="public/html/contact.html" className="link-margin-large btn">Contact</a>
                <a href="public/html/resume.html" className="link-margin-small btn">Resume</a>
            
        </div>

    </main>
    );
}