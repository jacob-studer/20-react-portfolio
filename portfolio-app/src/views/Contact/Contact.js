import React from 'react';
import Nav from '../../components/Nav/Nav'

import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Contact() {
    return (
    <Router>

<Nav />

    <main>

            

        <section className="contact-me-main">
            <h1>Hello, heres how you can reach out!</h1>
            <div className="contact-info">
                <p>Phone: 720-256-6305</p>
                <p>Email: <Link to="mailto:jacob.studer.dev@gmail.com">jacob.studer.dev@gmail.com</Link></p>
                <p>LinkedIn: <Link to="https://www.linkedin.com/in/jacob-studer8/">https://www.linkedin.com/in/jacob-studer8/</Link></p>
            </div>
        </section>

    </main>
    </Router>
    );
}