import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3>About GNP Agro</h3>
          <p>
            GNP Agro is dedicated to providing high-quality pesticides and agricultural solutions to farmers. Our mission is to enhance productivity and sustainability in agriculture.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contactus">Contact Us</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            Gate No. 39/2, Airport Road, Jaulke – Dindori, Nashik, Maharashtra, India, 422206
          </p>
          <p>Email: <a href="mailto:info@gnpagro.com">info@gnpagro.com</a></p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/gnpagrosciences" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.linkedin.com/in/hrishikesh-patil/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/gnpagrosciences/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2001 GNP Agro. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
