// src/pages/SignupPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Signup from '../components/Auth/Signup';
import '../styles/components/auth.css';

const SignupPage = () => {
  return (
    <div className="auth-page signup-page">
      <div className="auth-container">
        <div className="auth-content">
          <h1>Join Amber Essence</h1>
          <p>Create an account to make reservations, save preferences, and receive exclusive offers.</p>
          <Signup />
          <div className="auth-redirect">
            <p>Already have an account? <Link to="/login">Sign in</Link></p>
          </div>
        </div>
        <div className="auth-image">
          <img src="/images/interior-2.jpg" alt="Amber Essence Dining Experience" />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;