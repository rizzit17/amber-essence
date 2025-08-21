import React, { createContext, useState, useCallback } from 'react';
import { createBooking, getAvailableTimeSlots } from '../services/bookingService';
import { useAuth } from '../hooks/useAuth';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const fetchAvailableSlots = useCallback(async (date) => {
    setLoading(true);
    clearError();
    try {
      const slots = await getAvailableTimeSlots(date);
      setAvailableSlots(slots);
      return slots;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 
                         err.message || 
                         'Failed to fetch available time slots';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [clearError]);

  const makeBooking = useCallback(async (bookingData) => {
    setLoading(true);
    clearError();
    try {
      // Include user ID if available
      const bookingWithUser = user?.id ? 
        { ...bookingData, userId: user.id } : 
        bookingData;
      
      const newBooking = await createBooking(bookingWithUser);
      
      setBookings(prev => [...prev, newBooking]);
      // Refresh available slots after successful booking
      await fetchAvailableSlots(bookingData.date);
      
      return newBooking;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 
                         err.message || 
                         'Failed to create booking';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [clearError, fetchAvailableSlots, user]);

  const value = {
    bookings,
    availableSlots,
    loading,
    error,
    fetchAvailableSlots,
    makeBooking,
    clearError,
    // Additional helpful methods
    getUpcomingBookings: useCallback(() => {
      const now = new Date();
      return bookings.filter(booking => 
        new Date(`${booking.date}T${booking.time}`) > now
      ).sort((a, b) => 
        new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`)
      );
    }, [bookings]),
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};