
import { NavLink, useNavigate } from "react-router-dom";
import "./AdminSidebas.css";

function AdminSidebar() {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: "▦" },
    { name: "Doctor Management", path: "/admin/doctors", icon: "⚕" },
    { name: "Patient Management", path: "/admin/patients", icon: "♙" },
    { name: "Receptionist Management", path: "/admin/receptionists", icon: "♧" },
    { name: "Department Management", path: "/admin/departments", icon: "▤" },
    
  ];

  return (
    <aside className="admin-sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-logo">✚</div>

        <div>
          <h2>HMS Admin</h2>
          <p>Hospital Management</p>
        </div>
      </div>

      <div className="sidebar-heading">MAIN MENU</div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="admin-profile">
          <div className="admin-avatar">A</div>

          <div>
            <h4>Administrator</h4>
            <p>System Admin</p>
          </div>
        </div>

        <button
          className="sidebar-logout"
          onClick={() => navigate("/login")}
        >
          ↪ Logout
        </button>
      </div>
    </aside>
  );
}

export default AdminSidebar;