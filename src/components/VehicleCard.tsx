import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../utils/api";
import type { Vehicle } from "../types/Vehicle";

export default function VehicleCard({ id, name, brand, plateNumber, transmission, category }: Vehicle) {
  const queryClient = useQueryClient();
  const isAutomatic = transmission.toUpperCase() === "AUTOMATIC";

  const deleteMutation = useMutation({
    mutationFn: async () => {
      await api.delete(`/vehicles/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["vehicles"] });
    },
    onError: (err: unknown) => {
      alert("Gagal menghapus kendaraan.");
      console.error(err);
    },
  });

  const handleDelete = () => {
    if (window.confirm(`Apakah kamu yakin ingin menghapus ${name}?`)) {
      deleteMutation.mutate();
    }
  };

  return (
    <div className={`border-2 ${isAutomatic ? "border-blue-500" : "border-red-500"} p-5 rounded-xl bg-white shadow-sm`}>
      <div className="flex justify-between items-start mb-1">
        <h2 className="text-lg font-bold text-slate-800 pr-4">{name}</h2>
        <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${isAutomatic ? "bg-blue-50 text-blue-600" : "bg-red-50 text-red-600"}`}>
          {transmission}
        </span>
      </div>
      
      <p className="text-slate-500 text-sm mb-3">Merek: {brand}</p>
      
      <div className="flex justify-between items-center text-sm mt-4">
        <span className="font-mono bg-gray-100 px-2 py-1 rounded text-slate-700">{plateNumber}</span>
        
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-emerald-600 uppercase">{category?.name || "Umum"}</span>
          <button 
            onClick={handleDelete}
            disabled={deleteMutation.isPending}
            className="text-xs font-bold text-white bg-red-500 hover:bg-red-600 px-3 py-1.5 rounded transition-colors disabled:bg-gray-400">
            {deleteMutation.isPending ? "Hapus..." : "Hapus"}
          </button>
        </div>
      </div>
    </div>
  );
}