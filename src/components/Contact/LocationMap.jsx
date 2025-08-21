// src/components/Contact/LocationMap.jsx
import React from 'react';

const LocationMap = () => {
  return (
    <div className="location-map">
      <h2>Find Us</h2>
      <div className="map-container">
        {/* In a real project, you would use Google Maps API or similar */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5982243177426!2d77.20498561508096!3d28.546575982449856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMyJzQ3LjciTiA3N8KwMTInMjUuMCJF!5e0!3m2!1sen!2sin!4v1617358259979!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          title="Amber Essence Location"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationMap;