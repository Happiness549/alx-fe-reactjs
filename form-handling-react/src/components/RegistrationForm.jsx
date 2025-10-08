// src/components/RegistrationForm.jsx
import React, { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

    const validate = () => {
    const newErrors = {};
    if (!formData.userName.trim()) newErrors.userName = 'Username is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!validate()) return;
     console.log('Submitting', formData);

     setFormData({userName: '', email: '', password: ''});
     setErrors({});
  };

    return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          value={formData.userName}
          onChange={handleChange}
          aria-describedby="username-error"
        />
        {errors.userName && <div id="username-error" role="alert">{errors.userName}</div>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          aria-describedby="email-error"
        />
        {errors.email && <div id="email-error" role="alert">{errors.email}</div>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          aria-describedby="password-error"
        />
        {errors.password && <div id="password-error" role="alert">{errors.password}</div>}
      </div>

      <button type="submit">Register</button>
    </form>
  );


}

export default RegistrationForm;