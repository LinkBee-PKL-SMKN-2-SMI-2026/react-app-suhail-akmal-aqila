interface VehicleProps // Mendefinisikan tipe data/struktur 'props' (data masukan) yang diterima komponen ini
{
    id: string | number; // Properti 'id' wajib ada, boleh berupa teks (string) atau angka (number)
    name: string; // Properti 'name' wajib berupa teks untuk menyimpan nama kendaraan
    brand: string; // Properti 'brand' wajib berupa teks untuk menyimpan merek kendaraan
    plateNumber: string; // Properti 'plateNumber' wajib berupa teks untuk menyimpan plat nomor
    transmission: string; // Properti 'transmission' wajib berupa teks untuk jenis transmisi (misal: Automatic/Manual)
    category?: // Properti 'category' bersifat opsional (boleh dikirim, boleh kosong/undefined)
    {
        name: string; // Jika 'category' ada, maka di dalamnya wajib punya properti 'name' berupa teks
    };
}

export default function VehicleCard({ name, brand, plateNumber, transmission, category }: VehicleProps) // Membuat dan mengekspor fungsi komponen utama, sekaligus membongkar (destructure) props yang masuk
{ 
    // KODE YANG DIUBAH: Logika penentuan warna border berdasarkan transmisi
    const isAutomatic = transmission.toUpperCase() === "AUTOMATIC"; // Mengubah teks transmisi jadi huruf besar semua lalu mengecek apakah nilainya sama dengan "AUTOMATIC" (menghasilkan true/false)
    const borderClass = isAutomatic ? "border-blue-500" : "border-red-500"; // Jika isAutomatic true gunakan warna garis biru, jika false gunakan warna garis merah

    return ( // Mengembalikan tampilan HTML/JSX yang akan digambar di layar
       
        // {/* KODE YANG DIUBAH: Memasukkan variabel borderClass ke dalam className */}
        <div className={`border-2 ${borderClass} p-5 rounded-xl shadow-sm bg-white`}> {/* Kotak luar: border tebal 2px, warna dinamis dari borderClass, padding 20px, sudut melengkung, bayangan tipis, latar putih */}
            <div className="flex justify-between items-start mb-1"> {/* Pembungkus atas: susun elemen ke samping (flex), pisahkan ujung ke ujung, rata atas, jarak bawah 4px */}
                <h2 className="text-lg font-bold text-slate-800">{name}</h2> {/* Judul nama kendaraan: ukuran agak besar (lg), teks tebal, warna abu-abu gelap */}
                <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${isAutomatic ? "bg-blue-50 text-blue-600" : "bg-red-50 text-red-600"}`}> {/* Badge transmisi: padding dalam, teks kecil tebal, bentuk kapsul, warna latar & teks berubah sesuai status matic/manual */}
                    {transmission} {/* Menampilkan isi dari variabel transmission secara dinamis */}
                </span>
            </div>
            <p className="text-slate-500 text-sm mb-3">Merek: {brand}</p> {/* Paragraf teks merek: warna abu-abu sedang, ukuran teks kecil, jarak bawah 12px */}

            <div className="flex justify-between items-center text-sm"> {/* Pembungkus bawah: susun ke samping, pisahkan ujung ke ujung, rata tengah secara vertikal, teks ukuran kecil */}
                <span className="font-mono bg-gray-100 px-2 py-1 rounded text-slate-700"> {/* Elemen plat nomor: font huruf komputer (monospace), latar abu-abu terang, padding kecil, sudut melengkung */}
                    {plateNumber} {/* Menampilkan isi dari variabel plateNumber secara dinamis */}
                </span>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider"> {/* Elemen kategori: teks sangat kecil, tebal, warna hijau zamrud, huruf kapital semua, jarak antar huruf agak renggang */}
                    {category?.name || "Umum"} {/* Cek apakah category ada. Jika ada ambil name-nya, jika tidak ada/null/undefined tampilkan teks "Umum" */}
                </span>
            </div>
        </div>
    );
}