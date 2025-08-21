// src/components/Reviews/ReviewItem.jsx
import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewItem = ({ review }) => {
  const { name, rating, date, content, avatar } = review;
  
  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  return (
    <div className="review-item">
      <div className="review-header">
        <div className="reviewer-info">
          <img src={avatar || "/images/avatar-default.jpg"} alt={name} className="reviewer-avatar" />
          <div className="reviewer-details">
            <h4 className="reviewer-name">{name}</h4>
            <div className="review-meta">
              <div className="review-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar 
                    key={star} 
                    className={star <= rating ? 'star-filled' : 'star-empty'} 
                  />
                ))}
              </div>
              <span className="review-date">{formatDate(date)}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="review-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ReviewItem;