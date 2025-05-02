import React from 'react';
import './About.css';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  const handleCallNow = () => {
    navigate('/contact');
  };

  const sections = [
    {
      title: 'Meet the team',
      text: 'Our team consists of talented designers, developers, and digital marketers who are passionate about what they do. With years of experience in web design and a deep understanding of the needs of small and local businesses, we are dedicated to delivering outstanding results.',
      image: '/about-img.jpg',
      imageFirst: false
    },
    {
      title: 'Join Us on Your Online Journey',
      text: 'Whether you’re just starting your online journey or looking to revamp your existing website, CWBUK is here to help. We invite you to partner with us and experience the difference of having a professional and affordable website that truly represents your business.',
      image: 'about2.jpg',
      imageFirst: true,
      tag: 'OUR VISION',
      button: {
        text: 'Start Now',
        onClick: handleCallNow
      }
    }
  ];

  return (
    <>
      {sections.map((section, index) => (
        <div className="home-section" key={index}>
          {section.imageFirst ? (
            <>
              <div className="home-image">
                <img src={section.image} alt="Website Design" />
              </div>
              <div className="home-content">
                {section.tag && <span className="span">{section.tag}</span>}
                <h1>{section.title}</h1>
                <p>{section.text}</p>
                {section.button && (
                  <button onClick={section.button.onClick}>{section.button.text}</button>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="home-content">
                <h1>{section.title}</h1>
                <p>{section.text}</p>
              </div>
              <div className="home-image">
                <img src={section.image} alt="Website Design" />
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
}

export default About;
