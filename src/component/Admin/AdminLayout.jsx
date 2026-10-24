
import Navbar from "./Navbar";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";
import "./AdminLayout.css";

function AdminLayout() {
  return (
    <>
      <Navbar />

      <div className="admin-layout">
        <AdminSidebar />

        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default AdminLayout;