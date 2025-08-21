import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/components/navbar.css';
import { useAuth } from '../../hooks/useAuth';
// Import logo image directly
import logo from '../../assets/images/logo.png';
import placeholderLogo from '../../assets/images/placeholder.jpg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  const handleLogout = () => {
    logout();
    closeMobileMenu();
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img 
              src={logo} 
              alt="Amber Essence Logo"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = placeholderLogo;
              }}
            />
            <span>AMBER ESSENCE</span>
          </Link>
        </div>

        <div className="navbar-toggle" onClick={toggleMobileMenu}>
          <span className={`toggle-icon ${mobileMenuOpen ? 'active' : ''}`}></span>
        </div>

        <nav className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={closeMobileMenu}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeMobileMenu}>About</NavLink>
            </li>
            <li>
              <NavLink to="/menu" onClick={closeMobileMenu}>Menu</NavLink>
            </li>
            <li>
              <NavLink to="/awards" onClick={closeMobileMenu}>Awards</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMobileMenu}>Contact</NavLink>
            </li>
          </ul>
        </nav>

        <div className={`navbar-actions ${mobileMenuOpen ? 'active' : ''}`}>
          {user ? (
            <>
              <Link to="/booking" className="btn btn-primary" onClick={closeMobileMenu}>
                Book a Table
              </Link>
              <button className="btn btn-secondary" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/booking" className="btn btn-secondary" onClick={closeMobileMenu}>
                Book a Table
              </Link>
              <Link to="/login" className="btn btn-secondary" onClick={closeMobileMenu}>
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;