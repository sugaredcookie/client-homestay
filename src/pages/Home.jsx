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
  FaPhone
} from 'react-icons/fa6';

const Home = () => {
  const features = [
    {
      icon: <FaMountain />,
      title: 'Panoramic Views',
      description: '360° views of hills, tea gardens, and open valleys from your room'
    },
    {
      icon: <FaSun />,
      title: 'Sunrise Experience',
      description: 'Private balcony to witness breathtaking mountain sunrises'
    },
    {
      icon: <FaFire />,
      title: 'Bonfire Evenings',
      description: 'Cozy bonfire setup with mountain stories and stargazing'
    },
    {
      icon: <FaPersonHiking />,
      title: 'Nature Trails',
      description: 'Guided walks to hidden viewpoints and tea plantations'
    },
    {
      icon: <FaHouse />,
      title: 'Authentic Stay',
      description: 'Traditional architecture with modern comforts'
    },
    {
      icon: <FaLeaf />,
      title: 'Fresh Mountain Air',
      description: 'Pollution-free environment with aromatic tea gardens'
    }
  ];

  const highlights = [
    {
      title: 'Luxury Meets Nature',
      description: 'Experience comfort amidst raw natural beauty with all basic amenities',
      icon: <FaStar />
    },
    {
      title: 'Perfect Getaway',
      description: 'Escape city life and reconnect with nature in complete peace',
      icon: <FaMountainSun />
    },
    {
      title: 'Local Experience',
      description: 'Learn about local culture and tea plantation life',
      icon: <FaLeaf />
    }
  ];

  return (
    <>
      <Hero />
      
      <section className="features section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Experience The Best</span>
            <h2 className="section-title">Why Choose Roshni Homestay?</h2>
            <p className="section-description">
              Discover a perfect blend of comfort and nature's tranquility
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
            <h2 className="section-title">Stay Details</h2>
            <p className="section-description">Everything you need to know</p>
          </div>
          
          <div className="quick-info-grid">
            <div className="info-card">
              <div className="info-icon"><FaHouseUser /></div>
              <div className="info-content">
                <h3>Accommodation</h3>
                <p className="info-number">2 Luxury Rooms</p>
                <p className="info-detail">4 King Beds + Tent Options</p>
                <p className="info-note">Spacious rooms with valley views</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon"><FaIndianRupeeSign /></div>
              <div className="info-content">
                <h3>Pricing</h3>
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
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon"><FaClock /></div>
              <div className="info-content">
                <h3>Timings</h3>
                <div className="timing-details">
                  <div className="timing-item">
                    <span className="timing-label">Check-in</span>
                    <span className="timing-value">Flexible</span>
                  </div>
                  <div className="timing-divider"></div>
                  <div className="timing-item">
                    <span className="timing-label">Check-out</span>
                    <span className="timing-value">12:00 PM</span>
                  </div>
                </div>
                <p className="info-note">24/7 assistance available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for Your Mountain Escape?</h2>
            <p>Book now and experience the magic of Tinchulay</p>
            <div className="cta-buttons">
              <a
                href="https://wa.me/917001100952"
                className="btn btn-primary btn-large"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="btn-icon" /> Instant WhatsApp Booking
              </a>
              <a href="tel:+917001100952" className="btn btn-secondary">
                <FaPhone className="btn-icon" /> Call to Inquire
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;