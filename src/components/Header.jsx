// Header.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const handlebooknow = () => {
        navigate('/contact-us');
    }
    return (
        <div className="header-component">
            <div className="header-logo">
                <Link to="/" onClick={() => setMenuOpen(false)}>
                    <img src={logo} alt="logo" />
                </Link>
            </div>

            <div className={`header-navbar ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link></li>
                    <li><Link to="/all-project" onClick={() => setMenuOpen(false)}>Projects</Link></li>
                    <li><Link to="/contact-us" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>

                    {/* Mobile button inside sidebar */}
                    <li className="mobile-only book-btn">
                        <button onClick={handlebooknow}>
                            Book an Appointment
                            <div className="book-btn-hover-effect"></div>
                        </button>
                    </li>
                </ul>
            </div>

            {/* Desktop Button */}
            <div className="desktop-only book-btn">
                <button onClick={handlebooknow}>
                    Book an Appointment
                    <div className="book-btn-hover-effect"></div>
                </button>
            </div>

            <div className="hamburger-icon" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default Header;
