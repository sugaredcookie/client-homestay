import React, { useState } from 'react';
import { 
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserFriends,
  FaPaperPlane
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `
New Booking Inquiry from Roshni Homestay Website:
      
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Check-in: ${formData.checkIn}
Check-out: ${formData.checkOut}
Guests: ${formData.guests}
Message: ${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/917001100952?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactMethods = [
    {
      icon: <FaPhone />,
      title: 'Call Us',
      detail: '+91 7001100952',
      link: 'tel:+917001100952',
      action: 'Call Now'
    },
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      detail: '7001100952',
      link: 'https://wa.me/917001100952',
      action: 'Message Now'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      detail: 'placeholder@email.com',
      link: 'mailto:placeholder@email.com',
      action: 'Send Email'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      detail: 'Tinchulay',
      link: '#',
      action: 'View on Map'
    }
  ];

  return (
    <div className="contact-page">
      <section className="contact-hero section">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Contact & Book Now</h1>
            <p className="section-description">
              Get in touch with us to book your stay or ask any questions. 
              We're here to help you plan your perfect mountain getaway.
            </p>
          </div>
          
          <div className="contact-content">
            <div className="contact-info-section">
              <div className="section-header">
                <h2 className="section-title">Contact Information</h2>
              </div>
              <div className="contact-methods">
                {contactMethods.map((method, index) => (
                  <div key={index} className="contact-method card">
                    <div className="method-icon">{method.icon}</div>
                    <div className="method-details">
                      <h4>{method.title}</h4>
                      <p>{method.detail}</p>
                    </div>
                    <a 
                      href={method.link} 
                      className="method-action"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {method.action}
                    </a>
                  </div>
                ))}
              </div>
              
              <div className="quick-info card">
                <h3>Quick Information</h3>
                <ul>
                  <li><FaCalendarAlt className="info-icon" /> <strong>Check-in:</strong> Open check-in</li>
                  <li><FaCalendarAlt className="info-icon" /> <strong>Check-out:</strong> 12 Noon</li>
                  <li><FaPaperPlane className="info-icon" /> <strong>Payment:</strong> Cash or digital payments</li>
                  <li><FaUserFriends className="info-icon" /> <strong>ID Proof:</strong> Government ID required</li>
                </ul>
              </div>
            </div>
            
            <div className="booking-form-section">
              <div className="booking-form card">
                <h2>Booking Inquiry Form</h2>
                <p className="form-subtitle">
                  Fill out this form and we'll contact you via WhatsApp to confirm your booking.
                </p>
                
                <form onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 00000 00000"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="checkIn">Check-in Date *</label>
                      <input
                        type="date"
                        id="checkIn"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="checkOut">Check-out Date *</label>
                      <input
                        type="date"
                        id="checkOut"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="guests">Number of Guests *</label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select guests</option>
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5+ Guests</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Additional Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Any special requests or questions..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-whatsapp submit-btn">
                    <FaWhatsapp className="btn-icon" /> Submit via WhatsApp
                  </button>
                  
                  <p className="form-note">
                    By submitting, you'll be redirected to WhatsApp to send your inquiry.
                    We typically respond within 1-2 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;