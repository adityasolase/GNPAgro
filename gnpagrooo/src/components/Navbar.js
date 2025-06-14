// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import gnplogo from '../assets/icons/gnplogo.png'; // Adjust the path if necessary

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={gnplogo} alt="GNP Agro Logo" className="logo" /> {/* Logo image */}
        </Link>
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          ☰
        </button>
        <ul className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={toggleMobileMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/aboutus" onClick={toggleMobileMenu}>About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products" onClick={toggleMobileMenu}>Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contactus" onClick={toggleMobileMenu}>Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart" onClick={toggleMobileMenu}>Cart</Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
