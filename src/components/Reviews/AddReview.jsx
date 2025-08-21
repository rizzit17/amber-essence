// src/components/Reviews/AddReview.jsx
import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { FaStar } from 'react-icons/fa';
import Button from '../common/Button';

const AddReview = ({ onAddReview }) => {
  const { user, isAuthenticated } = useAuth();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (rating === 0) {
      setError('Please select a rating.');
      return;
    }
    
    if (content.trim().length < 10) {
      setError('Please enter a review with at least 10 characters.');
      return;
    }
    
    const newReview = {
      name: user?.name || 'Anonymous Guest',
      rating,
      content
    };
    
    onAddReview(newReview);
    setRating(0);
    setContent('');
    setIsFormVisible(false);
  };
  
  return (
    <div className="add-review">
      {!isFormVisible ? (
        <div className="add-review-prompt">
          <h3>Share Your Experience</h3>
          <p>We value your feedback. Let us know how your dining experience was.</p>
          <Button 
            variant="primary" 
            onClick={() => setIsFormVisible(true)}
          >
            Write a Review
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="review-form">
          <h3>Your Review</h3>
          
          {error && <div className="review-error">{error}</div>}
          
          <div className="form-group">
            <label>Your Rating</label>
            <div className="star-rating">
              {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                  <label key={index}>
                    <input
                      type="radio"
                      name="rating"
                      value={starValue}
                      onClick={() => setRating(starValue)}
                    />
                    <FaStar
                      className={starValue <= (hover || rating) ? 'star-filled' : 'star-empty'}
                      onMouseEnter={() => setHover(starValue)}
                      onMouseLeave={() => setHover(0)}
                    />
                  </label>
                );
              })}
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="review-content">Your Review</label>
            <textarea
              id="review-content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Tell us about your experience..."
              rows="5"
              required
            ></textarea>
          </div>
          
          <div className="form-actions">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setIsFormVisible(false)}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              variant="primary"
            >
              Submit Review
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddReview;