
import React from "react";
import "./DepartmentManagement.css";

function DepartmentManagement() {
  return (
    <div className="department-page">

      {/* Page Header */}
      <div className="department-header">
        <div>
          <h2>Department Management</h2>
          <p>Manage hospital departments</p>
        </div>
      </div>

      {/* Top Section */}
      <div className="department-top-layout">

        {/* Department Form */}
        <div className="department-form-card">
          <div className="department-card-header">
            <h3>Department Details</h3>
            <p>Add or manage department information</p>
          </div>

          <form className="department-form">

            <div className="department-field">
              <label htmlFor="departmentName">
                Department Name
              </label>

              <input
                type="text"
                id="departmentName"
                name="name"
                placeholder="Enter department name"
              />
            </div>

            <div className="department-field">
              <label htmlFor="departmentDescription">
                Description
              </label>

              <textarea
                id="departmentDescription"
                name="description"
                rows="4"
                placeholder="Enter department description"
              />
            </div>

            <div className="department-buttons">
              <button
                type="button"
                className="department-btn add-btn"
              >
                Add
              </button>

              <button
                type="button"
                className="department-btn update-btn"
              >
                Update
              </button>

              <button
                type="button"
                className="department-btn delete-btn"
              >
                Delete
              </button>
            </div>

          </form>
        </div>

        {/* Total Departments Card */}
        <div className="department-stats-card">

          <div className="department-stats-top">
            <div className="department-stats-icon">
              🏥
            </div>

            <span className="department-stats-badge">
              Overview
            </span>
          </div>

          <div className="department-stats-info">
            <p>Total Departments</p>

            <h2>8</h2>

            <span>
              Departments registered in the hospital
            </span>
          </div>

        </div>

      </div>

      {/* All Departments Table */}
      <div className="department-table-card">

        <div className="department-table-header">
          <div>
            <h3>All Departments</h3>
            <p>View all hospital departments</p>
          </div>
        </div>

        <div className="department-table-wrapper">
          <table className="department-table">

            <thead>
              <tr>
                <th>Department ID</th>
                <th>Department Name</th>
                <th>Description</th>
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

export default DepartmentManagement;