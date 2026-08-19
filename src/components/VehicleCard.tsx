interface VehicleProps {
    id: string | number;
    name: string;
    brand: string;
    plateNumber: string;
    transmission: string;
    category?: {
        name: string;
    };
}

export default function VehicleCard({ name, brand, plateNumber, transmission, category }: VehicleProps) {
    // KODE YANG DIUBAH: Logika penentuan warna border berdasarkan transmisi
    const isAutomatic = transmission.toUpperCase() === "AUTOMATIC";
    const borderClass = isAutomatic ? "border-blue-500" : "border-red-500";

    return (
        // {/* KODE YANG DIUBAH: Memasukkan variabel borderClass ke dalam className */}
        <div className={`border-2 ${borderClass} p-5 rounded-xl shadow-sm bg-white`}>
            <div className="flex justify-between items-start mb-1">
                <h2 className="text-lg font-bold text-slate-800">{name}</h2>
                <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${isAutomatic ? "bg-blue-50 text-blue-600" : "bg-red-50 text-red-600"}`}>
                    {transmission}
                </span>
            </div>
            <p className="text-slate-500 text-sm mb-3">Merek: {brand}</p>
            
            <div className="flex justify-between items-center text-sm">
                <span className="font-mono bg-gray-100 px-2 py-1 rounded text-slate-700">
                    {plateNumber}
                </span>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                    {category?.name || "Umum"}
                </span>
            </div>
        </div>
    );
}