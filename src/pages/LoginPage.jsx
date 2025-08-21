// src/pages/LoginPage.jsx
import React from 'react';
import Login from '../components/Auth/Login';
import '../styles/components/auth.css';

const LoginPage = () => {
  return (
    <div className="auth-page login-page">
      <div className="auth-container">
        <div className="auth-content">
          <Login />
        </div>
        <div className="auth-image">
          <img src="/images/interior-1.jpg" alt="Amber Essence Interior" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;