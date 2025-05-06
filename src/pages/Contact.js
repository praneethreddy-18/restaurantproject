import React from "react";
import Layout from "./../components/Layout/Layout";
import { FaEnvelope, FaPhone, FaInstagram } from 'react-icons/fa';

const Contact = () => {

  return (
    <Layout>
      <div className="Adds">
        <div className="form-header">
          <h2>Contact Us</h2>
          <p>We love hearing from our clients and we esteem your input. Send us your inquiries, remarks or input so we can serve you better.</p>
          <br />
        </div>
        <div className="cards-container">
          <div className="card">
            <FaEnvelope className="card-icon" />
            <div className="card-content">
              <h3>Email</h3>
              <p>mythrisusa@gmail.com</p>
            </div>
          </div>
          <div className="card">
            <FaPhone className="card-icon" />
            <div className="card-content">
              <h3>Phone</h3>
              <p>(469) 885-7999</p>
            </div>
          </div>
          <div className="card">
            <FaInstagram className="card-icon" />
            <div className="card-content">
              <h3>Instagram</h3>
              <p>
              <span><a href="https://www.instagram.com/mythrisindiancuisine?igsh=ZTJ6dDBqeHhvbGVz" className="social-icon-footer">mythrisindiancuisine</a></span>
              </p>
            </div>
          </div>
        </div>

        <div className="form-container">
          <form className="contact-form" >

            <div className="form-group">
              <div className="input-container">
                <input type="text" required />
                <label>Full Name</label>
              </div>
              <div className="input-container">
                <input type="email" required />
                <label>Email</label>
              </div>
            </div>

            <div className="form-group">
              <div className="input-container">
                <input type="tel" required />
                <label>Phone</label>
              </div>
              <div className="input-container">
                <input type="text" required />
                <label>Subject</label>
              </div>
            </div>

            <div className="form-group full-width">
              <div className="input-container">
                <textarea required />
                <label>Message</label>
              </div>
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
        
      </div>
      <br />
    </Layout>
  );
};

export default Contact;
