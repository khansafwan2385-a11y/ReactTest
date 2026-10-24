

import { Routes, Route, Navigate } from "react-router-dom";
import DoctorLayout from "./DoctorLayout";
import Dashbord from "./Dashbord";
import AppointmentManagement from "./AppointmentManagement";
import PatientRecord from "./PatientRecord";

function DoctorRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DoctorLayout />}>
        <Route
          index
          element={<Navigate to="dashbord" replace />}
        />
        <Route path="dashbord" element={<Dashbord />} />
        <Route path="appointments" element={<AppointmentManagement />} />
        <Route path="patients" element={<PatientRecord />} />
      </Route>
    </Routes>
  );
}

export default DoctorRoutes;
