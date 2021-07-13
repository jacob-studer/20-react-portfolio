import React from 'react';
// import Portfolio from '../../views/Portfolio/Portfolio'

//all the values would be props, url prop, title prop, etc, 

export default function ProjectCard( {url, title, alt, image}) {
    return (
    
    <div className="horizontal-center-1">
    <div className="container">
    <a href={url} className="portfolio-a"><img src={image} alt={alt} width="400px" height="200px"></img></a>
    <div className="text-block">
        <a href={url} className="text-dec-none"><p>{title}</p></a>
    </div>
    </div>
</div>

)

}