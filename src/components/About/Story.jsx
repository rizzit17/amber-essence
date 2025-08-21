// src/components/About/Story.jsx
import React from 'react';
import '../../styles/components/about.css';
// Import the image directly
import interiorImage from '../../assets/images/interior-1.jpg';

const Story = () => {
  return (
    <section className="story-section">
      <div className="container">
        <div className="story-content">
          <div className="story-text">
            <h2>Our Story</h2>
            <p className="subtitle">A Culinary Journey</p>
            <p>
              Founded in 2018 by renowned chef Rishit Chaudhary, Amber Essence began as a passion project 
              to showcase the diverse flavors of Indian cuisine through a contemporary lens. What started 
              as an intimate 30-seat restaurant in Hauz Khas Village has now blossomed into one of 
              Delhi-NCR's most celebrated dining destinations.
            </p>
            <p>
              The name "Amber Essence" reflects our philosophy: capturing the warm, golden essence of 
              traditional Indian hospitality while presenting dishes with modern sophistication and 
              artistic presentation. Each dish tells a story, connecting diners to India's rich 
              culinary heritage while surprising them with innovative techniques and flavor combinations.
            </p>
            <p>
              Our journey has been defined by our commitment to sourcing the finest local ingredients, 
              supporting sustainable farming practices, and creating memorable dining experiences that 
              transcend mere sustenance to become celebrations of taste, culture, and community.
            </p>
          </div>
          <div className="story-image">
            <img 
              src={interiorImage} 
              alt="Amber Essence interior" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '../../assets/images/placeholder.jpg';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;