import React from 'react';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './Header.css';

const Header = () => {
  return (
    <div className="header-bar">
      <div className="header-left">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://Whatsapp.com" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>

      <div className="header-right">
        <a href="mailto:yourmail@example.com">
          <MdEmail /> shahbazhere@gamil.com
        </a>
        <span>
         <a href=""> <FaPhoneAlt /> +92 3467191284</a>
        </span>
      </div>
    </div>
  );
};

export default Header;
