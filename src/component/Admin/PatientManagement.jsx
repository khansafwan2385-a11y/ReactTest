import React from "react";
import "./PatientsManagement.css";

function PatientManagement() {
  return (
    <div className="patient-page">

      <div className="patient-header">
        <div>
          <h1>Patient Management</h1>
          <p>Manage patient appointments and confirmations</p>
        </div>

        <div className="hospital-badge">
          <span>✚</span> HMS Admin
        </div>
      </div>

      <div className="mail-card">
        <div className="mail-info">
          <div className="mail-icon">✉</div>

          <div>
            <h3>Send Appointment Confirmation</h3>
            <p>
              Enter Patient ID to send appointment details
              to the patient's registered email address.
            </p>
          </div>
        </div>

        <div className="mail-form">
          <input
            type="number"
            placeholder="Enter Patient ID"
          />

          <button type="button">
            Send Mail
          </button>
        </div>
      </div>

      <div className="appointment-card">

        <div className="table-header">
          <div>
            <h2>Appointment Records</h2>
            <p>View all patient appointments</p>
          </div>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Patient Name</th>
                <th>Doctor</th>
                <th>Department</th>
                <th>Appointment Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {/* Backend se data aane ke baad yahan rows render hongi */}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}

export default PatientManagement;