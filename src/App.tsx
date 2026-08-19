// react 2

// // src/App.tsx
// import { useState } from "react";
// import type { Employee } from "./types/employee";
// import { EmployeeCard } from "./components/EmployeeCard";
// import { EmployeeForm } from "./components/EmployeeForm";

// // Dummy data awal
// const initialEmployees: Employee[] = [
//   { id: 1, name: "Budi Santoso", role: "Frontend Dev", department: "IT", isActive: true },
//   { id: 2, name: "Siti Rahma", role: "HR Specialist", department: "HR", isActive: true },
//   { id: 3, name: "Andi Wijaya", role: "Accountant", department: "Finance", isActive: false },
//   { id: 4, name: "Dewi Lestari", role: "SEO Specialist", department: "Marketing", isActive: true },
//   { id: 5, name: "Eko Prasetyo", role: "Logistics Lead", department: "Operations", isActive: true },
//   { id: 6, name: "Rian Hidayat", role: "Intern", department: "General", isActive: true }
// ];

// function App() {
//   // 1. Simpan data di State
//   const [employees, setEmployees] = useState<Employee[]>(initialEmployees);

//   // 2. Fungsi penambah karyawan baru (Callback function)
//   // ...prevEmployees => [newEmployee, ...prevEmployees] menambahkan karyawan baru di awal array
//   // Tanda ... (Spread Operator) digunakan untuk menyalin semua data karyawan yang lama.

//   const handleAddEmployee = (newEmployee: Employee) => {
//     setEmployees((prevEmployees) => [newEmployee, ...prevEmployees]);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6 md:p-10">
//       <h1 className="text-3xl font-bold mb-8 text-gray-800">Sistem Manajemen Karyawan</h1>

//       {/* Grid Layout: Form di Kiri/Atas, List di Kanan/Bawah */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
//         {/* Kolom Form */}
//         <div className="lg:col-span-1">
//           <EmployeeForm onAddEmployee={handleAddEmployee} />
//         </div>

//         {/* Kolom Daftar Karyawan */}
//         <div className="lg:col-span-2">
//           <h2 className="text-xl font-bold text-gray-800 mb-4">
//             Daftar Karyawan ({employees.length})
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {employees.map((employee) => (
//               <EmployeeCard key={employee.id} {...employee} />
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default App;


// codingan react 3 , yg atas, employee sengaja ga dihapus takut perluuu klo mau dihapus ama suhail/ali ajaa aku takut salahh hehe

import { useState, useEffect } from "react";
import axios from "axios";
import VehicleCard from "./components/VehicleCard";
import VehicleForm from "./components/VehicleForm";

export default function App() {
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetching data kendaraan dari real API saat pertama kali dibuka
  useEffect(() => {
    axios.get("https://rent-car-pkl.linkbee.id/api/vehicles")
      .then((response) => {
        // Sesuaikan dengan struktur data dari endpoint API (biasanya response.data.data atau response.data)
        const result = response.data.data || response.data;
        setVehicles(result);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Gagal memuat data kendaraan dari server.");
        setIsLoading(false);
        console.error(err);
      });
  }, []);

  // Fungsi menambah kendaraan baru ke state lokal
  const handleAddVehicle = (newVehicle: any) => {
    setVehicles((prevVehicles) => [newVehicle, ...prevVehicles]);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-8 text-slate-800">Sistem Katalog Rent Car</h1>

      <div className="flex flex-col lg:flex-row items-start gap-8">
        
        {/* Kolom Form Kiri */}
        <div className="w-full lg:w-1/3">
          <VehicleForm onAddVehicle={handleAddVehicle} />
        </div>

        {/* Kolom Daftar Kendaraan Kanan */}
        <div className="flex-1 w-full">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            Daftar Kendaraan ({vehicles.length})
          </h2>

          {/* Indikator Loading & Error */}
          {isLoading && <p className="text-slate-500">Memuat data dari API...</p>}
          {error && <p className="text-red-500">{error}</p>}

          {/* Grid Katalog Kendaraan */}
          {!isLoading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {vehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id || crypto.randomUUID()} {...vehicle} />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
