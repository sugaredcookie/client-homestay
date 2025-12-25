  import React from 'react';
import {
  FaBed,
  FaUsers,
  FaIndianRupeeSign,
  FaMountain,
  FaBath,
  FaFire,
  FaUtensils,
  FaWhatsapp,
  FaPhone
} from "react-icons/fa6";
  import './Room.css';

  const Rooms = () => {
    const rooms = [
      {
        type: 'Simple Room',
        beds: 'Clean, comfortable beds',
        capacity: '2-4 people',
        price: '₹1500 per head',
        roomPrice: '₹2500 per room',
        note: 'Designed for rest, not luxury',
        features: [
          { icon: <FaMountain />, text: 'Mountain views' },
          { icon: <FaBath />, text: 'Attached bathroom' },
          { icon: <FaBed />, text: 'Basic comfort' }
        ]
      },
      {
        type: 'Tent Stay',
        beds: 'Comfortable camping tents',
        capacity: '2 people per tent',
        price: '₹1000 per tent',
        roomPrice: 'Same price every day',
        note: 'Close-to-nature experience',
        features: [
          { icon: <FaFire />, text: 'Bonfire access' },
          { icon: <FaMountain />, text: 'Open sky views' },
          { icon: <FaBath />, text: 'Shared facilities' }
        ]
      }
    ];

    const pricing = [
      { item: 'Per Person (Room)', price: '₹1500' },
      { item: 'Per Room (2-4 pax)', price: '₹2500' },
      { item: 'Tent (2 pax)', price: '₹1000' },
      { item: 'Additional Person', price: '₹500' },
      { item: 'Bonfire (on request)', price: '₹500' },
      { item: 'Home-cooked food (request)', price: 'As per menu' }
    ];

    return (
      <div className="rooms-page">
        <section className="rooms-hero section">
          <div className="container">
            <div className="section-header">
              <h1 className="section-title">Our Simple Rooms</h1>
              <p className="section-description">
                Simple, clean, and comfortable spaces designed for rest and peace. 
                Home-cooked food available on request.
              </p>
            </div>
            
            <div className="rooms-grid">
              {rooms.map((room, index) => (
                <div key={index} className="room-card card">
                  <div className="room-header">
                    <h3>{room.type}</h3>
                    <div className="room-price-tag">
                      <FaIndianRupeeSign className="price-icon" /> {room.price}
                    </div>
                  </div>
                  
                  <div className="room-details">
                    <div className="room-detail">
                      <FaBed className="detail-icon" />
                      <div className="detail-content">
                        <span className="detail-label">Beds:</span>
                        <span className="detail-value">{room.beds}</span>
                      </div>
                    </div>
                    <div className="room-detail">
                      <FaUsers className="detail-icon" />
                      <div className="detail-content">
                        <span className="detail-label">Capacity:</span>
                        <span className="detail-value">{room.capacity}</span>
                      </div>
                    </div>
                    <div className="room-detail">
                      <FaIndianRupeeSign className="detail-icon" />
                      <div className="detail-content">
                        <span className="detail-label">Room Price:</span>
                        <span className="detail-value highlight">{room.roomPrice}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="room-note">
                    <FaUtensils className="note-icon" />
                    <p>{room.note}</p>
                  </div>
                  
                  <div className="room-features">
                    <h4>What you get:</h4>
                    <ul>
                      {room.features.map((feature, idx) => (
                        <li key={idx}>
                          {feature.icon} {feature.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pricing-section">
              <div className="section-header">
                <h2 className="section-title">Simple & Clear Pricing</h2>
              </div>
              <div className="pricing-table card">
                <table>
                  <thead>
                    <tr>
                      <th>Item / Service</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricing.map((item, index) => (
                      <tr key={index}>
                        <td>{item.item}</td>
                        <td className="price-cell">
                          {item.item.includes('food') ? (
                            item.price
                          ) : (
                            <>
                              <FaIndianRupeeSign className="price-table-icon" /> {item.price}
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="pricing-note">
                  <p><strong>Note:</strong> Same prices apply every day. We keep it simple and honest.</p>
                  <p>Check-out: 12 Noon | Check-in: Flexible | Home-cooked meals available</p>
                </div>
              </div>
            </div>
            
            <div className="booking-cta">
              <h3>Planning a peaceful break in the hills?</h3>
              <p>Call or WhatsApp us anytime — we'll be happy to welcome you</p>
              <div className="cta-buttons">
                <a
                  href="https://wa.me/917001100952"
                  className="btn btn-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="btn-icon" /> WhatsApp Us
                </a>
                <a href="tel:+917001100952" className="btn btn-primary">
                  <FaPhone className="btn-icon" /> Call to Chat
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  export default Rooms;