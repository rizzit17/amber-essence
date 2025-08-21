// src/components/Booking/Calendar.jsx
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Calendar = ({ selectedDate, onChange }) => {
  const [date, setDate] = useState(selectedDate || new Date());
  
  const handleChange = (date) => {
    setDate(date);
    onChange(date);
  };
  
  // Function to check if a date should be disabled
  const isDateDisabled = (date) => {
    // Disable dates in the past
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (date < today) {
      return true;
    }
    
    // Disable dates more than 3 months in the future
    const threeMonthsFromNow = new Date();
    threeMonthsFromNow.setMonth(threeMonthsFromNow.getMonth() + 3);
    
    if (date > threeMonthsFromNow) {
      return true;
    }
    
    return false;
  };
  
  return (
    <div className="calendar-wrapper">
      <DatePicker
        selected={date}
        onChange={handleChange}
        inline
        minDate={new Date()}
        maxDate={new Date(new Date().setMonth(new Date().getMonth() + 3))}
        filterDate={(date) => !isDateDisabled(date)}
        dateFormat="MMMM d, yyyy"
        showDisabledMonthNavigation
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className="custom-header">
            <button
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
              className="month-nav-button"
            >
              <FaChevronLeft />
            </button>
            <span className="month-year">
              {date.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </span>
            <button
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
              className="month-nav-button"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default Calendar;

