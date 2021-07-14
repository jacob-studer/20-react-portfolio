import React from 'react';
import Nav from '../../components/Nav/Nav'

import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Resume() {
    return (
        

    
    
        <div>

        <Nav />

        <h1>Resume</h1>

        <section className="resume-page">
            <h3>A copy of my resume can be downloaded here:<span><a href="https://docs.google.com/document/d/1Dki8zUckteNBCX-MOlkQUYCQpIML5pYZ/"> Resume Link.</a></span></h3>
           
            <h4>A few highlights can be seen here:</h4>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et dolor eu metus accumsan euismod quis quis elit. In hac habitasse platea dictumst. Nam rhoncus turpis eget purus tempus, vel lobortis urna malesuada. Nunc nisi nibh, vulputate quis purus in, vestibulum suscipit orci.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et dolor eu metus accumsan euismod quis quis elit. In hac habitasse platea dictumst. Nam rhoncus turpis eget purus tempus, vel lobortis urna malesuada. Nunc nisi nibh, vulputate quis purus in, vestibulum suscipit orci.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et dolor eu metus accumsan euismod quis quis elit. In hac habitasse platea dictumst. Nam rhoncus turpis eget purus tempus, vel lobortis urna malesuada. Nunc nisi nibh, vulputate quis purus in, vestibulum suscipit orci.</p>
        </section>

        </div>
        
    );
}