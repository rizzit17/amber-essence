// src/components/Booking/TimeSlots.jsx
import React from 'react';

const TimeSlots = ({ slots, selectedTime, onSelect }) => {
  return (
    <div className="time-slots">
      {slots.map((time) => (
        <button
          key={time}
          type="button"
          className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
          onClick={() => onSelect(time)}
        >
          {time}
        </button>
      ))}
    </div>
  );
};

export default TimeSlots;