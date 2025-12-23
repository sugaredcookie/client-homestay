import React from 'react';
import { FaWhatsapp, FaPhone, FaArrowDown } from 'react-icons/fa6';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title">
              Welcome to <span className="highlight">Roshni Homestay</span>
            </h1>
            <p className="hero-subtitle">Tinchulay's Mountain Sanctuary</p>
            <p className="hero-description">
              Experience the perfect blend of luxury and nature at our scenic mountain retreat. 
              Wake up to breathtaking views, breathe fresh mountain air, and create memories 
              that last a lifetime.
            </p>
            <div className="hero-buttons">
              <a 
                href="#rooms" 
                className="btn btn-primary btn-large"
              >
                Explore Our Rooms
              </a>
              <a
                href="https://wa.me/917001100952"
                className="btn btn-whatsapp btn-large"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="btn-icon" /> Book Your Stay
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow"><FaArrowDown /></div>
      </div>
    </section>
  );
};

export default Hero;