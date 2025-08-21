import React from 'react';

const AwardItem = ({ award }) => {
  const { title, organization, year, description, image } = award;
  
  return (
    <div className="award-item">
      <div className="award-image">
        <img 
          src={image} 
          alt={`${title} award`}
          onError={(e) => {
            e.target.src = '/assets/images/fallback-award.png';
          }}
        />
      </div>
      <div className="award-content">
        <div className="award-year">{year}</div>
        <h3 className="award-title">{title}</h3>
        <div className="award-organization">{organization}</div>
        <p className="award-description">{description}</p>
      </div>
    </div>
  );
};

export default AwardItem;