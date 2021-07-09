import React from 'react';
import Nav from '../../components/Nav/Nav'

import { BrowserRouter as Router, Link } from "react-router-dom";


export default function Portfolio() {
    return (
        <Router>

    <main>
        

        <Nav />


            <div>
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

        </section>

        
    </main>
    </Router>
    );
}