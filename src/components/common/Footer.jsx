import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/logo.png';
import facebookIcon from '../../assets/images/facebook.png';
import instagramIcon from '../../assets/images/instagram.jpeg';
import twitterIcon from '../../assets/images/twitter.jpg';
import youtubeIcon from '../../assets/images/youtube.png';
import mapIcon from '../../assets/images/map.jpeg';
import phoneIcon from '../../assets/images/phone.png';
import envelopeIcon from '../../assets/images/envelope.jpg';
import clockIcon from '../../assets/images/clock.jpg';
import '../../styles/components/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={logoImage} alt="Amber Essence Logo" className="footer-logo-img" />
            <h3>Amber Essence</h3>
            <p>Crafting culinary masterpieces<br />in the heart of Delhi-NCR</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img src={facebookIcon} alt="Facebook" className="social-icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src={instagramIcon} alt="Instagram" className="social-icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <img src={twitterIcon} alt="Twitter" className="social-icon" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <img src={youtubeIcon} alt="YouTube" className="social-icon" />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/awards">Awards</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><Link to="/booking">Book a Table</Link></li>
              <li><a href="#">Private Dining</a></li>
              <li><a href="#">Events & Celebrations</a></li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Catering</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>
              <img src={mapIcon} alt="Map marker" className="contact-icon" />
              42 Luxury Lane, Sector 29, Gurugram, Delhi-NCR
            </p>
            <p>
              <img src={phoneIcon} alt="Phone" className="contact-icon" />
              +91 98765 43210
            </p>
            <p>
              <img src={envelopeIcon} alt="Envelope" className="contact-icon" />
              info@amberessence.com
            </p>
            <p>
              <img src={clockIcon} alt="Clock" className="contact-icon" />
              Open : Mon-Sun, 12PM - 12AM
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Amber Essence. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;