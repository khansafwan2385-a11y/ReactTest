
import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="doctor-navbar">
      <div className="doctor-hospital-name">
        <span className="doctor-logo">✚</span>
        <span>City Care Hospital</span>
      </div>

      <div className="doctor-panel-title">
        Doctor Panel
      </div>
    </nav>
  );
}

export default Navbar;