import React, { useState } from 'react';
import { 
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaLocationDot,
  FaCalendarDays,
  FaUsers,
  FaPaperPlane,
  FaHeart
} from 'react-icons/fa6';
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
Hello from Roshni Homestay website!
      
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
      action: 'Call to Chat'
    },
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      detail: '7001100952',
      link: 'https://wa.me/917001100952',
      action: 'Message Us'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      detail: 'placeholder@email.com',
      link: 'mailto:placeholder@email.com',
      action: 'Send Email'
    },
    {
      icon: <FaLocationDot />, // Changed from FaMapMarkerAlt
      title: 'Our Location',
      detail: 'Tinchulay',
      link: '#',
      action: 'View Location'
    }
  ];

  return (
    <div className="contact-page">
      <section className="contact-hero section">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Talk to Us</h1>
            <p className="section-description">
              Planning a peaceful break in the hills? We'd love to welcome you to our simple home.
            </p>
          </div>
          
          <div className="contact-content">
            <div className="contact-info-section">
              <div className="section-header">
                <h2 className="section-title">Reach Out Anytime</h2>
                <p className="section-description">We're here to help plan your peaceful stay</p>
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
                <div className="quick-info-header">
                  <FaHeart className="quick-info-icon" />
                  <h3>Simple & Friendly</h3>
                </div>
                <ul>
                  <li><FaCalendarDays className="info-icon" /> <strong>Check-in:</strong> Flexible, like visiting family</li>
                  <li><FaCalendarDays className="info-icon" /> <strong>Check-out:</strong> 12 Noon, no rush</li>
                  <li><FaPaperPlane className="info-icon" /> <strong>Payment:</strong> Cash or digital, whatever works</li>
                  <li><FaUsers className="info-icon" /> <strong>ID Proof:</strong> Simple verification for safety</li>
                </ul>
              </div>
            </div>
            
            <div className="booking-form-section">
              <div className="booking-form card">
                <div className="booking-form-header">
                  <h2>Send Us a Message</h2>
                  <p className="form-subtitle">
                    Share your plans and we'll get back to you personally
                  </p>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="name">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="What should we call you?"
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
                      <label htmlFor="checkIn">When would you like to come? *</label>
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
                      <label htmlFor="checkOut">When would you like to leave? *</label>
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
                      <label htmlFor="guests">How many people? *</label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select number of guests</option>
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4">4 People</option>
                        <option value="5">5+ People</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Anything you'd like to share?</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Special requests, questions, or just say hello..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-whatsapp submit-btn">
                    <FaWhatsapp className="btn-icon" /> Send via WhatsApp
                  </button>
                  
                  <p className="form-note">
                    We'll respond personally, usually within a few hours. Looking forward to connecting!
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