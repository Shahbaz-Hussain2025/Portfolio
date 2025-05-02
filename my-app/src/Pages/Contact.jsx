import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    websiteType: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here (e.g., API call)
  };

  return (
    <div className="contact-page">
      {/* Introductory Section */}
      <div className="home-section">
        <div className="home-content">
          <h1>Let's get started</h1>
          <p>
            Contact us using the form or email below or send us a message on the contact number and we’ll reply ASAP!
          </p>
        </div>
        <div className="home-image">
          <img src="/cont.jpg" alt="Website Design" />
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-container">
        <div className="contact-details">
          <h2>Contact Details</h2>
          <div className="contact-item">
            <span className="icon">📞</span> Call Us
            <p>0744 8690 621</p>
          </div>
          <div className="contact-item">
            <span className="icon">✉️</span> Email Us
            <p>developer@cheapwebsitebuilder.co.uk</p>
          </div>
          <div className="contact-item">
            <span className="icon">📍</span> Address
            <p>7 Craven Gardens Barking, Essex, IG11 0BW</p>
          </div>
        </div>
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name <span className="required">*</span></label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone <span className="required">*</span></label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email <span className="required">*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>What type of website do you need? <span className="required">*</span></label>
              <select
                name="websiteType"
                value={formData.websiteType}
                onChange={handleChange}
                required
              >
                <option value="">Choose an option</option>
                <option value="normal">Normal Website</option>
                <option value="ecommerce">Ecommerce Website</option>
              </select>
            </div>
            <div className="form-group">
              <label>Message <span className="required">*</span></label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
