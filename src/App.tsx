// src/App.tsx
import { EmployeeCard } from "./components/EmployeeCard";

const employees = [
  { id: 1, name: "Budi Santoso", role: "Frontend Dev", department: "IT", isActive: true },
  { id: 2, name: "Siti Rahma", role: "HR Specialist", department: "HR", isActive: true },
  { id: 3, name: "Andi Wijaya", role: "Accountant", department: "Finance", isActive: false },
  { id: 4, name: "Dewi Lestari", role: "SEO Specialist", department: "Marketing", isActive: true },
  { id: 5, name: "Eko Prasetyo", role: "Logistics Lead", department: "Operations", isActive: true },
  // Opsional: Coba tambahkan 1 karyawan dengan departemen tak dikenal untuk tes fallback
  { id: 6, name: "Rian Hidayat", role: "Intern", department: "General", isActive: true },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Daftar Karyawan</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            name={employee.name}
            role={employee.role}
            department={employee.department}
            isActive={employee.isActive}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

