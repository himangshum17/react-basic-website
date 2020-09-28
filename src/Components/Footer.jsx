import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="ten column m-auto">
                        <div className="footer-inner">
                            <div className="logo">
                                <NavLink exact to="/" className="footer-logo">Demo Logo</NavLink>
                            </div>
                            <div className="links">
                                <ul>
                                    <li><NavLink exact to="/" className="footer-link">Home</NavLink></li>
                                    <li><NavLink exact to="/about" className="footer-link">About</NavLink></li>
                                    <li><NavLink exact to="/services" className="footer-link">Services</NavLink></li>
                                    <li><NavLink exact to="/contact" className="footer-link">Contact</NavLink></li>
                                </ul>
                            </div>
                            <p className="footer-text">2020 React Basic Website</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
