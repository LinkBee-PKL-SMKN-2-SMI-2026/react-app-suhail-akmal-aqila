// 1. Definisikan interface props
interface EmployeeProps {
  name: string;
  role: string;
  department: string;
  isActive: boolean;
}

// 2. Object mapping warna departemen dengan class Tailwind 
const departmentColors: Record<string, string> = {
  IT: "border-blue-500 text-blue-500",
  HR: "border-pink-500 text-pink-500",
  Finance: "border-emerald-500 text-emerald-500",
  Marketing: "border-purple-500 text-purple-500",
  Operations: "border-amber-500 text-amber-500",
};

export const EmployeeCard = ({ name, role, department, isActive }: EmployeeProps) => {
  // 3. Ambil class warna berdasarkan departemen, gunakan fallback jika tidak ditemukan
  const colorClass = departmentColors[department] || "border-gray-300 text-gray-500";

  return (
    <div className={`p-4 rounded-xl border-2 shadow-sm bg-white ${colorClass}`}>
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-lg text-gray-800">{name}</h3>
        <span
          className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
            isActive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {isActive ? "Active" : "Inactive"}
        </span>
      </div>
      <p className="text-sm text-gray-600">{role}</p>
      
      {/* Menampilkan nama departemen */}
      <span className="inline-block mt-3 text-xs font-medium uppercase tracking-wider">
        {department}
      </span>
    </div>
  );
};
