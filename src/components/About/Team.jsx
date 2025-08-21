import React, { useState } from 'react';
import '../../styles/components/about.css';

// Import team member images directly
import chefRishit from '../../assets/images/chef.jpg';
import chefShreya from '../../assets/images/team1.jpg';
import chefSiddharth from '../../assets/images/team2.jpg';
import managerRishi from '../../assets/images/team3.jpg';
import placeholder from '../../assets/images/placeholder.jpg';

// Map of team member IDs to imported images
const teamImageMap = {
  'rishit': chefRishit,
  'shreya': chefShreya,
  'siddharth': chefSiddharth,
  'rishi': managerRishi
};

const Team = () => {
  const [teamMembers] = useState([
    {
      id: 'rishit',
      name: 'Rishit Chaudhary',
      position: 'Founder & Executive Chef',
      bio: 'With over 15 years of experience in renowned kitchens across the world...',
      imagePath: '../../assets/images/chef.jpg' // Fallback path
    },
    {
      id: 'shreya',
      name: 'Shreya Sundli',
      position: 'Head Chef',
      bio: 'Specializes in traditional North Indian cuisine with a modern twist...',
      imagePath: '../../assets/images/team1.jpg'
    },
    {
      id: 'siddharth',
      name: 'Siddharth Verma',
      position: 'Pastry Chef',
      bio: 'Trained in France, combines European pastry techniques with Indian ingredients...',
      imagePath: '../../assets/images/team2.jpg'
    },
    {
      id: 'rishi',
      name: 'Rishi Chalana',
      position: 'Restaurant Manager',
      bio: 'Ensures every guest experiences impeccable service and hospitality...',
      imagePath: '../../assets/images/team3.jpg'
    }
  ]);

  // Function to get the correct image source
  const getImageSource = (member) => {
    // First try: Direct import from imageMap
    if (teamImageMap[member.id]) {
      return teamImageMap[member.id];
    }
    
    // Second try: Path from member data (if needed)
    // Note: In production, you'd typically use only one method
    return placeholder; // Final fallback
  };

  return (
    <section className="team-section">
      <div className="container">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div className="team-card" key={member.id}>
              <div className="team-image-container">
                <img 
                  src={getImageSource(member)}
                  alt={member.name}
                  onError={(e) => {
                    console.error(`Failed to load image for ${member.name}`);
                    e.target.src = placeholder;
                  }}
                />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="position">{member.position}</p>
                <p className="bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;