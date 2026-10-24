
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="hc-navbar">
      <div className="hc-brand">
        <span className="hc-logo">✚</span>

        <div className="hc-brand-text">
          <strong>Health Care</strong>
          <small>HOSPITAL &amp; RESEARCH CENTER</small>
        </div>
      </div>

      <button
        className="hc-menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div className={`hc-menu ${menuOpen ? "hc-menu-open" : ""}`}>
        <div className="hc-nav-links">
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </div>

        <div className="hc-nav-actions">
          <NavLink
            to="/login"
            className="hc-login-link"
            onClick={closeMenu}
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="hc-register-link"
            onClick={closeMenu}
          >
            Register ↗
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;