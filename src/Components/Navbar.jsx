import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <div className="logo">
                        <NavLink exact to="/" className="nav-logo">Demo Logo</NavLink>
                    </div>
                    <div className="links">
                        <ul>
                            <li><NavLink exact to="/" className="nav-link">Home</NavLink></li>
                            <li><NavLink exact to="/about" className="nav-link">About</NavLink></li>
                            <li><NavLink exact to="/services" className="nav-link">Services</NavLink></li>
                            <li><NavLink exact to="/contact" className="nav-link">Contact</NavLink></li>
                        </ul>
                    </div>
                    <NavLink exact to="/contact" className="btn">get started</NavLink>
                </nav>
            </div>
        </header>
    )
}  

export default Navbar;
