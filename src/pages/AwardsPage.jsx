// src/pages/AwardsPage.jsx
import React from 'react';
import AwardsList from '../components/Awards/AwardsList';
import '../styles/pages/awards.css';

// Import all award images
import award1 from '../assets/images/award-delhi-food.png';
import award2 from '../assets/images/award-chef-year.png';
import award3 from '../assets/images/award-ambience.png';
import award4 from '../assets/images/award-top10.png';
import award5 from '../assets/images/award-customer-service.png';

const AwardsPage = () => {
  // Award data with imported images
  const awards = [
    {
      id: 1,
      title: "Best Fine Dining Restaurant",
      organization: "Delhi Food Awards",
      year: 2024,
      description: "Recognized for exceptional culinary innovation and outstanding dining experience.",
      image: award1
    },
    {
      id: 2,
      title: "Chef of the Year",
      organization: "Indian Culinary Federation",
      year: 2023,
      description: "Awarded to Chef Rishit Chaudhary for his contribution to modern Indian cuisine.",
      image: award2
    },
    {
      id: 3,
      title: "Best Restaurant Ambience",
      organization: "Hospitality Excellence Awards",
      year: 2023,
      description: "Recognized for our thoughtfully designed interior and exceptional atmosphere.",
      image: award3
    },
    {
      id: 4,
      title: "Top 10 Restaurants in Delhi-NCR",
      organization: "Gourmet Guide",
      year: 2022,
      description: "Featured among the top 10 dining destinations in the Delhi-NCR region.",
      image: award4
    },
    {
      id: 5,
      title: "Excellence in Customer Service",
      organization: "Hospitality Guild of India",
      year: 2022,
      description: "Awarded for our dedication to providing an exceptional guest experience.",
      image: award5
    }
  ];

  return (
    <div className="awards-page">
      <div className="awards-hero">
        <div className="awards-hero-bg"></div>
        <div className="container">
          <h1>Our Achievements</h1>
          <p>Recognition for our passion and dedication</p>
        </div>
      </div>

      <div className="container">
        <div className="awards-intro">
          <h2>Culinary Excellence</h2>
          <p>
            At Amber Essence, we are honored to have received recognition for our dedication to culinary 
            excellence and exceptional dining experiences. Each award represents our team's passion 
            and commitment to pushing the boundaries of modern Indian cuisine while honoring traditional flavors.
          </p>
        </div>

        <AwardsList awards={awards} />
      </div>
    </div>
  );
};

export default AwardsPage;