import React from 'react';
import { Link } from 'react-router-dom';
import img from './assets/images/img1.svg';
import ImageContentHorizontal from './Components/ImageContentHorizontal';
import ImageContentVertical from './Components/ImageContentVertical';

const Home = () => {
    return (
        <>
        <section className="section1">
            <div className="container">
                <div className="content">
                <h1>Hero section welcome headline here</h1>
                <p>Fanny pack hexagon artisan, live-edge seitan poutine franzen deep v mixtape tbh.
                Enamel pin plaid quinoa stumptown austin, swag iPhone. Salvia franzen knausgaard, 
                fam banh mi farm-to-table wayfarers chia.</p>
                <Link to="/services" className="btn">See All Services</Link>
                </div>
            </div>
        </section>
        <section className="section2">
             <div className="container">
                 <ul>
                     <li>
                        <Link to="/">
                            <img src={img} alt=""/>
                        </Link>
                     </li>
                     <li>
                        <Link to="/">
                            <img src={img} alt=""/>
                        </Link>
                     </li>
                     <li>
                        <Link to="/">
                            <img src={img} alt=""/>
                        </Link>
                     </li>
                     <li>
                        <Link to="/">
                            <img src={img} alt=""/>
                        </Link>
                     </li>
                     <li>
                        <Link to="/">
                            <img src={img} alt=""/>
                        </Link>
                     </li>
                     <li>
                        <Link to="/">
                            <img src={img} alt=""/>
                        </Link>
                     </li>
                 </ul>
             </div>
        </section>
        <ImageContentHorizontal/>
        <ImageContentVertical/>
        <ImageContentHorizontal/>
        </>
    )
}

export default Home;
