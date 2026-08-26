import { useState, useEffect } from "react";
import axios from "axios";
import VehicleCard from "../components/VehicleCard";
import type { Vehicle } from "../types/Vehicle";

export default function VehicleList() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshKey, setRefreshKey] = useState<number>(0);

  const handleRefresh = () => {
    setIsLoading(true);
    setRefreshKey((prev) => prev + 1);
  };

  useEffect(() => {
    axios.get("https://rent-car-pkl.linkbee.id/api/vehicles")
      .then((response) => {
        const result = response.data.data || response.data;
        setVehicles(result);
        setIsLoading(false);
      })
      .catch((err: unknown) => {
        setError("Gagal memuat data dari server.");
        setIsLoading(false);
        console.error(err);
      });
  }, [refreshKey]);

  return (
    <div className="w-full max-w-6xl">
      <h1 className="text-3xl font-bold mb-2 text-slate-800">Katalog Kendaraan</h1>
      <p className="text-slate-500 mb-6">Total Kendaraan: {vehicles.length}</p>
      {isLoading && <p className="text-slate-500 animate-pulse">Memuat data dari API...</p>}
      {error && <p className="text-red-500">{error}</p>}
      
      {!isLoading && !error && (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} {...vehicle} onRefresh = {handleRefresh}/>
          ))}
        </div>

      )}
    </div>
  );
}