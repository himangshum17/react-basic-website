import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumb = (props) => {
    return (
        <div className="breadcrumb">
            <div className="container">
                <h2>{props.tiTle}</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li className="active">{props.activeLink}</li>
                </ul>
            </div>
        </div>
    )
}

export default BreadCrumb;
