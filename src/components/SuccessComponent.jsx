import React from 'react';
import { useLocation } from 'react-router-dom';
import './SuccessComponent.css';

const SuccessComponent = () => {
  const location = useLocation();
  const formData = location.state;

  return (
    <div className="success-wrapper">
      <div className="success-container">
        <h1>User Registered!</h1>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Username: {formData.username}</p>
        <p>Email: {formData.email}</p>
        <p>Phone No: {formData.countryCode} {formData.phoneNo}</p>
        <p>Country: {formData.country}</p>
        <p>City: {formData.city}</p>
        <p>Pan No: {formData.panNo}</p>
        <p>Aadhar No: {formData.aadharNo}</p>
      </div>
    </div>
  );
};

export default SuccessComponent;