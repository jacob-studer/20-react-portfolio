import React from 'react';


//all the values would be props, url prop, title prop, etc, 

export default function ProjectCard( {url, title}) {
    return (
    
    <div className="horizontal-center-1">
    <div className="container">
    <a href="https://pure-plains-23888.herokuapp.com/" className="portfolio-a"><img src="../images/drink-thumb.jpg" alt="drinks on a beac thumbnail" width="400px" height="200px"></img></a>
    <div className="text-block">
        <a href="https://pure-plains-23888.herokuapp.com/" className="text-dec-none"><p>{title}</p></a>
    </div>
    </div>
</div>

)

}