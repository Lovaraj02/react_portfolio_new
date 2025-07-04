
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect!</h3>
            <p>I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.</p>
            
            <div className="contact-links">
              <a href="mailto:rajubandaru2255@gmail.com" className="contact-link">
                rajubandaru2255@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/lovaraj02/" target="_blank" rel="noopener noreferrer" className="contact-link">
                LinkedIn Profile
              </a>
              <a href="https://github.com/Lovaraj02" target="_blank" rel="noopener noreferrer" className="contact-link">
                GitHub Profile
              </a>
              <a href="https://lovaraj02.github.io" target="_blank" rel="noopener noreferrer" className="contact-link">
                Portfolio Website
              </a>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
