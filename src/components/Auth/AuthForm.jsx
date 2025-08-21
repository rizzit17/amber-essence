// src/components/Auth/AuthForm.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Added missing import
import Button from '../common/Button'; // Added missing import

const AuthForm = ({ isLogin, formData, handleChange, handleSubmit, isSubmitting }) => {
  return (
    <form onSubmit={handleSubmit} className="auth-form">
      {!isLogin && (
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
          />
        </div>
      )}
      
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Your email address"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder={isLogin ? 'Your password' : 'Create a password (min 8 chars)'}
        />
      </div>
      
      {!isLogin && (
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            placeholder="Confirm your password"
          />
        </div>
      )}
      
      {isLogin && (
        <div className="forgot-password">
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
      )}
      
      <Button 
        type="submit" 
        variant="primary" 
        disabled={isSubmitting}
        fullWidth
        className="auth-submit-button"
      >
        {isSubmitting ? (
          <>
            <span className="spinner"></span>
            {isLogin ? 'Signing in...' : 'Creating account...'}
          </>
        ) : (
          isLogin ? 'Sign In' : 'Create Account'
        )}
      </Button>
    </form>
  );
};

export default AuthForm;