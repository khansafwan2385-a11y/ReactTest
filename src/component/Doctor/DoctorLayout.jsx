
import Navbar from "./Navbar";
import DoctorSidebar from "./DoctorSidebar";
import { Outlet } from "react-router-dom";
import "./DoctorLayout.css";

function DoctorLayout() {
  return (
    <div className="doctor-page">
      <Navbar />

      <div className="doctor-layout">
        <DoctorSidebar />

        <main className="doctor-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DoctorLayout;