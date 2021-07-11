import React from 'react';
import Nav from '../../components/Nav/Nav'

import { Link } from "react-router-dom";
import ContactForm from '../../components/ContactForm/ContactForm';

export default function Contact() {
    return (
    
//formspree.io


    <div>

    <Nav />

        <section className="contact-me-main">
            <h1>Hello, heres how you can reach out!</h1>
            <div className="contact-info">
                <p>Phone: 720-256-6305</p>
                <p>Email: <Link to="mailto:jacob.studer.dev@gmail.com">jacob.studer.dev@gmail.com</Link></p>
                <p>LinkedIn: <Link to="https://www.linkedin.com/in/jacob-studer8/">https://www.linkedin.com/in/jacob-studer8/</Link></p>
            </div>
        </section>

    <ContactForm />

    </div>
    );
}