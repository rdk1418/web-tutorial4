import React, { useState } from 'react';
import './styles.css';
import ToasterMessage from './ToasterMessage';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [showToaster, setShowToaster] = useState(false);
  const [toasterMessage, setToasterMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const response = await fetch('https://express-t4.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: formData.email,
          password: formData.password
        })
      });
  
      if (response.ok) {
        
       
        navigate('/profile');
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      setToasterMessage("Failed to login. Please try again.");
      setShowToaster(true);
    }
  };
  

  return (
    <div className="form-container">
      <h1 className="form-title">Login Form</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {showToaster && <ToasterMessage message={toasterMessage} />}
    </div>
  );
};

export default LoginForm;
