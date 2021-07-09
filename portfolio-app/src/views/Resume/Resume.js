import React from 'react';
import Nav from '../../components/Nav/Nav'

import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Resume() {
    return (
        <Router>

    <Nav />
    
        <main>

    

        <section className="center-div">
            <Link to="https://docs.google.com/document/d/1Dki8zUckteNBCX-MOlkQUYCQpIML5pYZ/">
                <img src="../images/resume.png" alt="resume" width="600px" height="800px"></img>
            </Link>
        </section>

        </main>
        </Router>
    );
}