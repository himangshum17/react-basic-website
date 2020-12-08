import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {  

    const [click, setClick] = useState(false)

    return (
        <header>
            <div className="container">
                <nav>
                    <div className="logo">
                        <Link to="/" className="nav-logo">Demo Logo</Link>
                    </div>
                    <button className="hamburger" onClick={() => setClick(!click)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="feather feather-menu"
                            viewBox="0 0 24 24"
                        >
                            <path d="M3 12L21 12"></path>
                            <path d="M3 6L21 6"></path>
                            <path d="M3 18L21 18"></path>
                        </svg>
                    </button>
                    <div className={click ? "links show" : "links"}>
                        <ul>
                            <li><NavLink exact to="/" className="nav-link">Home</NavLink></li>
                            <li><NavLink exact to="/about" className="nav-link">About</NavLink></li>
                            <li><NavLink exact to="/services" className="nav-link">Services</NavLink></li>
                            <li><NavLink exact to="/contact" className="nav-link">Contact</NavLink></li>
                        </ul>
                    </div>
                    <Link to="/contact" className="btn">get started</Link>
                </nav>
            </div>
        </header>
    )
}  

export default Navbar;
