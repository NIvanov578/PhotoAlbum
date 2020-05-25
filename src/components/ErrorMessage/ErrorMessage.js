import React from 'react';
import './ErrorMessage.css';

export default function ({ error }) {
  return <div className="error">{error}</div>;
}
