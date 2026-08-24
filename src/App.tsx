import { useState, useEffect } from "react";
import axios from "axios";
import VehicleCard from "./components/VehicleCard";
import VehicleForm from "./components/VehicleForm";
import type { Vehicle } from "./types/Vehide";

export default function App() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get("https://rent-car-pkl.linkbee.id/api/vehicles")
      .then((response) => {
        const result = response.data.data || response.data;
        setVehicles(result);
        setIsLoading(false);
      })
      .catch((err: unknown) => {
        setError("Gagal memuat data kendaraan dari server.");
        setIsLoading(false);
        console.error(err);
      });
  }, []);

  const handleAddVehicle = (newVehicle: Vehicle) => {
    setVehicles((prev) => [newVehicle, ...prev]);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-8 text-slate-800">Sistem Katalog Rent Car</h1>

      <div className="flex flex-col lg:flex-row items-start gap-8">
        <div className="w-full lg:w-1/3">
          <VehicleForm onAddVehicle={handleAddVehicle} />
        </div>

        <div className="flex-1 w-full">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            Daftar Kendaraan ({vehicles.length})
          </h2>

          {isLoading && <p className="text-slate-500">Memuat data dari API...</p>}
          {error && <p className="text-red-500">{error}</p>}

          {!isLoading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {vehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} {...vehicle} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}