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
        
        //all the values would be props, url prop, title prop, etc, 
    
    

    <div>

    <Nav />

    {projects.map(project=>{
        return <ProjectCard 

        title={project.title}
        url={project.url}
        alt={project.alt}
        image={project.image}
        
        />
    })}

    
        
            {/* <div>
            <h1 className="portfolio-title">Portfolio</h1>
            </div>

        <section className="center-div">

            <div className="horizontal-center-1">
                <div className="container">
                <Link to="https://pure-plains-23888.herokuapp.com/" className="portfolio-link"><img src="../images/drink-thumb.jpg" alt="drinks on a beac thumbnail" width="400px" height="200px"></img></Link>
                <div className="text-block">
                    <Link to="https://pure-plains-23888.herokuapp.com/" className="text-dec-none"><p>Cocktail Generator App</p></Link>
                </div>
                </div>
                <div className="container">
                <Link to="https://jacob-studer.github.io/Project-1-Artist-Master/" className="portfolio-link"><img src="../images/concert.jpg" alt="concert thumbnail" width="400px" height="200px"></img></Link>
                <div className="text-block">
                    <Link to="https://jacob-studer.github.io/Project-1-Artist-Master/" className="text-dec-none"><p>Artist Search App</p></Link>
                </div>
                </div>
            </div>

            <div className="horizontal-center-2">
                <div className="container">
                <Link to="https://jacob-studer.github.io/06-Server-Side-APIs-Weather-Dashboard/" className="portfolio-link"><img src="../images/weather-thumb.jpg" alt="weather thumbnail" width="400px" height="200px"></img></Link>
                <div className="text-block">
                    <Link to="https://jacob-studer.github.io/06-Server-Side-APIs-Weather-Dashboard/" className="text-dec-none"><p>Weather Dashboard</p></Link>
                </div>
                </div>
                <div className="container">
                <Link to="#" className="portfolio-link"><img src="../images/forest-thumb.jpg" alt="forest thumbnail" width="400px" height="200px"></img></Link>
                <div className="text-block">
                    <Link to="#" className="text-dec-none"><p>To Be Determined</p></Link>
                </div>
                </div>
            </div>

        </section> */}

        
    </div>
    
    );
}