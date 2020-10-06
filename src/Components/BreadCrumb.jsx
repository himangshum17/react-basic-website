import React from 'react';
import { NavLink } from 'react-router-dom';

const BreadCrumb = (props) => {
    return (
        <div className="breadcrumb">
            <div className="container">
                <h2>{props.tiTle}</h2>
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li className="active">{props.activeLink}</li>
                </ul>
            </div>
        </div>
    )
}

export default BreadCrumb;
