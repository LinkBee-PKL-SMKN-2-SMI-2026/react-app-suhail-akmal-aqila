import type { Employee } from "../types/employee";

const departmentColors: Record<string, string> = {
  IT: "border-blue-500 text-blue-500",
  HR: "border-pink-500 text-pink-500",
  Finance: "border-emerald-500 text-emerald-500",
  Marketing: "border-purple-500 text-purple-500",
  Operations: "border-amber-500 text-amber-500",
};

export const EmployeeCard = ({ name, role, department, isActive }: Employee) => {
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
      <span className="inline-block mt-3 text-xs font-medium uppercase tracking-wider">
        {department}
      </span>
    </div>
  );
};


// import type { Employee } from "../types/employee";

// interface EmployeeCardProps {
//   employee: Employee;
// }

// const departmentColors: Record<string, string> = {
//   IT: "border-blue-500",
//   HR: "border-pink-500",
//   Finance: "border-emerald-500",
//   Marketing: "border-amber-500",
//   Operations: "border-purple-500",
// };

// export default function EmployeeCard({ employee }: EmployeeCardProps) {
//   const borderColor = departmentColors[employee.department] || "border-gray-300";

//   return (
//     <div
//       className={`rounded-lg border-2 bg-white p-5 shadow-sm transition-all hover:shadow-md ${borderColor}`}
//     >
//       <div className="flex items-center justify-between mb-3">
//         <h3 className="text-lg font-bold text-gray-900">{employee.name}</h3>
//         <span
//           className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${
//             employee.isActive
//               ? "bg-green-100 text-green-800"
//               : "bg-red-100 text-red-800"
//           }`}
//         >
//           {employee.isActive ? "Aktif" : "Non-Aktif"}
//         </span>
//       </div>

//       <p className="text-sm text-gray-600 mb-1">
//         <span className="font-medium text-gray-800">Role:</span> {employee.role}
//       </p>

//       <p className="text-sm text-gray-600">
//         <span className="font-medium text-gray-800">Departemen:</span>{" "}
//         <span className="font-semibold text-gray-700">{employee.department}</span>
//       </p>
//     </div>
//   );
// }


