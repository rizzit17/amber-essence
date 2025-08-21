// src/components/Menu/MenuCategory.jsx
import React from 'react';

const MenuCategory = ({ category, isActive, onClick }) => {
  return (
    <button
      className={`menu-category ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {category.name}
    </button>
  );
};

export default MenuCategory;