// // import { useForm, type SubmitHandler } from "react-hook-form";
// // import type { Employee } from "../types/employee";


// // interface EmployeeFormInputs {
// //   name: string;
// //   role: string;
// //   department: string;
// // }


// // interface EmployeeFormProps {
// //   onAddEmployee: (newEmployee: Employee) => void;
// // }

// // export default function EmployeeForm({ onAddEmployee }: EmployeeFormProps) {
// //   const {
// //     register,
// //     handleSubmit,
// //     reset,
// //     formState: { errors },
// //   } = useForm<EmployeeFormInputs>();

// //   const onSubmit: SubmitHandler<EmployeeFormInputs> = (data) => {

// //     const newEmployee: Employee = {
// //       id: Date.now().toString(),
// //       name: data.name,
// //       role: data.role,
// //       department: data.department,
// //       isActive: true, 
// //     };


// //     onAddEmployee(newEmployee);


// //     reset();
// //   };

// //   return (
// //     <form
// //       onSubmit={handleSubmit(onSubmit)}
// //       className="p-6 border border-gray-200 rounded-2xl shadow-sm bg-white w-full"
// //     >
// //       <h2 className="text-xl font-bold mb-4 text-gray-800">Tambah Pegawai Baru</h2>

// //       {}
// //       <div className="mb-4">
// //         <label className="block text-sm font-medium text-gray-700 mb-1">
// //           Nama Lengkap
// //         </label>
// //         <input
// //           {...register("name", { required: "Nama tidak boleh kosong!" })}
// //           className={`w-full border p-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 ${
// //             errors.name
// //               ? "border-red-500 focus:ring-red-200"
// //               : "border-gray-300 focus:ring-blue-200"
// //           }`}
// //           placeholder="Misalnya: Sheva IYYUP"
// //         />
// //         {errors.name && (
// //           <p className="text-red-500 text-xs mt-1 font-medium">
// //             {errors.name.message}
// //           </p>
// //         )}
// //       </div>

// //       {}
// //       <div className="mb-4">
// //         <label className="block text-sm font-medium text-gray-700 mb-1">
// //           Role (Jabatan)
// //         </label>
// //         <input
// //           {...register("role", { required: "Role wajib diisi!" })}
// //           className={`w-full border p-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 ${
// //             errors.role
// //               ? "border-red-500 focus:ring-red-200"
// //               : "border-gray-300 focus:ring-blue-200"
// //           }`}
// //           placeholder="Misal: Frontend Developer"
// //         />
// //         {errors.role && (
// //           <p className="text-red-500 text-xs mt-1 font-medium">
// //             {errors.role.message}
// //           </p>
// //         )}
// //       </div>

// //       {}
// //       <div className="mb-6">
// //         <label className="block text-sm font-medium text-gray-700 mb-1">
// //           Departemen
// //         </label>
// //         <select
// //           {...register("department", { required: "Pilih departemen!" })}
// //           className="w-full border border-gray-300 p-2.5 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
// //         >
// //           <option value="IT">IT</option>
// //           <option value="HR">HR</option>
// //           <option value="Finance">Finance</option>
// //           <option value="Marketing">Marketing</option>
// //           <option value="Operations">Operations</option>
// //         </select>
// //       </div>

// //       <button
// //         type="submit"
// //         className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm shadow-sm"
// //       >
// //         Simpan Data
// //       </button>
// //     </form>
// //   );
// // }

// //codingan bener yg bawah

// import { useForm } from "react-hook-form";
// import type { Employee } from "../types/employee";

// // Form input hanya butuh name, role, dan department
// type FormInput = Omit<Employee, "id" | "isActive">;

// interface EmployeeFormProps {
//   onAddEmployee: (newEmployee: Employee) => void;
// }

// export const EmployeeForm = ({ onAddEmployee }: EmployeeFormProps) => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<FormInput>();

//   const onSubmit = (data: FormInput) => {
//     // Buat object Employee lengkap
//     const newEmployee: Employee = {
//       id: Number(new Date()), // ID unik dari timestamp
//       name: data.name,
//       role: data.role,
//       department: data.department,
//       isActive: true, // Default status aktif
//     };

//     // Panggil fungsi callback dari parent (App.tsx)
//     onAddEmployee(newEmployee);

//     // Reset form setelah submit
//     reset();
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-xl shadow-md border space-y-4">
//       <h2 className="text-xl font-bold text-gray-800 mb-2">Tambah Karyawan Baru</h2>

//       {/* Input Nama */}
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Nama</label>
//         <input
//           {...register("name", { required: "Nama wajib diisi!" })}
//           className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:outline-none"
//           placeholder="Contoh: Budi Santoso"
//         />
//         {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
//       </div>

//       {/* Input Role */}
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Jabatan / Role</label>
//         <input
//           {...register("role", { required: "Role wajib diisi!" })}
//           className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:outline-none"
//           placeholder="Contoh: Frontend Developer"
//         />
//         {errors.role && <p className="mt-1 text-xs text-red-500">{errors.role.message}</p>}
//       </div>

//       {/* Input Departemen */}
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Departemen</label>
//         <select
//           {...register("department", { required: "Pilih departemen!" })}
//           className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:outline-none bg-white"
//         >
//           <option value="">-- Pilih Departemen --</option>
//           <option value="IT">IT</option>
//           <option value="HR">HR</option>
//           <option value="Finance">Finance</option>
//           <option value="Marketing">Marketing</option>
//           <option value="Operations">Operations</option>
//         </select>
//         {errors.department && <p className="mt-1 text-xs text-red-500">{errors.department.message}</p>}
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 font-semibold">

//         Simpan Data

//       </button>
//     </form>
//   );
// };

