// src/components/Awards/AwardsList.jsx
import React from 'react';
import fallbackAward from '../../assets/images/fallback-award.png';

const AwardImage = ({ src, alt }) => {
  const [imgSrc, setImgSrc] = React.useState(src);

  return (
    <img 
      src={imgSrc} 
      alt={alt}
      onError={() => setImgSrc(fallbackAward)}
      className="award-img"
      style={{
        maxWidth: '100%',
        height: 'auto',
        objectFit: 'contain',
        display: 'block',
        margin: '0 auto'
      }}
    />
  );
};

const AwardsList = ({ awards }) => {
  return (
    <div className="awards-list">
      {awards.map((award) => (
        <div key={award.id} className="award-item">
          <div className="award-image">
            <AwardImage 
              src={award.image} 
              alt={`${award.title} award`} 
            />
          </div>
          <div className="award-content">
            <div className="award-year">{award.year}</div>
            <h3 className="award-title">{award.title}</h3>
            <div className="award-organization">{award.organization}</div>
            <p className="award-description">{award.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AwardsList;