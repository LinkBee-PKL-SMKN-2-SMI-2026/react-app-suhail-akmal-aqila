import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import VehicleList from "./pages/VehicleList";
import VehicleAdd from "./pages/VehicleAdd";

export const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5ODc0NmQyMC1lZTZjLTQzMjUtYWEwOC1lYzg2N2IxODM0ZmUiLCJlbWFpbCI6ImFkbWluQHJlbnRjYXIuY29tIiwiaWF0IjoxNzg3NDE5MTc4LCJleHAiOjE3ODc0MjAwNzh9.x6fNUFx41LeDMLszKZcDarry1lfl5szO4DyQkL0Adkc";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/vehicles" replace />} />
      <Route element={<MainLayout />}>
        <Route path="/vehicles" element={<VehicleList />} />
        <Route path="/vehicles/new" element={<VehicleAdd />} />
      </Route>
    </Routes>
  );
}