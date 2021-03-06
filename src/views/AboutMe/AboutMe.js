import React from 'react';
import Nav from '../../components/Nav/Nav'

export default function AboutMe() {
    return (

        

        <div>

        <Nav />

            <section className="about-me-center-div">
                <div className="headshot">
                    <img src={require('../../images/headshot.jpg').default} alt="headshot" className="headshot-img"></img>
                </div>

                <div className="links">
                        <p className="about-me-text text-center">Jacob Studer, Full Stack Web Developer</p>
                        <p className="about-me-text text-center">Pursuing career as a Full Stack Web Developer, certification from Denver University Full Stack Web developer course. Several years of Customer Service, Finance, and IT experience. Experience using Salesforce, ServiceNow, Fusebox, and can easily adapt to various Technology Platforms.</p>

                </div>
            </section>
        
        </div>
    );
}