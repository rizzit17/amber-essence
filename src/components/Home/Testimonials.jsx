import React, { useState, useEffect } from 'react';
import '../../styles/components/home.css';

// Import testimonial images directly
import testimonial1 from '../../assets/images/testimonial-1.jpg';
import testimonial2 from '../../assets/images/testimonial-2.jpg';
import testimonial3 from '../../assets/images/testimonial-3.jpg';
import placeholder from '../../assets/images/placeholder.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Aarav Malhotra',
      position: 'Food Critic, Delhi Times',
      quote: 'Amber Essence redefines fine dining with its perfect balance of tradition and innovation. Every dish tells a story of India',
      rating: 5,
      image: testimonial1  // Using imported image directly
    },
    {
      id: 2,
      name: 'Maya Singh',
      position: 'Food Blogger',
      quote: 'The attention to detail in both flavor and presentation is unmatched. The Saffron-Infused Lamb Biryani is a masterpiece that must be experienced.',
      rating: 5,
      image: testimonial2
    },
    {
      id: 3,
      name: 'Raj Sharma',
      position: 'Regular Guest',
      quote: 'Beyond the exceptional food, the warm hospitality and elegant ambiance make every visit to Amber Essence a special occasion.',
      rating: 5,
      image: testimonial3
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? "star filled" : "star"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>What Our Guests Say</h2>
        <p className="subtitle">Experiences Shared by Our Valued Patrons</p>
        
        <div className="testimonials-slider">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-item ${index === currentIndex ? 'active' : ''}`}
            >
              <div className="testimonial-image">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = placeholder;
                  }}
                />
              </div>
              <div className="quote-mark">"</div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.position}</p>
              </div>
            </div>
          ))}
          
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;