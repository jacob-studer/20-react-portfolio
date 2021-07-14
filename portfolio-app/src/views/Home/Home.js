import React from "react";

import { Link } from "react-router-dom";

export default function Home() {
    return (
      
      <div>
        

          <div>
              <h1 className="landing-page-header">Jacob Studer, Full Stack Web Developer</h1>
          </div>
    
        <div className="center-div">
          <div className="headshot">
              <img src={require('../../images/headshot.jpg').default} alt="headshot" className="headshot-img"></img>
          </div>
    
            
            <div className="links">
              <Link to='/aboutme' className="btn">About me</Link>
              <Link to='/portfolio' className="link-margin-small btn">Portfolio</Link>
              <Link to='/contact' className="link-margin-small btn">Contact Me</Link>
              <Link to='/resume' className="btn">Resume</Link>
            </div>
        </div>
          
        </div>
          
      
    );
  }