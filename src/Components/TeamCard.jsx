import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/img2.svg';

const TeamCard = () => {
    return (
        <div className="card">
            <div className="img-area">
                <img src={img} alt=""/>
            </div>
            <div className="content-area">
                <h3>John Doe</h3>
                <p>Designation</p>
                <ul>
                    <li><Link to="/"></Link></li>
                    <li><Link to="/"></Link></li>
                    <li><Link to="/"></Link></li>
                    <li><Link to="/"></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default TeamCard;
