import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="ten column m-auto">
                        <div className="footer-inner">
                            <div className="logo">
                                <Link to="/" className="footer-logo">Demo Logo</Link>
                            </div>
                            <div className="links">
                                <ul>
                                    <li><Link to="/" className="footer-link">Home</Link></li>
                                    <li><Link to="/about" className="footer-link">About</Link></li>
                                    <li><Link to="/services" className="footer-link">Services</Link></li>
                                    <li><Link to="/contact" className="footer-link">Contact</Link></li>
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
