import React from "react";
import "./Dashbord.css";

function Dashbord() {
  return (
    <div className="doctor-dashboard">

      {/* Page Header */}
      <div className="dashboard-header">
        <div>
          <h1>Doctor Dashboard</h1>
          <p>Welcome back! Here is your hospital overview.</p>
        </div>

        <div className="doctor-status">
          <span className="status-dot"></span>
          Doctor Panel
        </div>
      </div>

      {/* Welcome Section */}
      <div className="doctor-welcome">
        <div className="welcome-content">
          <span className="welcome-tag">
            HEALTHCARE MANAGEMENT
          </span>

          <h2>Welcome to Your Dashboard!</h2>

          <p>
            Manage your appointments, view patient information,
            and stay connected with your hospital activities
            from one place.
          </p>
        </div>

        <div className="welcome-icon">
          🩺
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="doctor-stats-grid">

        {/* Total Patients */}
        <div className="doctor-stat-card">
          <div className="stat-icon blue">👥</div>

          <div className="stat-info">
            <p>Total Patients</p>
            <h2>568</h2>
            <span>Registered patients</span>
          </div>
        </div>

        {/* Total Doctors */}
        <div className="doctor-stat-card">
          <div className="stat-icon green">🩺</div>

          <div className="stat-info">
            <p>Total Doctors</p>
            <h2>35</h2>
            <span>Available doctors</span>
          </div>
        </div>

        {/* Total Departments */}
        <div className="doctor-stat-card">
          <div className="stat-icon orange">🏥</div>

          <div className="stat-info">
            <p>Total Departments</p>
            <h2>12</h2>
            <span>Hospital departments</span>
          </div>
        </div>

        {/* Total Appointments */}
        <div className="doctor-stat-card">
          <div className="stat-icon purple">📅</div>

          <div className="stat-info">
            <p>Total Appointments</p>
            <h2>50</h2>
            <span>Booked appointments</span>
          </div>
        </div>

      </div>

      {/* Information Cards */}
      <div className="doctor-info-grid">

        <div className="doctor-info-card">
          <div className="info-card-icon">📋</div>

          <h3>Appointment Management</h3>

          <p>
            Keep track of patient appointments and manage
            appointment status efficiently.
          </p>

          <span className="info-label">
            Stay Organized
          </span>
        </div>

        <div className="doctor-info-card">
          <div className="info-card-icon">🩻</div>

          <h3>Patient Care</h3>

          <p>
            Access authorized patient information and review
            medical history when needed.
          </p>

          <span className="info-label">
            Better Patient Care
          </span>
        </div>

        <div className="doctor-info-card">
          <div className="info-card-icon">💙</div>

          <h3>Your Healthcare Mission</h3>

          <p>
            Every patient deserves attention, care, and
            professional guidance. Make every visit count.
          </p>

          <span className="info-label">
            Care With Compassion
          </span>
        </div>

      </div>

      {/* Bottom Message */}
      <div className="doctor-dashboard-footer">
        <div className="footer-heart">💙</div>

        <div>
          <h3>Healing Begins With Care</h3>

          <p>
            Thank you for being an important part of our
            healthcare team. Your dedication makes a difference.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Dashbord;