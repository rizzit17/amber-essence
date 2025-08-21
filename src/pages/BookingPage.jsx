// src/pages/BookingPage.jsx
import React from 'react';
import BookingForm from '../components/Booking/BookingForm';
import '../styles/components/booking.css';

const BookingPage = () => {
  return (
    <div className="booking-page">
      <div className="booking-hero">
        <div className="booking-hero-overlay"></div>
        <div className="booking-hero-content">
          <h1>Reserve Your Table</h1>
          <p>Experience an unforgettable culinary journey at Amber Essence</p>
        </div>
      </div>
      
      <div className="booking-container">
        <div className="booking-content">
          <div className="booking-info">
            <h2>Dining Hours</h2>
            <div className="hours-grid">
              <div className="hours-item">
                <h3>Lunch</h3>
                <p>Monday - Sunday</p>
                <p>12:00 PM - 3:00 PM</p>
              </div>
              <div className="hours-item">
                <h3>Dinner</h3>
                <p>Monday - Sunday</p>
                <p>7:00 PM - 11:00 PM</p>
              </div>
            </div>
            
            <div className="booking-notes">
              <h3>Please Note</h3>
              <ul>
                <li>We hold reservations for 15 minutes past the scheduled time</li>
                <li>For parties of 8 or more, please contact us directly</li>
                <li>Special arrangements can be made for private events</li>
                <li>A credit card is required to secure your reservation</li>
              </ul>
            </div>
          </div>
          
          <div className="booking-form-container">
            <h2>Make a Reservation</h2>
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;