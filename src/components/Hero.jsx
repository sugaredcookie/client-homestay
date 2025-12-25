import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaPhone, FaArrowDown } from 'react-icons/fa6';
import '../styles/Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleRooms = () => {
    navigate('/rooms');
  };

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title">
              Live the hills. <span className="highlight">Feel at home.</span>
            </h1>
            <p className="hero-subtitle">A quiet home in the hills of Tinchulay</p>
            <p className="hero-description">
              Stay with a local family, surrounded by mountains, clouds, and silence. 
              Not a hotel. Just a warm home in nature.
            </p>
            <div className="hero-buttons">
              <button
                onClick={handleRooms}
                className="btn btn-primary btn-large"
              >
                Our Rooms
              </button>
              <a
                href="https://wa.me/917001100952"
                className="btn btn-whatsapp btn-large"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="btn-icon" /> Talk to Us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <span>Experience peace</span>
        <div className="scroll-arrow"><FaArrowDown /></div>
      </div>
    </section>
  );
};

export default Hero;