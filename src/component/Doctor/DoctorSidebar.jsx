

import { Link, useNavigate } from "react-router-dom";
import "./DoctorSidebar.css";

function DoctorSidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <aside className="doctor-sidebar">
      <h2>Doctor Panel</h2>

      <ul>
        <li>
          <Link to="/dashbord">Dashboard</Link>
        </li>

        <li>
          <Link to="/appointments">Appointments</Link>
        </li>

        <li>
          <Link to="/patients">Patient Records</Link>
        </li>

        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </aside>
  );
}

export default DoctorSidebar;
