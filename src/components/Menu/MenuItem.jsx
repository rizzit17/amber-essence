// src/components/Menu/MenuItem.jsx
import React, { useState } from 'react';

// Import these sample images directly
// Replace these imports with your actual images
import dish1 from '../../assets/images/dish-1.jpg';
import dish2 from '../../assets/images/dish-2.jpg';
import dish3 from '../../assets/images/dish-3.jpg';
import dish4 from '../../assets/images/dish-4.jpg';
import dish5 from '../../assets/images/dish-5.jpg';
import dish6 from '../../assets/images/dish-6.jpg';
import dish7 from '../../assets/images/dish-7.jpg';
import dish8 from '../../assets/images/dish-8.jpg';
import dish9 from '../../assets/images/dish-9.jpg';
import dish10 from '../../assets/images/dish-10.jpg';
import dish11 from '../../assets/images/dish-11.jpg';
import dish12 from '../../assets/images/dish-12.jpg';
import dish13 from '../../assets/images/dish-13.jpg';
import dish14 from '../../assets/images/dish-14.jpg';
import dish15 from '../../assets/images/dish-15.jpg';
import dish16 from '../../assets/images/dish-16.jpg';
import dish17 from '../../assets/images/dish-17.jpg';
import dish18 from '../../assets/images/dish-18.jpg';
// Add more imports as needed

// Map of image IDs to imported images
const imageMap = {
  'item1': dish1,
  'item2': dish2,
  'item3': dish3,
  'item4': dish4,
  'item5': dish5,
  'item6': dish6,
  'item7': dish7,
  'item8': dish8,
  'item9': dish9,
  'item10': dish10,
  'item11': dish11,
  'item12': dish12,
  'item13': dish13,
  'item14': dish14,
  'item15': dish15,
  'item16': dish16,
  'item17': dish17,
  'item18': dish18,
  // Add more mappings as needed
};

const MenuItem = ({ item }) => {
  const { id, name, description, price, image, isSpicy, isVegetarian, isRecommended } = item;
  const [imageError, setImageError] = useState(false);

  // Function to determine the correct image source
  const getImageSource = () => {
    // First priority: Use the imported image if available
    if (imageMap[id]) {
      return imageMap[id];
    }
    
    // Second priority: Try the image path from the item data
    if (image && !imageError) {
      return image;
    }
    
    // Fallback: Return a placeholder
    return "/assets/images/placeholder.jpg";
  };

  return (
    <div className="menu-item">
      {/* Always render the image container */}
      <div className="menu-item-image">
        <img 
          src={getImageSource()}
          alt={`${name}`}
          onError={(e) => {
            console.error(`Failed to load image: ${image}`);
            setImageError(true);
            // Don't set e.target.src here as it can cause infinite loops
          }}
          style={{ maxWidth: '100%', height: 'auto' }} // Ensure visible dimensions
        />
      </div>
      
      <div className="menu-item-content">
        <div className="menu-item-header">
          <h3>{name}</h3>
          <div className="menu-item-price">₹{price}</div>
        </div>
        
        <p className="menu-item-description">{description}</p>
        
        <div className="menu-item-tags">
          {isVegetarian && (
            <span className="tag vegetarian">
              Vegetarian
            </span>
          )}
          
          {isSpicy && (
            <span className="tag spicy">
              Spicy
            </span>
          )}
          
          {isRecommended && (
            <span className="tag chef-special">
              Chef's Special
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;