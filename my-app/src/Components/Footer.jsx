import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        {/* Grid layout for footer */}
        <div className="footer-grid">
          {/* Column 1: Logo and Paragraph */}
          <div>
            <div className="footer-logo">
              <span>➤</span>
              <h2>CWEBUK</h2>
            </div>
            <p className="footer-text">
              Get a WordPress website at an affordable price so you can start attracting more customers and increase your revenue.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-column">
            <h3>Navigation</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Westminster Web Designer</a></li>
              <li><a href="#">Web Designer Walthamstow</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Legal Links */}
          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Disclaimer</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul>
              <li><a href="mailto:developer@cheapwebsitebuilder.co.uk">developer@cheapwebsitebuilder.co.uk</a></li>
              <li><a href="tel:+447448690621">0744 8690 621</a></li>
              <li className="contact-info">7 Craven Gardens, Barking, Essex, IG11 0BW</li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="copyright">
          <p>Copyright © 2025 CWEBUK</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;