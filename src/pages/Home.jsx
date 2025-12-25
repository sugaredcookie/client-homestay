import React from 'react';
import Hero from '../components/Hero';
import './Home.css';

// Import React Icons
import { 
  FaMountain,
  FaSun,
  FaFire,
  FaPersonHiking,
  FaHouse,
  FaLeaf,
  FaStar,
  FaMountainSun,
  FaHouseUser,
  FaIndianRupeeSign,
  FaClock,
  FaWhatsapp,
  FaPhone,
  FaCloud,
  FaHeart
} from 'react-icons/fa6';

const Home = () => {
  const features = [
    {
      icon: <FaHouse />,
      title: 'Family-Run Home',
      description: 'A simple, stand-alone homestay run by our family'
    },
    {
      icon: <FaCloud />,
      title: 'Morning Mist & Tea',
      description: 'Wake up to clouds and begin your day with mountain tea'
    },
    {
      icon: <FaFire />,
      title: 'Bonfire Evenings',
      description: 'Warm bonfire nights under starlit skies'
    },
    {
      icon: <FaPersonHiking />,
      title: 'Nature Walks',
      description: 'Guided walks through tea gardens and quiet trails'
    },
    {
      icon: <FaHeart />,
      title: 'Personal Care',
      description: 'We host only a few guests to ensure personal attention'
    },
    {
      icon: <FaLeaf />,
      title: 'Fresh Mountain Air',
      description: 'Breathe pure, pollution-free air all day long'
    }
  ];

  const highlights = [
    {
      title: 'Simple & Peaceful',
      description: 'Experience comfort in nature without luxury pretensions',
      icon: <FaStar />
    },
    {
      title: 'Nature Connection',
      description: 'Connect with mountains, silence, and simple joys',
      icon: <FaMountainSun />
    },
    {
      title: 'Local Experience',
      description: 'Live like a local, feel like family',
      icon: <FaLeaf />
    }
  ];

  return (
    <>
      <Hero />
      
      <section className="features section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Experience Simplicity</span>
            <h2 className="section-title">Why Stay With Us?</h2>
            <p className="section-description">
              A peaceful, family-run homestay where nature meets heartfelt hospitality
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon-bg"></div>
                  <div className="feature-icon">{feature.icon}</div>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-divider"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="highlights-section">
        <div className="container">
          <div className="highlights-grid">
            {highlights.map((highlight, index) => (
              <div key={index} className="highlight-card">
                <div className="highlight-icon">{highlight.icon}</div>
                <div className="highlight-content">
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quick-info section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Simple Stay Details</h2>
            <p className="section-description">Everything you need to know for a peaceful stay</p>
          </div>
          
          <div className="quick-info-grid">
            <div className="info-card">
              <div className="info-icon"><FaHouseUser /></div>
              <div className="info-content">
                <h3>Our Home</h3>
                <p className="info-number">2 Simple Rooms</p>
                <p className="info-detail">4 Beds + Tent Options</p>
                <p className="info-note">Clean, comfortable spaces with valley views</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon"><FaIndianRupeeSign /></div>
              <div className="info-content">
                <h3>Simple Pricing</h3>
                <p className="info-number">₹1,500</p>
                <p className="info-detail">Per Person / Night</p>
                <div className="price-breakdown">
                  <div className="price-item">
                    <span className="price-label">Room:</span>
                    <span className="price-value">₹2,500</span>
                  </div>
                  <div className="price-item">
                    <span className="price-label">Tent:</span>
                    <span className="price-value">₹1,000</span>
                  </div>
                </div>
                <p className="info-note">Home-cooked food available on request</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon"><FaClock /></div>
              <div className="info-content">
                <h3>Flexible Timings</h3>
                <div className="timing-details">
                  <div className="timing-item">
                    <span className="timing-label">Check-in</span>
                    <span className="timing-value">Open</span>
                  </div>
                  <div className="timing-divider"></div>
                  <div className="timing-item">
                    <span className="timing-label">Check-out</span>
                    <span className="timing-value">12 Noon</span>
                  </div>
                </div>
                <p className="info-note">We're here to help anytime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Planning a peaceful break in the hills?</h2>
            <p>Call or WhatsApp us anytime — we'll be happy to welcome you</p>
            <div className="cta-buttons">
              <a
                href="https://wa.me/917001100952"
                className="btn btn-whatsapp btn-large"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="btn-icon" /> WhatsApp Us
              </a>
              <a href="tel:+917001100952" className="btn btn-secondary">
                <FaPhone className="btn-icon" /> Call to Chat
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;