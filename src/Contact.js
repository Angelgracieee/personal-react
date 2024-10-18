import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact">
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <textarea name="message" placeholder="Message" onChange={handleChange} required />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="success">
          <h2>Thank you, {formData.name}!</h2>
          <p>Your message has been sent.</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
