// src/Components/Navbar.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the mobile menu after link click
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/" onClick={handleLinkClick}>
            <img src="/logo.svg" alt="Logo" />
          </Link>
        </div>

        {/* Hamburger menu icon */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </div>

        {/* Navigation links */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/pricing" onClick={handleLinkClick}>Pricing</Link></li>
          <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>

       
          <li><Link to="/contact" onClick={handleLinkClick}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}
