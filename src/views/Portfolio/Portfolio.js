import React from 'react';
import Nav from '../../components/Nav/Nav'
import ProjectCard from '../../components/ProjectCard/ProjectCard'


export default function Portfolio() {

    const projects = [
        {
        title: 'Cocktail Generator App',
        url: 'https://pure-plains-23888.herokuapp.com/',
        alt: 'drink on a beach',
        image: require("../../images/drink-thumb.jpg").default
        }, 
        {
        title: 'Artist Search App',
        url: 'https://jacob-studer.github.io/Project-1-Artist-Master/',
        alt: 'concert',
        image: require("../../images/concert.jpg").default
        },
        {
        title: 'Weather Dashboard',
        url: 'https://jacob-studer.github.io/06-Server-Side-APIs-Weather-Dashboard/',
        alt: 'Weather dashboard',
        image: require("../../images/weather-thumb.jpg").default
        },
        {
        title: 'To be Determined',
        url: 'https://jacob-studer.github.io/06-Server-Side-APIs-Weather-Dashboard/',
        alt: 'To be determined',
        image: require("../../images/forest-thumb.jpg").default
        }
]



    return (

    <div>
    <Nav />
    <h1>
        My Portfolio
    </h1>
    {projects.map(project=>{
        return <ProjectCard 
        title={project.title}
        url={project.url}
        alt={project.alt}
        image={project.image}
        />
    })}
    </div>
    );
}