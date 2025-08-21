import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, register, logout as authLogout, getCurrentUser } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const initAuth = async () => {
      try {
        const currentUser = await getCurrentUser();
        if (currentUser) {
          setUser(currentUser);
        }
      } catch (error) {
        console.error('Authentication initialization error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  const loginUser = async (email, password) => {
    setError(null);
    try {
      const userData = await login(email, password);
      setUser(userData);
      navigate('/'); // Redirect after successful login
      return userData;
    } catch (error) {
      setError(error.response?.data?.message || error.message || 'Login failed');
      throw error;
    }
  };

  const signup = async (name, email, password) => {
    setError(null);
    try {
      const userData = await register({ name, email, password });
      setUser(userData);
      navigate('/'); // Redirect after successful signup
      return userData;
    } catch (error) {
      setError(error.response?.data?.message || error.message || 'Registration failed');
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authLogout();
      setUser(null);
      navigate('/login'); // Redirect to login after logout
    } catch (error) {
      console.error('Logout error:', error);
      setError(error.message || 'Logout failed');
    }
  };

  const value = {
    user,
    isLoading,
    error,
    login: loginUser,
    signup, // Renamed from register to match your component
    logout,
    isAuthenticated: !!user,
    clearError: () => setError(null), // Added error clearing function
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};