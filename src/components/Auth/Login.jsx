// src/components/Auth/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import AuthForm from './AuthForm';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    
    try {
      await login(formData.email, formData.password);
      navigate('/');
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleSocialLogin = (provider) => {
    // Social login implementation would go here
    console.log(`Login with ${provider}`);
  };
  
  return (
    <>
      <div className="auth-header">
        <h2>Welcome Back</h2>
        <p>Sign in to access your account, manage reservations, and enjoy personalized experiences.</p>
      </div>
      
      {error && <div className="auth-error">{error}</div>}
      
      <AuthForm
        isLogin={true}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
      
      <div className="social-auth">
        <p className="social-auth-divider">Or continue with</p>
        <div className="social-buttons">
          <Button 
            variant="outline" 
            onClick={() => handleSocialLogin('google')}
            className="social-button"
          >
            <FaGoogle className="social-icon" /> Google
          </Button>
          <Button 
            variant="outline" 
            onClick={() => handleSocialLogin('facebook')}
            className="social-button"
          >
            <FaFacebook className="social-icon" /> Facebook
          </Button>
        </div>
      </div>
      
      <div className="auth-footer">
        <p>Don't have an account? <Link to="/signup" className="auth-link">Sign Up</Link></p>
      </div>
    </>
  );
};

export default Login;