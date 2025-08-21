// Validate email format
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Validate password strength
  export const validatePassword = (password) => {
    // Password must be at least 6 characters
    return password.length >= 6;
  };
  
  // Validate phone number format (Indian format)
  export const validatePhone = (phone) => {
    const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
    return phoneRegex.test(phone);
  };
  
  // Validate name (should not contain numbers or special characters)
  export const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(name) && name.length >= 2;
  };
  
  // Validate booking date (should be in the future)
  export const validateBookingDate = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const bookingDate = new Date(date);
    bookingDate.setHours(0, 0, 0, 0);
    
    return bookingDate >= today;
  };
  
  // Validate booking time (restaurant hours)
  export const validateBookingTime = (time) => {
    const openingTime = 12 * 60; // 12:00 PM in minutes
    const closingTime = 24 * 60; // 12:00 AM in minutes
    
    const [hours, minutes] = time.split(':').map(Number);
    const timeInMinutes = hours * 60 + minutes;
    
    return timeInMinutes >= openingTime && timeInMinutes <= closingTime;
  };
  
  // Validate review content
  export const validateReviewContent = (content) => {
    return content.trim().length >= 10;
  };
  
  // Validate form fields
  export const validateForm = (fields, fieldValidators) => {
    const errors = {};
    
    Object.keys(fields).forEach(field => {
      if (fieldValidators[field]) {
        const value = fields[field];
        const isValid = fieldValidators[field](value);
        
        if (!isValid) {
          errors[field] = `Invalid ${field}`;
        }
      }
    });
    
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  };