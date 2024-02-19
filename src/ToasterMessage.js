import React from 'react';
import './styles.css';

const ToasterMessage = ({ message }) => {
  return (
    <div className="toaster-container">
      <p className="toaster-message">{message}</p>
    </div>
  );
};

export default ToasterMessage;
