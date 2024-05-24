import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormComponent.css';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    countryCode: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.phoneNo) newErrors.phoneNo = 'Phone No. is required';
    if (!formData.countryCode) newErrors.countryCode = 'Country Code is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.panNo) newErrors.panNo = 'Pan No. is required';
    if (!formData.aadharNo) newErrors.aadharNo = 'Aadhar No. is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      navigate('/success', { state: { ...formData } });
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            {errors.firstName && <span>{errors.firstName}</span>}
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            {errors.lastName && <span>{errors.lastName}</span>}
          </div>
          <div className="form-group">
            <label>Username</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
            {errors.username && <span>{errors.username}</span>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} />
            <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? 'Hide' : 'Show'}
            </button>
            {errors.password && <span>{errors.password}</span>}
          </div>
          <div className="form-group">
            <label>Phone No.</label>
            <div className="phone-group">
              <select name="countryCode" value={formData.countryCode} onChange={handleChange}>
                <option value="">Country Code</option>
                <option value="+1">+1 (USA)</option>
                <option value="+91">+91 (India)</option>
              </select>
              <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} />
            </div>
            {errors.countryCode && <span>{errors.countryCode}</span>}
            {errors.phoneNo && <span>{errors.phoneNo}</span>}
          </div>
          <div className="form-group">
            <label>Country</label>
            <select name="country" value={formData.country} onChange={handleChange}>
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
            </select>
            {errors.country && <span>{errors.country}</span>}
          </div>
          <div className="form-group">
            <label>City</label>
            <select name="city" value={formData.city} onChange={handleChange}>
              <option value="">Select City</option>
              {formData.country === 'India' && (
                <>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi</option>
                </>
              )}
              {formData.country === 'USA' && (
                <>
                  <option value="New York">New York</option>
                  <option value="Los Angeles">Los Angeles</option>
                </>
              )}
            </select>
            {errors.city && <span>{errors.city}</span>}
          </div>
          <div className="form-group">
            <label>Pan No.</label>
            <input type="text" name="panNo" value={formData.panNo} onChange={handleChange} />
            {errors.panNo && <span>{errors.panNo}</span>}
          </div>
          <div className="form-group">
            <label>Aadhar No.</label>
            <input type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} />
            {errors.aadharNo && <span>{errors.aadharNo}</span>}
          </div>
          <button type="submit" disabled={Object.keys(errors).length > 0}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;