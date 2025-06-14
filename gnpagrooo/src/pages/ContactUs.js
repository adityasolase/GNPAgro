import React, { useState } from 'react';
import axios from 'axios';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    category: 'insecticides',
    message: '',
    recaptcha: false,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.recaptcha) {
      alert('Please confirm that you are not a robot.');
      return;
    }

    setLoading(true);
    try {
      // Ensure the URL is valid and active
      const response = await axios.post('https://67345e4ca042ab85d119dfad.mockapi.io/queries', formData);
      console.log('Form submitted successfully:', response.data);
      alert('Your query has been submitted successfully!');
      
      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        category: 'insecticides',
        message: '',
        recaptcha: false,
      });
    } catch (error) {
      console.error('Error submitting form:', error);

      // Capture specific error messages
      if (error.response) {
        // Server responded with a status code out of the 2xx range
        console.error('Error response:', error.response);
        alert(`Error: ${error.response.status} - ${error.response.data.message || 'Submission failed'}`);
      } else if (error.request) {
        // Request was made but no response received
        console.error('Error request:', error.request);
        alert('No response received from the server.');
      } else {
        // Something else went wrong
        console.error('Error message:', error.message);
        alert('There was an error submitting your query. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>

      <div className="factory-section">
        <h2>Factories</h2>
        <p>ADDRESS<br />
          Gate No. 39/2, Airport Road, Jaulke – Dindori,<br />
          Nashik, Maharashtra, India, 422206<br />
          CORPORATE:<br />
          +917030320577 / +919226024217,<br />
          OFFICE:<br />
          +919860091754<br />
          EMAIL:<br />
          info@gnpagro.com</p>

        <iframe 
          title="GNP Agro Factory Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126999.58037042068!2d73.73279983319924!3d20.044032720552796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddc3b57fb62f07%3A0xa9229f95e288f1ca!2sGNP%20Agrosciences%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1730812177974!5m2!1sen!2sin"
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="query-section">
        <div className="query-header">
          <h2>Ask Query</h2>
        </div>
        
        <form className="query-form" onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </label>
          
          <label>
            Phone Number:
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </label>
          
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          
          <label>
            Category:
            <select name="category" value={formData.category} onChange={handleChange}>
              <option value="insecticides">Insecticides</option>
              <option value="herbicides">Herbicides</option>
              <option value="fungicides">Fungicides</option>
              <option value="pgr">PGR</option>
              <option value="micronutrients">Micronutrients</option>
              <option value="organic">Organic</option>
            </select>
          </label>

          <label>
            Message:
            <textarea name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
          </label>

          <div className="recaptcha">
            <input type="checkbox" name="recaptcha" checked={formData.recaptcha} onChange={handleChange} required /> I'm not a robot
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
