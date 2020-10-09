import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/img2.svg';

const ImageContentHorizontal = () => {
    return (
        <section className="img-content-horizontal">
          <div className="container">
              <div className="row">
                  <div className="half column">
                      <div className="img-area">
                          <img src={img} alt=""/>
                      </div>
                  </div>
                  <div className="half column">
                      <div className="content-area">
                          <h2>Section heading goes over here</h2>
                            <p>Fanny pack hexagon artisan, live-edge seitan poutine franzen deep v mixtape tbh.
                            Enamel pin plaid quinoa stumptown austin, swag iPhone. Salvia franzen knausgaard, 
                            fam banh mi farm-to-table wayfarers chia.</p>
                            <Link to="/services" className="btn">Get Started</Link>
                      </div>
                  </div>
              </div>
          </div>
        </section>
    )
}

export default ImageContentHorizontal;
