import React, { useState, useEffect } from 'react';
import { useBooking } from '../../hooks/useBooking';
import { useAuth } from '../../hooks/useAuth';
import Button from '../common/Button';
import Calendar from './Calendar';
import { FiUser, FiMail, FiPhone, FiClock, FiCalendar, FiUsers, FiGift } from 'react-icons/fi';

const BookingForm = () => {
  const { user } = useAuth();
  const { createBooking } = useBooking();
  
  const [formData, setFormData] = useState({
    date: new Date(),
    time: '',
    guests: 2,
    occasion: '',
    specialRequests: '',
    name: user?.name || '',
    email: user?.email || '',
    phone: ''
  });
  
  const [availableSlots, setAvailableSlots] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');
  
  // Generate time slots
  useEffect(() => {
    const generateTimeSlots = () => {
      const slots = [];
      const today = new Date();
      const isToday = formData.date.toDateString() === today.toDateString();
      
      // Lunch slots
      for (let hour = 12; hour <= 15; hour++) {
        for (let min = 0; min < 60; min += 30) {
          const time = `${hour}:${min === 0 ? '00' : min}`;
          if (isToday) {
            const currentHour = today.getHours();
            const currentMin = today.getMinutes();
            if (hour < currentHour || (hour === currentHour && min <= currentMin)) continue;
          }
          slots.push(time);
        }
      }
      
      // Dinner slots
      for (let hour = 19; hour <= 22; hour++) {
        for (let min = 0; min < 60; min += 30) {
          const time = `${hour}:${min === 0 ? '00' : min}`;
          if (isToday) {
            const currentHour = today.getHours();
            const currentMin = today.getMinutes();
            if (hour < currentHour || (hour === currentHour && min <= currentMin)) continue;
          }
          slots.push(time);
        }
      }
      
      return slots;
    };
    
    setAvailableSlots(generateTimeSlots());
    setFormData(prev => ({ ...prev, time: '' }));
  }, [formData.date]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleDateChange = (date) => {
    setFormData(prev => ({ ...prev, date }));
  };
  
  const handleTimeSelect = (time) => {
    setFormData(prev => ({ ...prev, time }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!formData.time) {
      setError('Please select a time slot.');
      return;
    }
    
    if (!formData.name || !formData.email || !formData.phone) {
      setError('Please fill in all contact information.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const formattedDate = formData.date.toISOString().split('T')[0];
      await createBooking({
        ...formData,
        date: formattedDate
      });
      
      setSubmitSuccess(true);
      setFormData({
        date: new Date(),
        time: '',
        guests: 2,
        occasion: '',
        specialRequests: '',
        name: user?.name || '',
        email: user?.email || '',
        phone: ''
      });
      
      window.scrollTo(0, 0);
    } catch (err) {
      setError('Unable to complete your booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // TimeSlot component moved inside BookingForm
  const TimeSlots = ({ slots, selectedTime, onSelect }) => {
    return (
      <div className="time-slots-grid">
        {slots.map((slot) => (
          <button
            key={slot}
            type="button"
            className={`time-slot ${selectedTime === slot ? 'selected' : ''}`}
            onClick={() => onSelect(slot)}
          >
            {slot}
          </button>
        ))}
      </div>
    );
  };
  
  return (
    <div className="booking-form-container">
      {submitSuccess ? (
        <div className="booking-success">
          <div className="success-icon">
            <svg viewBox="0 0 24 24" width="48" height="48">
              <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
            </svg>
          </div>
          <h2>Booking Confirmed!</h2>
          <p>Thank you for your reservation. We've sent a confirmation email with all details.</p>
          <p>Looking forward to serving you at Amber Essence.</p>
          <Button 
            variant="primary" 
            onClick={() => setSubmitSuccess(false)}
            className="success-button"
          >
            Make Another Reservation
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="booking-form">
          {error && (
            <div className="booking-error">
              <svg viewBox="0 0 24 24" width="20" height="20" style={{marginRight: '8px'}}>
                <path fill="currentColor" d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
              </svg>
              {error}
            </div>
          )}
          
          <div className="form-section">
  <h3 className="section-header">
    <FiCalendar className="section-icon" />
    Select Date & Time
  </h3>
  
  <div className="calendar-container">
    <Calendar 
      selectedDate={formData.date}
      onChange={handleDateChange}
    />
  </div>
  
  <div className="time-section">
    <h4 className="time-header">
      <FiClock className="time-icon" />
      Available Time Slots 
    </h4>
    {availableSlots.length > 0 ? (
      <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', color: '#333' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginTop: '10px' }}>
          {availableSlots.map((slot) => (
            <div 
              key={slot}
              style={{ 
                padding: '8px', 
                background: formData.time === slot ? '#2a4365' : '#f0f0f0', 
                color: formData.time === slot ? 'white' : '#333',
                textAlign: 'center',
                cursor: 'pointer',
                borderRadius: '4px'
              }}
              onClick={() => handleTimeSelect(slot)}
            >
              {slot}
            </div>
          ))}
        </div>
      </div>
    ) : (
      <p className="no-slots">No available time slots for this date.</p>
    )}
  </div>
</div>
          
          <div className="form-section">
            <h3 className="section-header">
              <FiUsers className="section-icon" />
               Reservation Details
            </h3>
            
            <div className="form-group">
              <label htmlFor="guests">
                <FiUsers className="input-icon" />
                Number of Guests : 
              </label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
                className="styled-select"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
                <option value="9">9+ (Large Party)</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="occasion">
                <FiGift className="input-icon" />
                Occasion (Optional) : 
              </label>
              <select
                id="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                className="styled-select"
              >
                <option value="">Select an Occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Date">Date Night</option>
                <option value="Business">Business Meal</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="specialRequests">Special Requests (Optional) : </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                placeholder="Any dietary restrictions or special arrangements?"
                rows="3"
                className="styled-textarea"
              ></textarea>
            </div>
          </div>
          
          <div className="form-section">
            <h3 className="section-header">
              <FiUser className="section-icon" />
              Contact Information
            </h3>
            
            <div className="form-group">
              <label htmlFor="name">
                <FiUser className="input-icon" />
                Full Name : 
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="styled-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">
                <FiMail className="input-icon" />
                Email Address : 
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email address"
                className="styled-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">
                <FiPhone className="input-icon" />
                Phone Number : 
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Your phone number"
                className="styled-input"
              />
            </div>
          </div>
          
          <div className="booking-policy">
            <h4>Reservation Policy</h4>
            <p>
              We hold reservations for 15 minutes past the scheduled time. 
              For cancellations, please contact us at least 6 hours before your reservation to avoid a cancellation fee.
            </p>
          </div>
          
          <Button 
            type="submit" 
            variant="primary" 
            disabled={isSubmitting || !formData.time}
            fullWidth
            className="submit-button"
          >
            {isSubmitting ? (
              <>
                <svg className="spinner" viewBox="0 0 50 50">
                  <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                </svg>
                Processing...
              </>
            ) : (
              'Confirm Reservation'
            )}
          </Button>
        </form>
      )}
    </div>
  );
};

export default BookingForm;