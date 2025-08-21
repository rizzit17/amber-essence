// src/pages/ContactPage.jsx
import React from 'react';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import LocationMap from '../components/Contact/LocationMap';
import '../styles/pages/contact.css';
import contactHeroBg from '../assets/images/contact-hero-bg.jpg'; // Update with your image path

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Hero Section with Background Image */}
      <section 
        className="contact-hero" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${contactHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container">
          <div className="contact-hero-content">
            <br></br>
            <h1>Contact Us</h1>
            <p>We'd love to hear from you</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="contact-main">
        <div className="container">
          {/* Contact Grid - Form and Info */}
          <section className="contact-grid">
            <div className="contact-form-section">
              <h2 className="section-title">Send us a Message</h2>
              <ContactForm />
            </div>
            
            <div className="contact-info-section">
              <ContactInfo />
            </div>
          </section>
<br></br>
          {/* Map Section */}
          <section className="map-section">
            <LocationMap />
          </section>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;