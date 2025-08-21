import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import AuthForm from './AuthForm';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import Button from '../common/Button';
import { Link } from 'react-router-dom';
import { validateEmail, validatePassword } from '../../utils/validators';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const { signup, error: authError, clearError } = useAuth();
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();
    setError('');
    
    // Validate form
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return;
    }
    
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    if (!validatePassword(formData.password)) {
      setError('Password must be at least 8 characters and include a number and special character');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await signup(formData.name, formData.email, formData.password);
      navigate('/');
    } catch (err) {
      setError(err.message || 'An error occurred during sign up. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleSocialSignup = (provider) => {
    console.log(`Signup with ${provider}`);
  };
  
  return (
    <div className="auth-container signup-container">
      <div className="auth-header">
        <h2>Create an Account</h2>
        <p>Join us to experience fine dining at its best</p>
      </div>
      
      {(error || authError) && (
        <div className="auth-error">
          {error || authError}
        </div>
      )}
      
      <AuthForm
        isLogin={false}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
      
      <div className="social-auth">
        <p>Or sign up with</p>
        <div className="social-buttons">
          <Button 
            variant="outline" 
            onClick={() => handleSocialSignup('google')}
            className="social-button"
          >
            <FaGoogle /> Google
          </Button>
          <Button 
            variant="outline" 
            onClick={() => handleSocialSignup('facebook')}
            className="social-button"
          >
            <FaFacebook /> Facebook
          </Button>
        </div>
      </div>
      
      <div className="auth-redirect">
        <p>Already have an account? <Link to="/login">Log in</Link></p>
      </div>
    </div>
  );
};

export default Signup;