import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <section className="section1">
            <div className="container">
                <div className="content">
                <h1>Hero section welcome headline here</h1>
                <p>Fanny pack hexagon artisan, live-edge seitan poutine franzen deep v mixtape tbh.
                Enamel pin plaid quinoa stumptown austin, swag iPhone. Salvia franzen knausgaard, 
                fam banh mi farm-to-table wayfarers chia.</p>
                <NavLink exact to="/services" className="btn">See All Services</NavLink>
                </div>
            </div>
        </section>
    )
}

export default Home;
