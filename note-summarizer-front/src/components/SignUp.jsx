// src/pages/Signup.js
import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Proceed with API call or form submission
  console.log("Form submitted:", formData);
};


  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        <p className="login-link">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
