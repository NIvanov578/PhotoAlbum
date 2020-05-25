import React from 'react';
import './Button.css';

export default function ({ label, handleClick, className }) {
  const classes = className ? `button + ${className}` : 'button';

  return (
    <button className={classes} onClick={handleClick}>
      {label}
    </button>
  );
}
