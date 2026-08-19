import { useForm } from "react-hook-form";

export default function VehicleForm({ onAddVehicle }: { onAddVehicle: (data: any) => void }) {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data: any) => {
        const newVehicle = {
            id: crypto.randomUUID(), 
            name: data.name,
            brand: data.brand,
            plateNumber: data.plateNumber,
            transmission: data.transmission,
            category: {
                name: data.category
            }
        };

        onAddVehicle(newVehicle);
        reset(); 
    };

    return (
        // {/* KODE YANG DIUBAH: border-2 border-black */}
        <form onSubmit={handleSubmit(onSubmit)} className="border-2 border-black p-6 rounded-xl bg-white w-full shadow-sm">
            <h2 className="text-lg font-bold mb-6 text-slate-800">Tambah Kendaraan Baru</h2>
            
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-slate-700">Nama Kendaraan</label>
                <input 
                    {...register("name", { required: true })} 
                    className="border border-slate-300 p-2.5 rounded-lg w-full text-sm" 
                    placeholder="Contoh: Avanza Veloz" 
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-slate-700">Merek</label>
                <input 
                    {...register("brand", { required: true })} 
                    className="border border-slate-300 p-2.5 rounded-lg w-full text-sm" 
                    placeholder="Contoh: Toyota" 
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-slate-700">Nomor Plat</label>
                <input 
                    {...register("plateNumber", { required: true })} 
                    className="border border-slate-300 p-2.5 rounded-lg w-full text-sm uppercase" 
                    placeholder="Contoh: D 1234 ABC" 
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-slate-700">Transmisi</label>
                <select 
                    {...register("transmission", { required: true })} 
                    className="border border-slate-300 p-2.5 rounded-lg w-full text-sm bg-white"
                >
                    <option value="MANUAL">MANUAL</option>
                    <option value="AUTOMATIC">AUTOMATIC</option>
                </select>
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium mb-1 text-slate-700">Kategori</label>
                <input 
                    {...register("category", { required: true })} 
                    className="border border-slate-300 p-2.5 rounded-lg w-full text-sm" 
                    placeholder="Contoh: SUV / Sedan / MPV" 
                />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white p-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Simpan Data
            </button>
        </form>
    );
}
