import React from 'react';
import { NavLink } from 'react-router-dom';
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
                    <li><NavLink exact to="/"></NavLink></li>
                    <li><NavLink exact to="/"></NavLink></li>
                    <li><NavLink exact to="/"></NavLink></li>
                    <li><NavLink exact to="/"></NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default TeamCard;
