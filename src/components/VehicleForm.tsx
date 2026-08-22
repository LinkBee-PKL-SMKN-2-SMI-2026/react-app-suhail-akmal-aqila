// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { TOKEN } from "../App";
// import type { VehicleFormData } from "../types/Vehicle";

// interface VehicleFormProps {
//     onRefresh: () => void; 
// }

// export default function VehicleForm({ onRefresh }: VehicleFormProps) {
//     const { register, handleSubmit, reset } = useForm<VehicleFormData>();
//     const [isSubmitting, setIsSubmitting] = useState(false); // State Loading

//     const onSubmit = async (data: VehicleFormData) => {
//         setIsSubmitting(true);
//         try {
//             await axios.post(
//                 "https://rent-car-pkl.linkbee.id/api/vehicles",
//                 data,
//                 {
//                     headers: { Authorization: `Bearer ${TOKEN}` }
//                 }
//             );

//             alert("Kendaraan berhasil ditambahkan!");
//             reset(); 
//             onRefresh(); 
//         } catch (err: unknown) {
           
//             if (axios.isAxiosError(err)) {
//                 const errorMessage = err.response?.data?.message || "Terjadi kesalahan pada server.";
//                 alert(`Gagal: ${errorMessage}`);
//             } else {
//                 alert("Gagal: Terjadi kesalahan yang tidak diketahui.");
//             }
//         } finally {
//             setIsSubmitting(false); 
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit(onSubmit)} className="border-2 border-black p-6 rounded-xl bg-white w-full shadow-sm">
//             <h2 className="text-lg font-bold mb-6 text-slate-800">Tambah Kendaraan Baru</h2>
            
//             <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1 text-slate-700">Nama Kendaraan</label>
//                 <input {...register("name", { required: true })} className="border border-slate-300 p-2.5 rounded-lg w-full text-sm" placeholder="Contoh: Avanza Veloz" />
//             </div>

//             <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1 text-slate-700">Merek</label>
//                 <input {...register("brand", { required: true })} className="border border-slate-300 p-2.5 rounded-lg w-full text-sm" placeholder="Contoh: Toyota" />
//             </div>

//             <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1 text-slate-700">Nomor Plat</label>
//                 <input {...register("plateNumber", { required: true })} className="border border-slate-300 p-2.5 rounded-lg w-full text-sm uppercase" placeholder="Contoh: D 1234 ABC" />
//             </div>

//             <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1 text-slate-700">Transmisi</label>
//                 <select {...register("transmission", { required: true })} className="border border-slate-300 p-2.5 rounded-lg w-full text-sm bg-white">
//                     <option value="MANUAL">MANUAL</option>
//                     <option value="AUTOMATIC">AUTOMATIC</option>
//                 </select>
//             </div>

//              <div className="mb-6">
//                 <label className="block text-sm font-medium mb-1 text-slate-700">Kategori</label>
//                 <select 
//                     {...register("categoryId", { required: true })} 
//                     className="border border-slate-300 p-2.5 rounded-lg w-full text-sm bg-white"
//                 >
//                     <option value="" disabled>Pilih Kategori</option>
//                     <option value="7fdb7fdb-4a93-4c78-858b-32c6457aa15b">SEDAN</option>
//                      <option value="38c39f36-bc42-4d60-b33e-63c31be26320">MPV</option>
//                     <option value="04cc14b0-6964-497a-b30f-57e37f5c26d6">SUV</option>
//                     <option value="239c63b2-a2e8-41cf-ad50-d0dd2fc44ed8">PICKUP</option>
//                 </select>
//             </div>

//             <button 
//                 type="submit" 
//                 disabled={isSubmitting} 
//                 className={`w-full p-2.5 rounded-lg font-semibold text-white transition-colors ${
//                     isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
//                 }`}
//             >
//                 {isSubmitting ? "Menyimpan..." : "Simpan Data"}
//             </button>
//         </form>
//     );
// }

