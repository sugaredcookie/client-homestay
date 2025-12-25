import React from 'react';
import { FaMountain, FaLeaf, FaEye, FaWind, FaBinoculars, FaStar, FaHouse, FaHeart, FaUsers } from 'react-icons/fa6';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero section">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Our Home in the Hills</h1>
            <p className="section-description">
              A simple, stand-alone, family-run homestay where peace meets nature
            </p>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <div className="identity-card card">
                <FaHouse className="identity-icon" />
                <h3>Our Identity</h3>
                <p>
                  <strong>Roshni Homestay is a stand-alone, family-run home</strong> away from crowds and noise. 
                  We host only a few guests so everyone feels peaceful and cared for.
                </p>
                <p>
                  This is our home, and we welcome guests as family, not customers.
                </p>
              </div>
              
              <p className="about-description">
                Roshni Homestay offers a calm and scenic stay surrounded by 
                hills, tea gardens, and open valley views. Guests enjoy beautiful 
                sunrises, fresh mountain air, and peaceful evenings.
              </p>
              
              <p>
                Bonfire nights are available on request, creating a warm and memorable 
                experience under the open sky. Several viewpoints and nature walks are 
                located within walking distance, making it perfect for guests who love 
                short walks and quiet moments in nature.
              </p>
              
              <div className="nature-feel card">
                <FaHeart className="feel-icon" />
                <h3>Nature as a Feeling</h3>
                <ul>
                  <li><FaMountain className="highlight-icon" /> Wake up to clouds, birds, and mountain silence</li>
                  <li><FaLeaf className="highlight-icon" /> Mornings begin with tea and mist, not alarms</li>
                  <li><FaStar className="highlight-icon" /> Nature here is not just a view — it is a feeling</li>
                </ul>
              </div>
              
              <div className="peace-emphasis card">
                <FaUsers className="peace-icon" />
                <h3>Stand-Alone & Peaceful</h3>
                <p>
                  <strong>A peaceful stand-alone homestay surrounded by open nature.</strong> 
                  No crowds, no traffic. Ideal for guests seeking peace and nature connection.
                </p>
              </div>
            </div>
            
            <div className="about-map card">
              <h3>Our Location</h3>
              <div className="map-placeholder">
                <div className="map-overlay">
                  <p className="map-title">📍 Tinchulay</p>
                  <p>Away from crowds, close to nature</p>
                  <small>Peaceful hill location</small>
                </div>
              </div>
              <p className="map-note">
                Easy to reach with clear directions provided upon booking
              </p>
            </div>
          </div>
          
          {/* Nearby Places Section */}
          <div className="nearby-places-section">
            <div className="section-header">
              <h2 className="section-title">Beautiful Places Nearby</h2>
              <p className="section-description">Within 20 km of our homestay</p>
            </div>
            
            <div className="places-grid">
              <div className="place-card">
                <FaMountain className="place-icon" />
                <h4>Tinchulay View Point</h4>
                <p>Breathtaking valley views</p>
              </div>
              
              <div className="place-card">
                <FaLeaf className="place-icon" />
                <h4>Lamahatta Eco Park</h4>
                <p>Serene pine forest walk</p>
              </div>
              
              <div className="place-card">
                <FaLeaf className="place-icon" />
                <h4>Takdah Orchid Centre</h4>
                <p>Colorful flower gardens</p>
              </div>
              
              <div className="place-card">
                <FaLeaf className="place-icon" />
                <h4>Peshok Tea Garden</h4>
                <p>Vast tea plantation views</p>
              </div>
              
              <div className="place-card">
                <FaMountain className="place-icon" />
                <h4>Teesta Valley View Point</h4>
                <p>River and mountain panorama</p>
              </div>
            </div>
            
            <p className="places-note">
              All these places are easily reachable from our homestay.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;