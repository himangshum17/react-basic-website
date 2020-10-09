import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/clipboard.svg';

const Service = () => {
    return (
        <div className="service">
            <div className="icon-area">
                <img src={img} alt=""/>
            </div>
            <div className="content">
                <h3>Service Title</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio nemo saepe obcaecati aut ipsum unde architecto?</p>
                <Link to="">View details</Link>
            </div>
        </div>
    )
}

export default Service;
