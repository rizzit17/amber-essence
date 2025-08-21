import { useContext } from 'react';
import { BookingContext } from '../context/BookingContext';

export const useBooking = () => {
  const context = useContext(BookingContext);
  
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  
  return context;
};