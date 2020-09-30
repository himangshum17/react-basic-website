import React from 'react';
import { NavLink } from 'react-router-dom';

const BreadCrumb = () => {
    return (
        <div className="breadcrumb">
            <div className="container">
                <h2>About Us</h2>
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li className="active">About Us</li>
                </ul>
            </div>
        </div>
    )
}

export default BreadCrumb;
