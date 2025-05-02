import React from 'react';
import './Pricing.css';
import { useNavigate } from 'react-router-dom';

function Pricing() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    console.log("Get Started clicked!");
  };

  const handleCallNow = () => {
    navigate('/contact');
  };

  const pricingPlans = [
    {
      label: 'NORMAL WEBSITE',
      price: '£449',
      description: 'Normal website with 5-8 pages',
      features: [
        '8 Pages Done',
        'Free Theme and Plugin',
        'Free Domain Name & Hosting For 1 Year',
        'Free SSL Certificate',
        'Free WhatsApp/Call Button',
        'Secure Contact/Quote Form',
        'Premium Stock Photos'
      ],
      className: 'orange-card',
      buttonClass: 'btn'
    },
    {
      label: 'ECOMMERCE WEBSITE',
      price: '£699',
      description: 'Suitable for more advance businesses',
      features: [
        'Up to 10 Pages Done',
        'Google Maps Address Inserted',
        'Free SSL Certificate',
        'Up to 15 Product Pages',
        'WooCommerce Checkout',
        'Stripe Payment Gateway',
        'Product Listings'
      ],
      className: 'black-card',
      buttonClass: 'get-started-btn'
    }
  ];

  return (
    <div>
      <div className="home-section">
        <div className="home-content">
          <h1>Simple. Affordable Website Plan</h1>
          <p>Check out our affordable website creation service and plans that suit your unique business</p>
        </div>
        <div className="home-image">
          <img src="/pri.jpg" alt="Website Design" />
        </div>
      </div>

      <div className="pricing-container">
        {pricingPlans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.className}`}>
            <span className="card-label">{plan.label}</span>
            <h2 className="price">{plan.price}</h2>
            <p className="description">{plan.description}</p>
            <ul className="checklist">
              {plan.features.map((feature, i) => (
                <React.Fragment key={i}>
                  <li><span className="icon">✔</span> {feature}</li>
                  {i !== plan.features.length - 1 && <hr className="line" />}
                </React.Fragment>
              ))}
            </ul>
            <button type="button" onClick={handleGetStarted} className={plan.buttonClass}>
              Get Started
            </button>
          </div>
        ))}
      </div>

      <div className="contact-section">
        <h1>Ready To Get Your Website?</h1>
        <p>
          Get in touch for a quick quote or discuss your website design project and we will be
          happy to help you in the best way possible.
        </p>
        <button className="contect" onClick={handleCallNow}>
          Call Now
        </button>
      </div>
    </div>
  );
}

export default Pricing;
