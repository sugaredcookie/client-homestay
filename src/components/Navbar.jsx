import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  FaHouse,           // Changed from FaHome
  FaCircleInfo,      // Changed from FaInfoCircle
  FaBed,
  FaBellConcierge,   // Changed from FaConciergeBell
  FaImages,
  FaPhone,           // Changed from FaPhoneAlt
  FaSun,
  FaMoon,
  FaWhatsapp
} from 'react-icons/fa6'; // Changed from 'fa' to 'fa6'
import '../styles/Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const navLinks = [
    { path: '/', label: 'Home', icon: <FaHouse /> },
    { path: '/about', label: 'About', icon: <FaCircleInfo /> },
    { path: '/rooms', label: 'Rooms', icon: <FaBed /> },
    { path: '/amenities', label: 'Amenities', icon: <FaBellConcierge /> },
    { path: '/gallery', label: 'Gallery', icon: <FaImages /> },
    { path: '/contact', label: 'Contact', icon: <FaPhone /> },
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