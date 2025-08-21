// src/components/Contact/ContactInfo.jsx
import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock, FaEnvelope } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2>Contact Information</h2>
      
      <div className="info-item">
        <div className="icon">
          <FaMapMarkerAlt />
        </div>
        <div className="details">
          <h3>Address</h3>
          <p>42, Diplomatic Enclave, Chanakyapuri</p>
          <p>New Delhi, Delhi-NCR, 110021</p>
        </div>
      </div>
      
      <div className="info-item">
        <div className="icon">
          <FaPhone />
        </div>
        <div className="details">
          <h3>Phone</h3>
          <p>Reservations: +91 11 4567 8901</p>
          <p>General Inquiries: +91 11 4567 8902</p>
        </div>
      </div>
      
      <div className="info-item">
        <div className="icon">
          <FaEnvelope />
        </div>
        <div className="details">
          <h3>Email</h3>
          <p>reservations@amberessence.com</p>
          <p>info@amberessence.com</p>
        </div>
      </div>
      
      <div className="info-item">
        <div className="icon">
          <FaClock />
        </div>
        <div className="details">
          <h3>Opening Hours</h3>
          <p>Lunch: 12:00 PM - 3:00 PM (Daily)</p>
          <p>Dinner: 7:00 PM - 11:30 PM (Daily)</p>
          <p>Bar: 5:00 PM - 12:30 AM (Daily)</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;