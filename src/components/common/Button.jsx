import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, to, type = 'button', variant = 'primary', onClick, className = '', disabled = false, full = false, size = 'md' }) => {
  const buttonClasses = `btn btn-${variant} btn-${size} ${full ? 'btn-full' : ''} ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;