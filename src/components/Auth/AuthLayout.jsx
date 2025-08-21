// src/components/Auth/AuthLayout.jsx
import React from 'react';
import '../../styles/components/auth.css'; // Fixed path (removed one ../)

const AuthLayout = ({ children, image }) => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-content">
          {children}
        </div>
        <div className="auth-image">
          <img src={image} alt="Restaurant Interior" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;