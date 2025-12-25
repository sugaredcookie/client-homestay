import React from 'react';
import {
  FaBed,
  FaShower,
  FaSoap,
  FaWind,
  FaUtensils,
  FaFire,
  FaMountain,
  FaSquareParking,
  FaHouse,
  FaHeart
} from "react-icons/fa6";

// These icons don't exist in fa6, use alternatives:
import { 
  FaSnowflake,
  FaBolt,
  FaTv,
  FaWineGlass,
  FaCircleXmark
} from 'react-icons/fa6';

// For icons that don't exist in fa6, we need to use fa5 or alternatives:
import { 
  FaConciergeBell,
  FaSwimmingPool,
  FaDumbbell
} from 'react-icons/fa'; // Keep these from fa5

import './Amenities.css';

const Amenities = () => {
  const amenities = [
    { icon: <FaBed />, name: 'Comfortable Beds', category: 'Sleep' },
    { icon: <FaShower />, name: 'Hot Water', category: 'Bath' },
    { icon: <FaSoap />, name: 'Basic Toiletries', category: 'Bath' },
    { icon: <FaWind />, name: 'Clean Linen', category: 'Sleep' },
    { icon: <FaUtensils />, name: 'Dining Space', category: 'Common' },
    { icon: <FaFire />, name: 'Bonfire Area', category: 'Common' },
    { icon: <FaMountain />, name: 'Viewing Spot', category: 'Common' },
    { icon: <FaSquareParking />, name: 'Parking Space', category: 'Common' },
  ];

  const houseRules = [
    'Government ID required (for safety)',
    'Pets not allowed (we have local dogs)',
    'No smoking indoors (fresh air is precious)',
    'Check-out by 12 Noon (no rush, but helps us prepare)',
    'Check-in anytime (like visiting family)',
    'Quiet hours after 10 PM (for everyone\'s peace)',
    'Please care for our home (as we care for you)',
    'Guests are responsible for their belongings'
  ];

  const notAvailable = [
    { icon: <FaSnowflake />, text: 'Air Conditioning (not needed in hills)' },
    { icon: <FaBolt />, text: 'Power Backup (occasional power cuts in hills)' },
    { icon: <FaConciergeBell />, text: 'Room Service (we\'re a family home)' },
    { icon: <FaSwimmingPool />, text: 'Swimming Pool (nature is our pool)' },
    { icon: <FaDumbbell />, text: 'Gym (hills are your gym)' },
    { icon: <FaTv />, text: 'TV in rooms (we encourage nature viewing)' },
    { icon: <FaWineGlass />, text: 'Mini-bar (local tea is better)' } // Changed from FaWineBottle
  ];

  return (
    <div className="amenities-page">
      <section className="amenities-hero section">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Our Simple Amenities</h1>
            <p className="section-description">
              Basic comforts for a peaceful stay. We focus on what matters most in the hills.
            </p>
          </div>
          
          <div className="simple-note card">
            <FaHouse className="simple-icon" />
            <div className="simple-content">
              <h3>About Our Approach</h3>
              <p>
                We provide <strong>basic, honest amenities</strong> that make your stay comfortable without luxury pretensions. 
                In the hills, sometimes less is more — we believe in simple joys like mountain views, 
                fresh air, and heartfelt hospitality.
              </p>
            </div>
          </div>
          
          <div className="amenities-section">
            <div className="section-header">
              <h2 className="section-title">What We Offer</h2>
              <p className="section-description">Simple comforts for your peaceful stay</p>
            </div>
            <div className="amenities-grid">
              {amenities.map((amenity, index) => (
                <div key={index} className="amenity-card card">
                  <div className="amenity-icon">{amenity.icon}</div>
                  <h4>{amenity.name}</h4>
                  <span className="amenity-category">{amenity.category}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="amenities-details">
            <div className="rules-section card">
              <h3>House Guidelines</h3>
              <p className="rules-intro">Simple rules to keep our home peaceful for everyone:</p>
              <ul>
                {houseRules.map((rule, index) => (
                  <li key={index}>
                    <FaCircleXmark className="rule-icon" /> {rule}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="not-available-section card">
              <h3>What We Don't Have</h3>
              <p className="notice">
                <strong>Honest note:</strong> We choose to keep things simple
              </p>
              <ul>
                {notAvailable.map((item, index) => (
                  <li key={index}>
                    {item.icon} {item.text}
                  </li>
                ))}
              </ul>
              <div className="nature-note">
                <FaHeart className="nature-icon" />
                <p>
                  We preserve the natural mountain experience over modern luxuries. 
                  Our amenities reflect what truly matters in the hills.
                </p>
              </div>
            </div>
          </div>
          
          <div className="amenities-note">
            <p>
              <strong>Simple truth:</strong> Power fluctuations sometimes happen in the hills. 
              We recommend carrying power banks — it's part of the authentic mountain experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Amenities;