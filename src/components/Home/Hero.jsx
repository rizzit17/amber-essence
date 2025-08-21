// src/components/Home/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import '../../styles/components/home.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Experience Fine Dining<br>
        </br>at its Finest</h1><br></br><br></br>
        <p>Contemporary Indian cuisine & traditional flavors in the heart of Delhi NCR</p>
        <br></br>
        <div className="hero-buttons">
          <Button as={Link} to="/menu" variant="primary">
            Explore Our Menu
          </Button>
          <Button as={Link} to="/booking" variant="primary">
            Book A Table
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;