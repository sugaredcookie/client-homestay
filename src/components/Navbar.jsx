import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  FaHome,
  FaInfoCircle,
  FaBed,
  FaConciergeBell,
  FaImages,
  FaPhoneAlt,
  FaSun,
  FaMoon,
  FaWhatsapp
} from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const navLinks = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/about', label: 'About', icon: <FaInfoCircle /> },
    { path: '/rooms', label: 'Rooms', icon: <FaBed /> },
    { path: '/amenities', label: 'Amenities', icon: <FaConciergeBell /> },
    { path: '/gallery', label: 'Gallery', icon: <FaImages /> },
    { path: '/contact', label: 'Contact', icon: <FaPhoneAlt /> },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo">
            <h1>Roshni Homestay</h1>
            <span className="location">Tinchulay</span>
          </Link>

          <div className="nav-right">
            <div className="nav-links">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => 
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                >
                  <span className="nav-link-icon">{link.icon}</span>
                  <span className="nav-link-text">{link.label}</span>
                </NavLink>
              ))}
            </div>

            <div className="nav-actions">
              <button 
                className="theme-toggle"
                onClick={toggleDarkMode}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>

              <a
                href="https://wa.me/917001100952"
                className="btn btn-whatsapp nav-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;