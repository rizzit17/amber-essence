// In a real application, this would make API calls to a backend server
// For now, we'll simulate booking functionality with localStorage

const BOOKINGS_KEY = 'amber_essence_bookings';

// Simulate getting available time slots
export const getAvailableTimeSlots = async (date) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate some time slots being already booked
      const allTimeSlots = [
        '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
        '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
      ];
      
      // Randomly make some slots unavailable
      const availableSlots = allTimeSlots.filter(() => Math.random() > 0.3);
      
      resolve(availableSlots);
    }, 800);
  });
};

// Create a new booking
export const createBooking = async (bookingData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        // Validate booking data
        if (!bookingData.date || !bookingData.time || !bookingData.guests) {
          reject(new Error('Missing required booking information'));
          return;
        }
        
        // Create booking with ID
        const newBooking = {
          id: 'booking_' + Math.random().toString(36).substr(2, 9),
          ...bookingData,
          status: 'confirmed',
          createdAt: new Date().toISOString(),
        };
        
        // Save to localStorage
        const existingBookingsJson = localStorage.getItem(BOOKINGS_KEY);
        const existingBookings = existingBookingsJson ? JSON.parse(existingBookingsJson) : [];
        existingBookings.push(newBooking);
        localStorage.setItem(BOOKINGS_KEY, JSON.stringify(existingBookings));
        
        resolve(newBooking);
      } catch (error) {
        reject(new Error('Failed to create booking'));
      }
    }, 1000);
  });
};

// Get bookings for a user
export const getUserBookings = async (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const bookingsJson = localStorage.getItem(BOOKINGS_KEY);
      if (bookingsJson) {
        const allBookings = JSON.parse(bookingsJson);
        const userBookings = allBookings.filter(booking => booking.userId === userId);
        resolve(userBookings);
      } else {
        resolve([]);
      }
    }, 800);
  });
};

// Cancel a booking
export const cancelBooking = async (bookingId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const bookingsJson = localStorage.getItem(BOOKINGS_KEY);
        if (!bookingsJson) {
          reject(new Error('Booking not found'));
          return;
        }
        
        const bookings = JSON.parse(bookingsJson);
        const bookingIndex = bookings.findIndex(b => b.id === bookingId);
        
        if (bookingIndex === -1) {
          reject(new Error('Booking not found'));
          return;
        }
        
        bookings[bookingIndex].status = 'cancelled';
        localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
        
        resolve(bookings[bookingIndex]);
      } catch (error) {
        reject(new Error('Failed to cancel booking'));
      }
    }, 800);
  });
};