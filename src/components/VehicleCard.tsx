import axios from "axios";
import { TOKEN } from "../App";
// import type { Vehicle } from "../App";
import type { Vehicle } from "../types/Vehicle";

interface VehicleCardProps extends Vehicle {
    onRefresh: () => void;
}

export default function VehicleCard({ id, name, brand, plateNumber, transmission, category, onRefresh }: VehicleCardProps) {
    const isAutomatic = transmission.toUpperCase() === "AUTOMATIC";
    const borderClass = isAutomatic ? "border-blue-500" : "border-red-500";

    const handleDelete = async () => {
        if (window.confirm(`Apakah kamu yakin ingin menghapus ${name} (${plateNumber})?`)) {
            try {
                await axios.delete(`https://rent-car-pkl.linkbee.id/api/vehicles/${id}`, {
                    headers: { Authorization: `Bearer ${TOKEN}` }
                });
                onRefresh();
            } catch (err: unknown) {
                if (axios.isAxiosError(err)) {
                    const errorMessage = err.response?.data?.message || "Terjadi kesalahan saat menghapus.";
                    alert(`Gagal menghapus: ${errorMessage}`);
                } else {
                    alert("Gagal menghapus karena kesalahan sistem.");
                }
            }
        }
    };

    return (
        <div className={`border-2 ${borderClass} p-5 rounded-xl shadow-sm bg-white relative`}>
            <div className="flex justify-between items-start mb-1">
                <h2 className="text-lg font-bold text-slate-800 pr-4">{name}</h2>
                <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${isAutomatic ? "bg-blue-50 text-blue-600" : "bg-red-50 text-red-600"}`}>
                    {transmission}
                </span>
            </div>
            
            <p className="text-slate-500 text-sm mb-3">Merek: {brand}</p>
            
            <div className="flex justify-between items-center text-sm mt-4">
                <span className="font-mono bg-gray-100 px-2 py-1 rounded text-slate-700">
                    {plateNumber}
                </span>
                
                <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                        {category?.name || "Umum"}
                    </span>

                    <button 
                        onClick={handleDelete}
                        className="text-xs font-bold text-white bg-red-500 hover:bg-red-600 px-3 py-1.5 rounded transition-colors"
                    >
                        Hapus
                    </button>
                </div>
            </div>
        </div>
    );
}