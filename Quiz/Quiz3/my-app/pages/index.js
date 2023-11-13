import React, { useState } from 'react';
import styles from '@/styles/Form.module.css';

export default function FormComponent() {
  const [formData, setFormData] = useState({
    company: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) {
      errors.firstName = 'First Name is required';
    }
    if (!formData.lastName) {
      errors.lastName = 'Last Name is required';
    }
    if (!formData.address) {
      errors.address = 'Address is required';
    }
    if (!formData.city) {
      errors.city = 'City is required';
    }
    if (!formData.state) {
      errors.state = 'State is required';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // You can submit the form data or perform any desired action here
      console.log('Form Data:', formData);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Registrant Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className={styles.option} htmlFor="company">
            Company:
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className={styles.option} htmlFor="firstName">
            First Name:*
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          {errors.firstName && (
            <p className={styles.error}>{errors.firstName}</p>
          )}
        </div>
        <div>
          <label className={styles.option} htmlFor="lastName">
            Last Name:*
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          {errors.lastName && <p className={styles.error}>{errors.lastName}</p>}
        </div>
        <div>
          <label className={styles.option} htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className={styles.option} htmlFor="phone">
            Phone:
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className={styles.option} htmlFor="address">
            Address:*
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
          {errors.address && <p className={styles.error}>{errors.address}</p>}
        </div>
        <div>
          <label className={styles.option} htmlFor="city">
            City:*
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
          {errors.city && <p className={styles.error}>{errors.city}</p>}
        </div>
        <div>
          <label className={styles.option} htmlFor="state">
            State:*
          </label>
          <select
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          >
            <option value="">Select a state</option>
            <option value="New York">New York</option>
            <option value="California">California</option>
            {/* Add more state options here */}
          </select>
          {errors.state && <p className={styles.error}>{errors.state}</p>}
        </div>
        <button type="submit" className={styles.button}>
          Submit My Registration
        </button>
      </form>
    </div>
  );
}
