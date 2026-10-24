 import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <p>Welcome to Hospital Management System</p>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Total Doctors</h3>
          <h2>12</h2>
        </div>

        <div className="dashboard-card">
          <h3>Total Patients</h3>
          <h2>156</h2>
        </div>

        <div className="dashboard-card">
          <h3>Total Appointments</h3>
          <h2>28</h2>
        </div>

        <div className="dashboard-card">
          <h3>Total Departments</h3>
          <h2>6</h2>
        </div>
      </div>

      <div className="dashboard-info">
        <h2>Hospital Overview</h2>
        <p>Manage doctors, patients, departments and appointments from the sidebar.</p>
      </div>
    </div>
  );
}

export default Dashboard;