import React from "react";
import "./ReceptionistManagement.css";

function ReceptionistManagement() {
  return (
    <div className="reception-page">

      {/* Page Header */}
      <div className="reception-header">
        <h2>Receptionist Management</h2>
        <p>Manage hospital receptionists</p>
      </div>

      {/* Form and Statistics */}
      <div className="reception-top-layout">

        {/* Receptionist Form */}
        <div className="reception-form-card">

          <div className="reception-card-header">
            <h3>Receptionist Details</h3>
            <p>Add or manage receptionist information</p>
          </div>

          <form className="reception-form">

            <div className="reception-field">
              <label htmlFor="receptionName">Full Name</label>
              <input
                type="text"
                id="receptionName"
                name="name"
                placeholder="Enter full name"
              />
            </div>

            <div className="reception-field">
              <label htmlFor="receptionEmail">Email Address</label>
              <input
                type="email"
                id="receptionEmail"
                name="email"
                placeholder="Enter email address"
              />
            </div>

            <div className="reception-field">
              <label htmlFor="receptionPhone">Phone Number</label>
              <input
                type="tel"
                id="receptionPhone"
                name="phone"
                placeholder="Enter phone number"
              />
            </div>
             <div className="reception-field">
              <label htmlFor="receptionPhone">Password</label>
              <input
                type="password"
                id="receptionPhone"
                name="phone"
                placeholder="Enter password"
              />
            </div>

            <div className="reception-field">
              <label htmlFor="receptionAddress">Address</label>
              <textarea
                id="receptionAddress"
                name="address"
                rows="3"
                placeholder="Enter address"
              />
            </div>

            <div className="reception-buttons">
              <button
                type="button"
                className="reception-btn reception-add-btn"
              >
                Add
              </button>

              <button
                type="button"
                className="reception-btn reception-update-btn"
              >
                Update
              </button>

              <button
                type="button"
                className="reception-btn reception-delete-btn"
              >
                Delete
              </button>
            </div>

          </form>
        </div>

        {/* Total Receptionists Card */}
        <div className="reception-stats-card">

          <div className="reception-stats-top">
            <div className="reception-stats-icon">
              👥
            </div>

            <span className="reception-stats-badge">
              Overview
            </span>
          </div>

          <div className="reception-stats-info">
            <p>Total Receptionists</p>
            <h2>—</h2>
            <span>
              Receptionists registered in the hospital
            </span>
          </div>

        </div>

      </div>

      {/* All Receptionists Table */}
      <div className="reception-table-card">

        <div className="reception-table-header">
          <div>
            <h3>All Receptionists</h3>
            <p>View all registered receptionists</p>
          </div>
        </div>

        <div className="reception-table-wrapper">
          <table className="reception-table">

            <thead>
              <tr>
                <th>Receptionist ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
              </tr>
            </thead>

            <tbody>
              {/* Backend data will be displayed here */}
            </tbody>

          </table>
        </div>

      </div>

    </div>
  );
}

export default ReceptionistManagement;