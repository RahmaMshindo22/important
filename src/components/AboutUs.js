import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <header>
        <h1>About Us</h1>
        <p>We are passionate about seafood and strive to provide the freshest and most delicious seafood products to our customers.</p>
      </header>
      <section className="about-section" id="services">
        <h2>Our Services</h2>
        <p>We offer a wide range of services to meet your needs, including:</p>
        <ul>
          <li>Delivery of seafood</li>
          <li>Open 24/7 for orders</li>
          <li>Customer feedback and support</li>
        </ul>
      </section>
      <section className="about-section" id="work-process">
        <h2>How We Work</h2>
        <p>Our process ensures efficiency and quality:</p>
        <ol>
          <li>Consultation</li>
          <li>Planning and strategy</li>
          <li>Implementation</li>
          <li>Review and feedback</li>
          <li>Delivery</li>
        </ol>
      </section>
      <section className="about-section" id="contact">
        <h2>Contact Us</h2>
        <p>Connect with us through our social media channels:</p>
        <ul className="social-media">
          <li><a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.twitter.com/yourpage" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.linkedin.com/yourpage" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </section>
      <section className="about-section">
        <p>For inquiries or orders, please fill out the form below:</p>
      </section>
      <div className="contact-form">
        <h2>Contact Form</h2>
        <form id="contactForm">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Format: +255-778-285-265" required />
            <small>Format: +255-778-285-265</small>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
        <div id="response"></div>
      </div>
    </div>
  );
};

export default AboutUs;
