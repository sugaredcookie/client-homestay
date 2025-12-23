import React from 'react';
import { FaBed, FaUsers, FaIndianRupeeSign, FaMountain, FaBath, FaFire } from 'react-icons/fa6';
import { FaWhatsapp, FaPhone } from 'react-icons/fa6';
import './Room.css';

const Rooms = () => {
  const rooms = [
    {
      type: 'Standard Room',
      beds: '2 King Beds per room',
      capacity: '2-4 people',
      price: '₹1500 per head',
      roomPrice: '₹2500 per room',
      features: [
        { icon: <FaMountain />, text: 'Mountain view' },
        { icon: <FaBath />, text: 'Attached bathroom' },
        { icon: <FaBed />, text: 'Basic amenities' }
      ]
    },
    {
      type: 'Tent Accommodation',
      beds: 'Comfortable camping tents',
      capacity: '2 people per tent',
      price: '₹1000 per tent',
      roomPrice: 'Same price every day',
      features: [
        { icon: <FaFire />, text: 'Close to nature' },
        { icon: <FaFire />, text: 'Bonfire access' },
        { icon: <FaBath />, text: 'Shared facilities' }
      ]
    }
  ];

  const pricing = [
    { item: 'Per Person (Room)', price: '₹1500' },
    { item: 'Per Room (2-4 pax)', price: '₹2500' },
    { item: 'Tent (2 pax)', price: '₹1000' },
    { item: 'Additional Person', price: '₹500' },
    { item: 'Bonfire (on request)', price: '₹500' }
  ];

  return (
    <div className="rooms-page">
      <section className="rooms-hero section">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Rooms & Pricing</h1>
            <p className="section-description">
              We offer comfortable accommodation with stunning views. All rooms include 
              basic amenities and are designed to provide a peaceful mountain stay experience.
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
                
                <div className="room-features">
                  <h4>Features:</h4>
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
              <h2 className="section-title">Complete Pricing</h2>
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
                        <FaIndianRupeeSign className="price-table-icon" /> {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="pricing-note">
                <p><strong>Note:</strong> Same prices apply every day of the week</p>
                <p>Check-out time: 12 Noon | Open check-in</p>
              </div>
            </div>
          </div>
          
          <div className="booking-cta">
            <h3>Ready to Book Your Stay?</h3>
            <p>Contact us directly via WhatsApp or call for instant booking</p>
            <div className="cta-buttons">
              <a
                href="https://wa.me/917001100952"
                className="btn btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="btn-icon" /> Book on WhatsApp
              </a>
              <a href="tel:+917001100952" className="btn btn-primary">
                <FaPhone className="btn-icon" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;