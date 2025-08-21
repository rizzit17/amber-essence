// src/pages/MenuPage.jsx
import React, { useState, useEffect } from 'react';
import MenuList from '../components/Menu/MenuList';
import MenuCategory from '../components/Menu/MenuCategory';
import Loader from '../components/common/Loader';
import { getMenuItems } from '../services/menuService';
import '../styles/pages/menu.css';

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'starters', name: 'Starters' },
    { id: 'main', name: 'Main Course' },
    { id: 'tandoor', name: 'Tandoor Specials' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' }
  ];

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const data = await getMenuItems();
        setMenuItems(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching menu items:', error);
        setIsLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="menu-page">
      <div className="menu-hero">
        <div className="menu-hero-bg"></div>
        <div className="container">
          <br></br><br></br>
          <h1>Our Menu</h1>
          <br></br>
          <p>Experience the finest flavors of India with a contemporary twist</p>
        </div>
      </div>

      <div className="container">
        <div className="menu-categories-wrapper">
          <div className="menu-categories">
            {categories.map(category => (
              <MenuCategory 
                key={category.id}
                category={category}
                isActive={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              />
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="loader-container">
            <Loader />
          </div>
        ) : (
          <MenuList items={filteredItems} />
        )}
      </div>
    </div>
  );
};

export default MenuPage;