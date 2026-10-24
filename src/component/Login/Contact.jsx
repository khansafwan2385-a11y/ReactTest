
import React from "react";
import { Link } from "react-router-dom";
import "./Conatct.css";

function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <span className="contact-tag">HEALTH CARE HOSPITAL</span>
        <h1>Contact <span>Us</span></h1>
        <p>
          We are here to provide quality healthcare with compassion,
          trust, and care.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-info-heading">
          <h2>Get in Touch</h2>
          <p>Hospital information and contact details</p>
        </div>

        <div className="contact-info-grid">
          <div className="contact-info-card">
            <div className="contact-icon">📍</div>
            <h3>Our Location</h3>
            <p>Health Care Hospital</p>
            <p>Lucknow, Uttar Pradesh, India</p>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">📞</div>
            <h3>Phone Number</h3>
            <p>+91 98765 43210</p>
            <p>For general enquiries</p>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">✉️</div>
            <h3>Email Address</h3>
            <p>info@healthcarehospital.com</p>
            <p>For information and support</p>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">🕒</div>
            <h3>Working Hours</h3>
            <p>Emergency Services: 24/7</p>
            <p>OPD: Monday – Saturday</p>
          </div>
        </div>

        <div className="contact-about">
          <div className="contact-about-icon">✚</div>
          <div>
            <h2>About Our Hospital</h2>
            <p>
              Health Care Hospital is dedicated to providing reliable
              medical services and patient-focused care. Our goal is to
              support patients with professional healthcare services in
              a safe and comfortable environment.
            </p>
          </div>
        </div>

        <div className="contact-back">
          <Link to="/">← Back to Home</Link>
        </div>
      </section>
    </div>
  );
}

export default Contact;