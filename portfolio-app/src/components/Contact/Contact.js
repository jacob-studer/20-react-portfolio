import React from 'react';
import Nav from '../Nav/Nav'

export default function LandingPage() {
    return (
    <main>

            <Nav />

        <section className="contact-me-main">
            <h1>Hello, heres how you can reach out!</h1>
            <div className="contact-info">
                <p>Phone: 720-256-6305</p>
                <p>Email: <a href="mailto:jacob.studer.dev@gmail.com">jacob.studer.dev@gmail.com</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/jacob-studer8/">https://www.linkedin.com/in/jacob-studer8/</a></p>
            </div>
        </section>

    </main>
    );
}