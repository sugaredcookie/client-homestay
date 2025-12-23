import React from 'react';
import { FaMountain, FaLeaf, FaEye, FaWind, FaBinoculars, FaStar } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero section">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">About Roshni Homestay</h1>
            <p className="section-description">
              Discover our tranquil mountain retreat in Tinchulay
            </p>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <p className="about-description">
                Roshni Homestay, Tinchulay offers a calm and scenic stay surrounded by 
                hills, tea gardens, and open valley views. Guests can enjoy beautiful 
                sunrises, fresh mountain air, and peaceful evenings.
              </p>
              
              <p>
                Bonfire nights are available on request, creating a warm and memorable 
                experience under the open sky. Several viewpoints and nature walks are 
                located within walking distance, making it perfect for guests who love 
                short walks and quiet moments in nature.
              </p>
              
              <div className="about-highlights">
                <h3>Experience Highlights</h3>
                <ul>
                  <li><FaMountain className="highlight-icon" /> Panoramic mountain and valley views</li>
                  <li><FaLeaf className="highlight-icon" /> Proximity to tea gardens</li>
                  <li><FaEye className="highlight-icon" /> Peaceful and quiet environment</li>
                  <li><FaWind className="highlight-icon" /> Fresh, pollution-free air</li>
                  <li><FaBinoculars className="highlight-icon" /> Bird watching opportunities</li>
                  <li><FaStar className="highlight-icon" /> Starry night skies</li>
                </ul>
              </div>
            </div>
            
            <div className="about-map card">
              <h3>Our Location</h3>
              <div className="map-placeholder">
                <div className="map-overlay">
                  <p className="map-title">📍 Tinchulay</p>
                  <p>Google Maps Location</p>
                  <small>Map will be embedded here</small>
                </div>
              </div>
              <p className="map-note">
                Easy to reach with clear directions provided upon booking
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;