// src/components/About/Values.jsx
import React from 'react';
import '../../styles/components/about.css';

const Values = () => {
  const values = [
    {
      id: 1,
      title: 'Quality',
      description: 'We source only the finest ingredients, supporting local farmers and sustainable practices.',
      icon: '🌱'
    },
    {
      id: 2,
      title: 'Innovation',
      description: 'We constantly explore new techniques and flavor combinations while respecting traditional methods.',
      icon: '💡'
    },
    {
      id: 3,
      title: 'Hospitality',
      description: 'We believe in the ancient Indian philosophy of "Atithi Devo Bhava" - treating guests as divine.',
      icon: '🙏'
    },
    {
      id: 4,
      title: 'Sustainability',
      description: 'We are committed to environmentally responsible practices throughout our operations.',
      icon: '♻️'
    }
  ];

  return (
    <section className="values-section">
      <div className="container">
        <h2>Our Values</h2>
        <p className="subtitle">The Principles That Guide Everything We Do</p>
        
        <div className="values-grid">
          {values.map(value => (
            <div className="value-card" key={value.id}>
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
        
        <div className="values-image">
          <img src="../assets/images/interior-2.jpg" alt="Amber Essence dining experience" />
        </div>
      </div>
    </section>
  );
};

export default Values;