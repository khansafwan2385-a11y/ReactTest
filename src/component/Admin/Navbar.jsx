 import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="navbar-logo">✚</div>

        <div className="navbar-title">
          <h2>HMS</h2>
          <p>Hospital Management System</p>
        </div>
      </div>

      <div className="navbar-right">
        <div className="navbar-status"></div>
        <span>Welcome, Admin</span>
      </div>
    </nav>
  );
}

export default Navbar;