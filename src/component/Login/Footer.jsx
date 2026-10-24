import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="hospital-footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>Health Care Hospital</h2>
          <p>
            Your Health, Our Priority. We provide quality
            healthcare with compassion and care.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="#services">Our Services</a>
          <a href="#about">About Us</a>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Phone: +91 98765 43210</p>
          <p>Email: info@healthcarehospital.com</p>
          <p>Address: Your City, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Health Care Hospital. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;