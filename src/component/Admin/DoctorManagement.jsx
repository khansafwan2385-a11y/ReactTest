import "./DoctorManagement.css";

function DoctorManagement() {
  return (
    <div className="doctor-page">

      <div className="doctor-heading">
        <div>
          <h2>Doctor Management</h2>
          <p>Manage hospital doctors and their details</p>
        </div>
      </div>

      <div className="doctor-card">
        <h3>Doctor Form</h3>

        <form>
          <div className="doctor-form-grid">

            <div className="doctor-field">
              <label>Doctor ID</label>
              <input type="text" placeholder="Enter doctor ID" />
            </div>

            <div className="doctor-field">
              <label>Doctor Name</label>
              <input type="text" placeholder="Enter doctor name" />
            </div>

            <div className="doctor-field">
              <label>Specialization</label>
              <input type="text" placeholder="Enter specialization" />
            </div>

            <div className="doctor-field">
              <label>Phone Number</label>
              <input type="tel" placeholder="Enter phone number" />
            </div>

            <div className="doctor-field">
              <label>Email</label>
              <input type="email" placeholder="Enter email" />
            </div>

            <div className="doctor-field">
              <label>Department</label>
              <select defaultValue="">
                <option value="" disabled>Select Department</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="Dental">Dental</option>
                <option value="General Medicine">General Medicine</option>
              </select>
            </div>

          </div>

          <div className="doctor-actions">
            <button type="button" className="btn-add">
              Add Doctor
            </button>

            <button type="button" className="btn-update">
              Update Doctor
            </button>

            <button type="button" className="btn-delete">
              Delete Doctor
            </button>
          </div>
        </form>
      </div>

      <div className="doctor-card doctor-table-card">
        <h3>Show All Doctors</h3>

        <div className="doctor-table-wrapper">
          <table className="doctor-table">
            <thead>
              <tr>
                <th>Doctor ID</th>
                <th>Name</th>
                <th>Specialization</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Department</th>
              </tr>
            </thead>

            <tbody>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default DoctorManagement;