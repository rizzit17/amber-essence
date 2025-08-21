// src/components/Menu/MenuList.jsx
import React from 'react';
import MenuItem from './MenuItem';

const MenuList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="no-items">
        <p>No menu items found in this category.</p>
      </div>
    );
  }

  return (
    <div className="menu-list">
      {items.map(item => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MenuList;