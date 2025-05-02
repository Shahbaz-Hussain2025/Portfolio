// src/Pages/Home.jsx
import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import {
  FaBorderStyle, FaEdit, FaKaaba, FaKey, FaKeyboard,
  FaPaypal, FaTractor, FaTrademark, FaTrafficLight,
  FaUser, FaStar, FaThumbsUp
} from 'react-icons/fa';

function Home() {
  const navigate = useNavigate();

  const handleCallNow = () => navigate('/contact');
  const handleClick = () => navigate('/pricing');

  const features = [
    { icon: <FaBorderStyle />, title: 'Custom Style' },
    { icon: <FaEdit />, title: 'Custom Style' },
    { icon: <FaUser />, title: 'Custom Style' },
    { icon: <FaPaypal />, title: 'Custom Style' },
    { icon: <FaKeyboard />, title: 'Custom Style' },
    { icon: <FaTrademark />, title: 'Custom Style' },
  ];

  const projects = [
    { url: 'https://totaldecorleicester.co.uk/', img: 'pro1.jpg' },
    { url: 'https://domesticroofingsolutions.co.uk/', img: 'pro2.jpg' },
    { url: 'https://falconroofingltd.co.uk/', img: 'pro3.jpg' },
    { url: 'https://amazinglearners.school/', img: 'pro4.jpg' },
    { url: 'https://theluxurypergola.co.uk/', img: 'pro5.jpg' },
    { url: 'https://emnjcleaning.co.uk/', img: 'pro6.jpg' },
    { url: 'https://www.uxbridgepianoschool.co.uk/', img: 'pro7.jpg' },
    { url: 'https://www.highcroftcarehome.co.uk/', img: 'pro8.jpg' },
  ];

  const clients = [
    {
      name: 'FALCON ROOFERS',
      info: 'Roofer Website',
      review: 'Great company to work with for our website, we did a lot of changes but it ended the way we wanted it to...',
    },
    {
      name: 'Adrian Timpau',
      info: 'Roofer Website',
      review: 'Easy to talk with and very helpful and reliable. I’d strongly recommend anyone who is in need of this service',
    },
    {
      name: 'eoan FN',
      info: 'Milk Delivery Ecommerce Website',
      review: 'Found this fella to design my web page and I have to say exceptional service from the start...',
    },
    {
      name: 'DH Driving School',
      info: 'Driving School Website',
      review: 'I was looking for a website builder and came across Taseer... highly recommend for any website development.',
    },
  ];

  const steps = [
    {
      step: 'STEP 1',
      title: 'Tell Us About You',
      text: 'Tell us what your business does and we will make sure to communicate your brand story...',
      checklist: ['Get quality webcopy written', 'Insert valuable keywords', 'Design webpages'],
      img: 'cont-img.jpg',
      imgFirst: true,
    },
    {
      step: 'STEP 2',
      title: 'We Get Details',
      text: 'Once we know about your business, we’ll work with you to put you on the best package...',
      checklist: ['Understand what you\'ll get', 'Total cost of the website', 'Access to hosting and domain'],
      img: 'cont1.jpg',
      imgFirst: false,
    },
    {
      step: 'STEP 3',
      title: 'Website Created',
      text: 'After we have you on board, we’ll start working on the project and get it delivered...',
      checklist: ['Get quality webcopy written', 'Insert valuable keywords', 'Design webpages'],
      img: 'cont2.jpg',
      imgFirst: true,
    },
  ];

  return (
    <>
      <div className="home-section">
        <div className="home-content">
          <h1>Affordable Website Designer in London</h1>
          <p>We’ll create for you an awesome WordPress website at an affordable price...</p>
          <button onClick={handleClick}>Start Now</button>
        </div>
        <div className="home-image">
          <img src="/img.jpg" alt="Website Design" />
        </div>
      </div>

      <div className="cont-head">
        <h1>How it Works?</h1>
      </div>

      {steps.map((s, idx) => (
        <div className="main-cont" key={idx}>
          {s.imgFirst && <div className="cont"><img src={s.img} alt="Content" /></div>}
          <div className="cont-second">
            <span className='span'>{s.step}</span>
            <h1>{s.title}</h1>
            <p>{s.text}</p>
            <div className="checklist-container">
              <ul className="checklist">
                {s.checklist.map((item, i) => (
                  <li key={i}><span className="icon">✔</span> {item}</li>
                ))}
              </ul>
            </div>
          </div>
          {!s.imgFirst && <div className="cont"><img src={s.img} alt="Content" /></div>}
        </div>
      ))}

      <div className="button-wrapper">
        <button className="cont-button" onClick={handleCallNow}>Get free Quote</button>
      </div>

      <div className="project">
        <h1>Sites We Have Built</h1>
      </div>

      <div className="project-img">
        {projects.map((p, idx) => (
          <div key={idx}>
            <a href={p.url} target="_blank" rel="noopener noreferrer">
              <img src={p.img} alt="Project Preview" />
            </a>
            <p>Click to see full website</p>
          </div>
        ))}
      </div>

      <div className="project">
        <h1>Our Website Features</h1>
      </div>

      <div className="main-feature">
        {features.map((f, idx) => (
          <div className="card-feature" key={idx}>
            {f.icon}
            <h1>{f.title}</h1>
            <p>Set your business' unique branding so customers can trust you</p>
          </div>
        ))}
      </div>

      <div className="client">
        <h1>What Our Clients Say</h1>
      </div>

      <div className="main-client">
        {clients.map((c, idx) => (
          <div className="client-card" key={idx}>
            <div className="star-rating">
              {[...Array(5)].map((_, i) => <FaStar key={i} className="star" />)}
            </div>
            <p>{c.review} <FaThumbsUp className="thumbs-up" /></p>
            <h3>{c.name}</h3>
            <p className="client-info">{c.info}</p>
          </div>
        ))}
      </div>

      <div className="contact-section">
        <h1>Ready To Get Your Website?</h1>
        <p>Get in touch for a quick quote or discuss your website design project...</p>
        <button className="contect" onClick={handleCallNow}>Call Now</button>
      </div>
    </>
  );
}

export default Home;
