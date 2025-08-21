// Format price to INR currency
export const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };
  
  // Format date to readable format
  export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  
  // Format time to 12-hour format
  export const formatTime = (time) => {
    return new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  };
  
  // Generate array of dates for booking calendar
  export const getNextNDays = (n) => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < n; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    
    return dates;
  };
  
  // Check if a date is today
  export const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };
  
  // Truncate text with ellipsis
  export const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };
  
  // Scroll to top of page smoothly
  export const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  // Generate random ID
  export const generateId = () => {
    return Math.random().toString(36).substring(2, 9);
  };
  
  // Calculate how many people are in a given review rating
  export const calculateRatingPercentages = (reviews) => {
    const totals = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    
    reviews.forEach(review => {
      totals[review.rating]++;
    });
    
    const total = reviews.length;
    
    return {
      five: (totals[5] / total) * 100,
      four: (totals[4] / total) * 100,
      three: (totals[3] / total) * 100,
      two: (totals[2] / total) * 100,
      one: (totals[1] / total) * 100,
    };
  };
  
  // Calculate average rating
  export const calculateAverageRating = (reviews) => {
    if (!reviews.length) return 0;
    
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / reviews.length).toFixed(1);
  };