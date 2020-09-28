import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../assets/images/img3.svg';

const ImageContentVertical = () => {
    return (
        <section className="img-content-vertical">
           <div className="container">
               <div className="row">
                   <div className="eight column m-auto">
                      <div className="img-area">
                          <img src={img} alt=""/>
                      </div>
                      <div className="content-area">
                          <h3>Small title goes here</h3>
                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                          <NavLink exact to="/services" className="btn">Get Started</NavLink>
                      </div>
                   </div>
               </div>
           </div>
        </section>
    )
}

export default ImageContentVertical;
