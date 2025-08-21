import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import '../../styles/components/home.css';

// Import dish images directly
import dish1 from '../../assets/images/dish-15.jpg';
import dish2 from '../../assets/images/dish-16.jpg';
import dish3 from '../../assets/images/dish-17.jpg';
import dish4 from '../../assets/images/dish-18.jpg';
import placeholder from '../../assets/images/placeholder.jpg';

const FeaturedDishes = () => {
  const featuredDishes = [
    {
      id: 1,
      name: 'Saffron-Infused Lamb Biryani',
      description: 'Fragrant basmati rice layered with tender lamb, aromatic spices, and saffron, served with raita.',
      image: dish1, // Using imported image directly
      price: '₹795',
      category: 'Main Course'
    },
    {
      id: 2,
      name: 'Truffle Butter Naan',
      description: 'Traditional naan bread enhanced with truffle butter and topped with microgreens.',
      image: dish2,
      price: '₹325',
      category: 'Breads'
    },
    {
      id: 3,
      name: 'Tandoori Lobster',
      description: 'Fresh lobster marinated in yogurt and spices, cooked in a traditional tandoor oven.',
      image: dish3,
      price: '₹1,395',
      category: 'Appetizers'
    },
    {
      id: 4,
      name: 'Saffron Pistachio Kulfi',
      description: 'Traditional Indian ice cream infused with saffron, cardamom, and crushed pistachios.',
      image: dish4,
      price: '₹395',
      category: 'Desserts'
    }
  ];

  return (
    <section className="featured-dishes-section">
      <div className="container">
        <h2>Our Signature Dishes</h2>
        <p className="subtitle">Culinary Masterpieces That Define Our Cuisine</p>
        <br></br>
        <div className="dishes-grid">
          {featuredDishes.map(dish => (
            <div className="dish-card" key={dish.id}>
              <div className="dish-image">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = placeholder;
                  }}
                />
                <span className="dish-category">{dish.category}</span>
              </div>
              <div className="dish-content">
                <h3>{dish.name}</h3>
                <p className="dish-description">{dish.description}</p>
                <p className="dish-price">{dish.price}</p>
              </div>
            </div>
          ))}
        </div>
        <br></br><br></br>
        <div className="featured-dishes-cta">
          <Button as={Link} to="/menu" variant="secondary">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;