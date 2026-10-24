
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "./AdminLayout";
import Dashboard from "./Dashboard";
import DoctorManagement from "./DoctorManagement";
import PatientManagement from "./PatientManagement";
import DepartmentManagement from "./DepartmentManagement";
import ReceptionistManagement from "./ReceptionistManagement";


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route
            index
            element={<Navigate to="dashboard" replace />}
          />

          <Route path="dashboard" element={<Dashboard />} />

          <Route
            path="doctors"
            element={<DoctorManagement />}
          />

          <Route
            path="patients"
            element={<PatientManagement />}
          />

          <Route
            path="departments"
            element={<DepartmentManagement />}
          />
          <Route
            path="receptionists"
            element={<ReceptionistManagement />}
          />

          
        </Route>

        <Route
          path="*"
          element={<Navigate to="/admin/dashboard" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;