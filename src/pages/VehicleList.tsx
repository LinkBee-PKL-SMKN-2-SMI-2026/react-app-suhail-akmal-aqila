import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";
import VehicleCard from "../components/VehicleCard";
import type { Vehicle } from "../types/Vehicle";

export default function VehicleList() {
  const { data: vehicles = [], isLoading, isError } = useQuery<Vehicle[]>({
    queryKey: ["vehicles"],
    queryFn: async () => {
      const response = await api.get("/vehicles");
      return response.data.data || response.data;
    },
  });

  return (
    <div className="w-full max-w-6xl">
      <h1 className="text-3xl font-bold mb-2 text-slate-800">Katalog Kendaraan</h1>
      <p className="text-slate-500 mb-6">Total Kendaraan: {vehicles.length}</p>

      {isLoading && <p className="text-slate-500 animate-pulse">Memuat data dari API...</p>}
      {isError && <p className="text-red-500">Gagal memuat data dari server.</p>}

      {!isLoading && !isError && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} {...vehicle}/>
          ))}
        </div>
      )}
    </div>
  );
}