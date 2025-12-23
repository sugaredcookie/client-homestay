import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight
} from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/rooms', label: 'Rooms & Pricing' },
    { path: '/amenities', label: 'Amenities' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Roshni Homestay</h3>
            <p className="footer-description">
              Tinchulay's premier mountain retreat offering a calm and scenic stay 
              surrounded by hills, tea gardens, and open valley views.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    <FaArrowRight className="link-arrow" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Info</h4>
            <ul className="contact-info">
              <li>
                <FaPhone className="contact-icon" />
                <a href="tel:+917001100952" className="contact-link">
                  +91 7001100952
                </a>
              </li>
              <li>
                <FaWhatsapp className="contact-icon" />
                <a 
                  href="https://wa.me/917001100952" 
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: 7001100952
                </a>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <span className="contact-text">Email: placeholder@email.com</span>
              </li>
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span className="contact-text">Tinchulay</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Roshni Homestay. All rights reserved.</p>
          <p className="footer-note">
            Experience the beauty of nature in comfort and peace.
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917001100952"
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book on WhatsApp"
      >
        <FaWhatsapp className="whatsapp-icon" />
        <span className="whatsapp-text">Book Now</span>
      </a>
    </footer>
  );
};

export default Footer;