// src/components/Reviews/ReviewsList.jsx
import React, { useState, useEffect } from 'react';
import ReviewItem from './ReviewItem';
import AddReview from './AddReview';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ReviewsList = () => {
  // Simulated reviews data - in a real app, this would come from an API
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      date: "2024-12-15",
      content: "Absolutely outstanding dining experience! The fusion of traditional and modern Indian flavors was a delight to the senses. The Saffron-infused Lamb Biryani was simply divine. The ambiance and service were impeccable - truly a gem in Delhi's fine dining scene.",
      avatar: "../assets/images/avatar-1.jpg"
    },
    {
      id: 2,
      name: "Rajat Mehta",
      rating: 4,
      date: "2024-12-05",
      content: "Great ambiance and impressive menu. The Tandoori Lobster was cooked to perfection, and the wine pairing suggestions were spot on. Service was attentive without being intrusive. Would have given 5 stars, but had to wait a bit for the dessert.",
      avatar: "../assets/images/avatar-2.jpg"
    },
    {
      id: 3,
      name: "Sarah Williams",
      rating: 5,
      date: "2024-11-22",
      content: "An exceptional culinary journey! As someone new to Indian cuisine, the staff guided me through the menu with expert recommendations. The Chef's Tasting Menu was a revelation - especially the truffle-infused naan and the cardamom chocolate dessert. Worth every penny!",
      avatar: "../assets/images/avatar-3.jpg"
    },
    {
      id: 4,
      name: "Vikram Singh",
      rating: 5,
      date: "2024-11-10",
      content: "Celebrated our anniversary here and couldn't have chosen better. The private dining experience was intimate and special. Chef's personalized menu was thoughtful and exquisite. The rose petal martini was a highlight!",
      avatar: "../assets/images/avatar-4.jpg"
    },
    {
      id: 5,
      name: "Anjali Kapoor",
      rating: 4,
      date: "2024-10-28",
      content: "Beautiful restaurant with incredible attention to detail. The seasonal tasting menu showcased local ingredients brilliantly. The Himalayan Morel Mushroom starter was outstanding. Service was generally excellent, though the dining room was a bit noisy.",
      avatar: "../assets/images/avatar-5.jpg"
    }
  ]);
  
  const [averageRating, setAverageRating] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 3;
  
  // Calculate average rating
  useEffect(() => {
    if (reviews.length > 0) {
      const total = reviews.reduce((sum, review) => sum + review.rating, 0);
      setAverageRating((total / reviews.length).toFixed(1));
    }
  }, [reviews]);
  
  // Get current reviews for pagination
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  const handleAddReview = (newReview) => {
    // In a real app, you would send this to an API first
    const reviewWithId = {
      ...newReview,
      id: reviews.length + 1,
      date: new Date().toISOString().split('T')[0],
      avatar: "/images/avatar-default.jpg"
    };
    
    setReviews([reviewWithId, ...reviews]);
  };
  
  return (
    <div className="reviews-container">
      <div className="reviews-header">
        <div className="rating-summary">
          <div className="average-rating">
            <span className="rating-number">{averageRating}</span>
            <div className="rating-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar 
                  key={star} 
                  className={star <= Math.round(averageRating) ? 'star-filled' : 'star-empty'} 
                />
              ))}
            </div>
            <span className="total-reviews">Based on {reviews.length} reviews</span>
          </div>
        </div>
      </div>
      
      <AddReview onAddReview={handleAddReview} />
      
      <div className="reviews-list">
        {currentReviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>
      
      {totalPages > 1 && (
        <div className="pagination">
          <button 
            className="pagination-button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FaChevronLeft />
          </button>
          
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          
          <button 
            className="pagination-button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewsList;