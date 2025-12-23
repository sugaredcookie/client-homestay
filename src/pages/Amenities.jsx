import React from 'react';
import { 
  FaBed,
  FaShower,
  FaSoap,
  FaWind,
  FaUtensils,
  FaFire,
  FaMountain,
  FaParking,
  FaTimesCircle,
  FaSnowflake,
  FaBolt,
  FaConciergeBell,
  FaSwimmingPool,
  FaDumbbell,
  FaTv,
  FaWineBottle
} from 'react-icons/fa';
import './Amenities.css';

const Amenities = () => {
  const amenities = [
    { icon: <FaBed />, name: 'Comfortable Beds', category: 'Room' },
    { icon: <FaShower />, name: 'Hot Water', category: 'Bathroom' },
    { icon: <FaSoap />, name: 'Basic Toiletries', category: 'Bathroom' },
    { icon: <FaWind />, name: 'Linen & Towels', category: 'Room' },
    { icon: <FaUtensils />, name: 'Dining Area', category: 'Common' },
    { icon: <FaFire />, name: 'Bonfire Area', category: 'Common' },
    { icon: <FaMountain />, name: 'Viewing Deck', category: 'Common' },
    { icon: <FaParking />, name: 'Parking Space', category: 'Common' },
  ];

  const houseRules = [
    'Government ID proof required at check-in',
    'Pets are not allowed',
    'Smoking is strictly prohibited indoors',
    'Check-out time is 12 Noon',
    'Open check-in time',
    'Respect quiet hours after 10 PM',
    'Damage to property will be charged',
    'Guests are responsible for their belongings'
  ];

  const notAvailable = [
    { icon: <FaSnowflake />, text: 'Air Conditioning (AC)' },
    { icon: <FaBolt />, text: 'Power Backup (Generator/Inverter)' },
    { icon: <FaConciergeBell />, text: 'Room Service' },
    { icon: <FaSwimmingPool />, text: 'Swimming Pool' },
    { icon: <FaDumbbell />, text: 'Gym Facilities' },
    { icon: <FaTv />, text: 'Television in rooms' },
    { icon: <FaWineBottle />, text: 'Mini-bar' }
  ];

  return (
    <div className="amenities-page">
      <section className="amenities-hero section">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Amenities & Facilities</h1>
            <p className="section-description">
              We provide all basic amenities for a comfortable stay while maintaining 
              the authentic mountain experience.
            </p>
          </div>
          
          <div className="amenities-section">
            <div className="section-header">
              <h2 className="section-title">Available Amenities</h2>
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
              <h3>House Rules</h3>
              <ul>
                {houseRules.map((rule, index) => (
                  <li key={index}>
                    <FaTimesCircle className="rule-icon" /> {rule}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="not-available-section card">
              <h3>Not Available</h3>
              <p className="notice">
                <strong>Please Note:</strong> The following facilities are not available
              </p>
              <ul>
                {notAvailable.map((item, index) => (
                  <li key={index}>
                    {item.icon} {item.text}
                  </li>
                ))}
              </ul>
              <div className="nature-note">
                <p>
                  We prioritize preserving the natural mountain environment and 
                  providing an authentic homestay experience over modern luxuries.
                </p>
              </div>
            </div>
          </div>
          
          <div className="amenities-note">
            <p>
              <strong>Important:</strong> Due to our location in the mountains, 
              power fluctuations may occur. We recommend carrying power banks for 
              your electronic devices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Amenities;