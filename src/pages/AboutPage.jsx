import React, { useState, useEffect } from 'react';
import '../styles/pages/about.css';

// Import all images directly
import chefImage from '../assets/images/chef.jpg';
import heroImage from '../assets/images/about-hero.jpg';
import team1Image from '../assets/images/team1.jpg';
import team2Image from '../assets/images/team2.jpg';
import team3Image from '../assets/images/team3.jpg';
import interior1 from '../assets/images/placeholder.jpg';
import interior2 from '../assets/images/interior-2.jpg';
import interior3 from '../assets/images/interior-3.jpg';
import interior4 from '../assets/images/interior-4.jpg';
import kitchen1 from '../assets/images/kitchen-1.jpg';
import exterior2 from '../assets/images/exterior-2.jpg';
import placeholder from '../assets/images/placeholder.jpg';
import heroBg from '../assets/images/our-story.jpg';

// Import icon images
import leafIcon from '../assets/images/leaf.png';
import mortarIcon from '../assets/images/mortar.png';
import bulbIcon from '../assets/images/bulb.png';
import heartIcon from '../assets/images/heart.png';

const AboutPage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger the transition after component mounts
    setLoaded(true);
  }, []);

  return (
    <div className={`about-page ${loaded ? 'page-visible' : ''}`}>
      {/* Hero Section */}
      <div className="about-hero">
        <div 
          className="about-hero-bg"
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>
        <div className="container">
          <br /><br />
          <h1>Our Story</h1><br />
          <p>A timeless journey of Indian flavors, where tradition meets elegance in every exquisite bite</p>
        </div>
      </div>
      
      {/* Story Section */}
      <section className="our-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2>A Culinary Journey</h2>
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
                src={heroImage}
                alt="Hero Rishit Chaudhary"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholder;
                }}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Philosophy Section */}
      <section className="our-philosophy">
        <div className="container">
          <div className="philosophy-content">
            <h2>Our Philosophy</h2>
            <div className="philosophy-grid">
              <div className="philosophy-item">
                <div className="philosophy-icon">
                  <img src={leafIcon} alt="Seasonal Ingredients" className="philosophy-icon-img" />
                </div>
                <h3>Seasonal Ingredients</h3>
                <p>
                  We source the freshest seasonal ingredients from local farmers and sustainable sources 
                  to ensure the highest quality and flavor in every dish. Our chefs work closely with 
                  trusted suppliers who share our commitment to ethical and responsible farming practices.
                </p>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-icon">
                  <img src={mortarIcon} alt="Traditional Techniques" className="philosophy-icon-img" />
                </div>
                <h3>Traditional Techniques</h3>
                <p>
                  We honor time-tested cooking methods and techniques that have been passed down through 
                  generations of Indian culinary tradition. From slow-cooking in clay ovens to the art of 
                  hand-pounding spices, we preserve these authentic methods while adapting them for 
                  contemporary presentations.
                </p>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-icon">
                  <img src={bulbIcon} alt="Creative Innovation" className="philosophy-icon-img" />
                </div>
                <h3>Creative Innovation</h3>
                <p>
                  We embrace innovation and creativity, constantly exploring new ways to present familiar 
                  flavors and create unexpected culinary experiences. Our chefs experiment with textures, 
                  temperatures, and presentations while always respecting the integrity of the ingredients.
                </p>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-icon">
                  <img src={heartIcon} alt="Passionate Service" className="philosophy-icon-img" />
                </div>
                <h3>Passionate Service</h3>
                <p>
                  We believe that exceptional food must be matched with warm, attentive service to create 
                  a truly memorable dining experience. Our staff undergoes rigorous training to ensure 
                  every guest feels welcomed, valued, and cared for throughout their visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="our-team">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="team-image">
                <img 
                  src={chefImage}
                  alt="Chef Rishit Chaudhary"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = placeholder;
                  }}
                />
              </div>
              <h3>Rishit Chaudhary</h3>
              <p className="team-role">Founder & Executive Chef</p>
              <p className="team-bio">
                With over 15 years of experience in renowned kitchens across the world, Chef Rishit brings 
                his passion for innovative Indian cuisine to every dish at Amber Essence. His culinary 
                journey has taken him from the kitchens of Delhi's finest hotels to Michelin-starred 
                restaurants in Europe, where he developed his signature style of blending traditional 
                Indian flavors with modern techniques.
              </p>
            </div>
            <div className="team-member">
              <div className="team-image">
                <img 
                  src={team1Image}
                  alt="Chef Shreya Sundli"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = placeholder;
                  }}
                />
              </div>
              <h3>Shreya Sundli</h3>
              <p className="team-role">Head Chef</p>
              <p className="team-bio">
                Chef Shreya specializes in traditional North Indian cuisine with a modern twist. Her 
                innovative approach to familiar flavors has earned her multiple culinary awards, including 
                the prestigious Young Chef of the Year award in 2021. With a deep understanding of spice 
                combinations and regional cooking techniques, she brings authenticity and creativity to 
                every dish she creates.
              </p>
            </div>
            <div className="team-member">
              <div className="team-image">
                <img 
                  src={team2Image}
                  alt="Siddharth Verma"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = placeholder;
                  }}
                />
              </div>
              <h3>Siddharth Verma</h3>
              <p className="team-role">Pastry Chef</p>
              <p className="team-bio">
                Trained in France, Siddharth combines European pastry techniques with Indian ingredients 
                to create unique desserts that surprise and delight. After graduating from Le Cordon Bleu 
                in Paris, he worked at several Michelin-starred patisseries before bringing his expertise 
                back to India. His creations showcase the perfect balance between Western precision and 
                Indian flavors.
              </p>
            </div>
            <div className="team-member">
              <div className="team-image">
                <img 
                  src={team3Image}
                  alt="Rishi Chalana"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = placeholder;
                  }}
                />
              </div>
              <h3>Rishi Chalana</h3>
              <p className="team-role">Restaurant Manager</p>
              <p className="team-bio">
                Rishi ensures that every guest at Amber Essence experiences impeccable service and 
                hospitality, creating a warm and welcoming atmosphere. With over a decade of experience 
                in luxury hospitality management, he leads our front-of-house team with a focus on 
                attention to detail and personalized service that makes every visit memorable.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="restaurant-gallery">
        <div className="container">
          <h2 className="section-title">Our Space</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img 
                src={interior1}
                alt="Restaurant Interior"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholder;
                }}
              />
            </div>
            <div className="gallery-item">
              <img 
                src={interior2}
                alt="Dining Area"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholder;
                }}
              />
            </div>
            <div className="gallery-item">
              <img 
                src={interior3}
                alt="Bar Area"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholder;
                }}
              />
            </div>
            <div className="gallery-item">
              <img 
                src={interior4}
                alt="Private Dining Room"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholder;
                }}
              />
            </div>
            <div className="gallery-item">
              <img 
                src={kitchen1}
                alt="Kitchen"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholder;
                }}
              />
            </div>
            <div className="gallery-item">
              <img 
                src={exterior2}
                alt="Restaurant Exterior"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholder;
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;