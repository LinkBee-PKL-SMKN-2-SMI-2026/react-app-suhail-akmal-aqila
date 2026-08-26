import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import VehicleList from "./pages/VehicleList";
import VehicleAdd from "./pages/VehicleAdd";
import Login from "./pages/Login";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Navigate to="/vehicles" replace />} />
        <Route element={<MainLayout />}>
          <Route path="/vehicles" element={<VehicleList />} />
          <Route path="/vehicles/new" element={<VehicleAdd />} />
        </Route>
      </Route>
    </Routes>
  );
}