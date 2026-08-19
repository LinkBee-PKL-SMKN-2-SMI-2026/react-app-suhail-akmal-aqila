import { useForm } from "react-hook-form"; // Mengimpor 'useForm', library khusus React untuk mengelola input formulir agar lebih mudah dan otomatis

export default function VehicleForm({ onAddVehicle }: { onAddVehicle: (data: any) => void }) { // Membuat fungsi komponen VehicleForm yang menerima props 'onAddVehicle' (sebuah fungsi untuk mengirimkan data ke komponen induk)
    const { register, handleSubmit, reset } = useForm(); // Mengambil 3 fitur dari useForm: register (mendaftarkan input), handleSubmit (penangan saat form dikirim), reset (mengosongkan form)

    const onSubmit = (data: any) => { // Fungsi yang akan berjalan saat tombol "Simpan Data" diklik dan semua input sudah terisi dengan benar
        const newVehicle = { // Membuat objek baru bernama 'newVehicle' untuk menampung data formulir yang sudah dirapikan
            id: crypto.randomUUID(), // Menggenerasi/membuat ID unik acak secara otomatis menggunakan fitur bawaan browser (seperti "f47ac10b-58cc...")
            name: data.name, // Mengambil teks dari inputan nama kendaraan
            brand: data.brand, // Mengambil teks dari inputan merek kendaraan
            plateNumber: data.plateNumber, // Mengambil teks dari inputan nomor plat
            transmission: data.transmission, // Mengambil pilihan transmisi (MANUAL / AUTOMATIC)
            category: { // Membuat objek kategori bersarang
                name: data.category // Memasukkan teks kategori (misal: "SUV") ke dalam properti name milik category
            }
        };

        onAddVehicle(newVehicle); // Memanggil fungsi dari props untuk mengoper data kendaraan baru ini ke komponen utama/parent
        reset(); // Mengosongkan kembali semua kolom input di formulir agar siap diisi data baru
    };

    return (
        // {/* KODE YANG DIUBAH: border-2 border-black */}
        <form onSubmit={handleSubmit(onSubmit)} className="border-2 border-black p-6 rounded-xl bg-white w-full shadow-sm"> {/* Elemen form: saat dikirim jalankan handleSubmit(onSubmit), gaya kotak dengan border hitam tebal 2px, padding 24px, sudut bulat, latar putih, lebar penuh */}
            <h2 className="text-lg font-bold mb-6 text-slate-800">Tambah Kendaraan Baru</h2> {/* Judul formulir: ukuran teks agak besar, tebal, jarak bawah 24px, warna abu-abu gelap */}
            
            <div className="mb-4"> {/* Pembungkus untuk input Nama Kendaraan, jarak bawah 16px */}
                <label className="block text-sm font-medium mb-1 text-slate-700">Nama Kendaraan</label> {/* Label petunjuk: tampil berdiri sendiri (block), teks ukuran kecil, agak tebal, jarak bawah 4px */}
                <input // Elemen kotak input teks
                    {...register("name", { required: true })} // Mendaftarkan input ini ke useForm dengan nama "name", serta syarat wajib diisi (required)
                    className="border border-slate-300 p-2.5 rounded-lg w-full text-sm" // Gaya input: border abu-abu terang, padding 10px, sudut membulat, lebar penuh
                    placeholder="Contoh: Avanza Veloz" // Teks samar sebagai petunjuk sebelum diisi user
                />
            </div>

            <div className="mb-4"> {/* Pembungkus untuk input Merek, jarak bawah 16px */}
                <label className="block text-sm font-medium mb-1 text-slate-700">Merek</label> {/* Label petunjuk Merek */}
                <input // Elemen kotak input teks
                    {...register("brand", { required: true })} // Mendaftarkan input ini ke useForm dengan nama "brand", wajib diisi
                    className="border border-slate-300 p-2.5 rounded-lg w-full text-sm" // Gaya input teks
                    placeholder="Contoh: Toyota" // Teks contoh merek
                />
            </div>

            <div className="mb-4"> {/* Pembungkus untuk input Nomor Plat, jarak bawah 16px */}
                <label className="block text-sm font-medium mb-1 text-slate-700">Nomor Plat</label> {/* Label petunjuk Nomor Plat */}
                <input // Elemen kotak input teks
                    {...register("plateNumber", { required: true })} // Mendaftarkan input ke useForm dengan nama "plateNumber", wajib diisi
                    className="border border-slate-300 p-2.5 rounded-lg w-full text-sm uppercase" // Gaya input dengan tambahan 'uppercase' agar huruf otomatis tampil kapital
                    placeholder="Contoh: D 1234 ABC" // Teks contoh plat nomor
                />
            </div>

            <div className="mb-4"> {/* Pembungkus untuk pilihan Transmisi, jarak bawah 16px */}
                <label className="block text-sm font-medium mb-1 text-slate-700">Transmisi</label> {/* Label petunjuk Transmisi */}
                <select // Elemen menu pilihan drop-down
                    {...register("transmission", { required: true })} // Mendaftarkan pilihan ini ke useForm dengan nama "transmission", wajib dipilih
                    className="border border-slate-300 p-2.5 rounded-lg w-full text-sm bg-white" // Gaya menu drop-down
                >
                    <option value="MANUAL">MANUAL</option> {/* Pilihan pertama: bernilai "MANUAL" */}
                    <option value="AUTOMATIC">AUTOMATIC</option> {/* Pilihan kedua: bernilai "AUTOMATIC" */}
                </select>
            </div>

            <div className="mb-6"> {/* Pembungkus untuk input Kategori, jarak bawah 24px */}
                <label className="block text-sm font-medium mb-1 text-slate-700">Kategori</label> {/* Label petunjuk Kategori */}
                <input // Elemen kotak input teks
                    {...register("category", { required: true })} // Mendaftarkan input ke useForm dengan nama "category", wajib diisi
                    className="border border-slate-300 p-2.5 rounded-lg w-full text-sm" // Gaya input teks
                    placeholder="Contoh: SUV / Sedan / MPV" // Teks contoh kategori
                />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white p-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors"> {/* Tombol kirim form: tipe submit, lebar penuh, latar biru, teks putih, efek sedikit lebih gelap saat kursor menempel (hover) */}
                Simpan Data {/* Teks pada tombol */}
            </button>
        </form>
    );
}
