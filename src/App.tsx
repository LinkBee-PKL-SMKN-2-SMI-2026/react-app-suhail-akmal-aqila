// react 2

// // src/App.tsx
// import { useState } from "react";
// import type { Employee } from "./types/employee";
// import { EmployeeCard } from "./components/EmployeeCard";
// import { EmployeeForm } from "./components/EmployeeForm";

// // Dummy data awal
// const initialEmployees: Employee[] = [
//   { id: 1, name: "Budi Santoso", role: "Frontend Dev", department: "IT", isActive: true },
//   { id: 2, name: "Siti Rahma", role: "HR Specialist", department: "HR", isActive: true },
//   { id: 3, name: "Andi Wijaya", role: "Accountant", department: "Finance", isActive: false },
//   { id: 4, name: "Dewi Lestari", role: "SEO Specialist", department: "Marketing", isActive: true },
//   { id: 5, name: "Eko Prasetyo", role: "Logistics Lead", department: "Operations", isActive: true },
//   { id: 6, name: "Rian Hidayat", role: "Intern", department: "General", isActive: true }
// ];

// function App() {
//   // 1. Simpan data di State
//   const [employees, setEmployees] = useState<Employee[]>(initialEmployees);

//   // 2. Fungsi penambah karyawan baru (Callback function)
//   // ...prevEmployees => [newEmployee, ...prevEmployees] menambahkan karyawan baru di awal array
//   // Tanda ... (Spread Operator) digunakan untuk menyalin semua data karyawan yang lama.

//   const handleAddEmployee = (newEmployee: Employee) => {
//     setEmployees((prevEmployees) => [newEmployee, ...prevEmployees]);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6 md:p-10">
//       <h1 className="text-3xl font-bold mb-8 text-gray-800">Sistem Manajemen Karyawan</h1>

//       {/* Grid Layout: Form di Kiri/Atas, List di Kanan/Bawah */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
//         {/* Kolom Form */}
//         <div className="lg:col-span-1">
//           <EmployeeForm onAddEmployee={handleAddEmployee} />
//         </div>

//         {/* Kolom Daftar Karyawan */}
//         <div className="lg:col-span-2">
//           <h2 className="text-xl font-bold text-gray-800 mb-4">
//             Daftar Karyawan ({employees.length})
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {employees.map((employee) => (
//               <EmployeeCard key={employee.id} {...employee} />
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default App;


// codingan react 3 , yg atas, employee sengaja ga dihapus takut perluuu klo mau dihapus ama suhail/ali ajaa aku takut salahh hehe
// ali : aku juga takut salahh, sama suhel aja deh hehe, HIDUP PM!

import { useState, useEffect } from "react"; // Mengimpor React Hooks: useState (untuk menyimpan state/data lokal) dan useEffect (untuk menjalankan efek samping seperti memanggil API saat komponen dimuat)
import axios from "axios"; // Mengimpor library Axios yang berfungsi sebagai klien HTTP untuk mengirim/menerima data dari API server
import VehicleCard from "./components/VehicleCard"; // Mengimpor komponen VehicleCard yang berfungsi menampilkan kartu detail dari satu kendaraan
import VehicleForm from "./components/VehicleForm"; // Mengimpor komponen VehicleForm yang berfungsi menyediakan formulir penambahan kendaraan baru

export default function App() { // Mengubah komponen utama 'App' menjadi fungsi utama yang diekspor sebagai default
  const [vehicles, setVehicles] = useState<any[]>([]); // Membuat state 'vehicles' bertipe array untuk menyimpan daftar semua kendaraan, berlayar awal berupa array kosong []
  const [isLoading, setIsLoading] = useState<boolean>(true); // Membuat state 'isLoading' bertipe boolean untuk melacak status muat data (default: true/sedang memuat)
  const [error, setError] = useState<string | null>(null); // Membuat state 'error' untuk menyimpan pesan kesalahan jika request API gagal (default: null/tidak ada error)

  // Fetching data kendaraan dari real API saat pertama kali dibuka
  useEffect(() => { // Hook Effect yang akan dipanggil secara otomatis tepat setelah komponen App dirender pertama kali ke layar
    axios.get("https://rent-car-pkl.linkbee.id/api/vehicles") // Mengirim HTTP Request bertipe GET menggunakan Axios ke URL server API kendaraan
      .then((response) => { // Blok callback yang otomatis berjalan apabila server API sukses memberikan balasan HTTP 200 OK
        // Sesuaikan dengan struktur data dari endpoint API (biasanya response.data.data atau response.data)
        const result = response.data.data || response.data; // Mengecek letak array data kendaraan: gunakan response.data.data jika ada, atau gunakan response.data
        setVehicles(result); // Memasukkan data daftar kendaraan yang didapat dari server ke dalam state 'vehicles'
        setIsLoading(false); // Mengubah status pemuatan menjadi false karena proses mengambil data telah selesai
      })
      .catch((err) => { // Blok callback yang otomatis berjalan apabila koneksi API mengalami gangguan atau error (HTTP 4xx/5xx)
        setError("Gagal memuat data kendaraan dari server."); // Menyimpan teks pesan galat kustom ke dalam state 'error'
        setIsLoading(false); // Mengubah status pemuatan menjadi false karena proses request dihentikan oleh eror
        console.error(err); // Menampilkan rincian teknis dari pesan error ke dalam konsol browser untuk keperluan debugging
      });
  }, []); // Array dependensi kosong [] menandakan efek ini HANYA boleh dipanggil 1 kali saat halaman pertama kali dibuka (mount)

  // Fungsi menambah kendaraan baru ke state lokal
  const handleAddVehicle = (newVehicle: any) => { // Mendefinisikan fungsi penangan untuk menyisipkan objek data kendaraan baru
    setVehicles((prevVehicles) => [newVehicle, ...prevVehicles]); // Menggunakan Spread Operator (...) untuk menaruh data baru di paling depan array, diikuti data lama di belakangnya
  };

  return ( // Mengembalikan struktur elemen JSX yang menggambarkan tata letak utama seluruh aplikasi
    <div className="min-h-screen bg-slate-50 p-6 md:p-10"> {/* Pembungkus paling luar: tinggi minimal selayar full, warna latar belakang abu-abu terang, padding 24px (desktop: 40px) */}
      <h1 className="text-3xl font-bold mb-8 text-slate-800">Sistem Katalog Rent Car</h1> {/* Judul utama halaman: ukuran teks besar (3xl), cetak tebal, margin bawah 32px, warna teks slate gelap */}

      <div className="flex flex-col lg:flex-row items-start gap-8"> {/* Pembungkus tata letak (layout): posisi bertumpuk ke bawah pada HP (flex-col), menyamping pada layar laptop (lg:flex-row), rata atas, jarak antar kolom 32px */}
        
        {/* Kolom Form Kiri */}
        <div className="w-full lg:w-1/3"> {/* Kolom kiri pembungkus form: lebar 100% pada HP dan 33.3% (sepertiga layar) pada layar besar */}
          <VehicleForm onAddVehicle={handleAddVehicle} /> {/* Memasang komponen VehicleForm sambil mengoper fungsi handleAddVehicle melalui prop 'onAddVehicle' */}
        </div>

        {/* Kolom Daftar Kendaraan Kanan */}
        <div className="flex-1 w-full"> {/* Kolom kanan pembungkus daftar: mengambil sisa ruang yang ada (flex-1) dan lebar penuh */}
          <h2 className="text-xl font-bold text-slate-800 mb-4"> {/* Judul daftar kendaraan: ukuran teks xl, cetak tebal, warna slate gelap, margin bawah 16px */}
            Daftar Kendaraan ({vehicles.length}) {/* Menampilkan teks judul sekaligus menghitung jumlah total items di dalam array 'vehicles' */}
          </h2>

          {/* Indikator Loading & Error */}
          {isLoading && <p className="text-slate-500">Memuat data dari API...</p>} {/* Short-circuit Evaluation: Jika isLoading bernilai true, tampilkan teks indikator pemuatan */}
          {error && <p className="text-red-500">{error}</p>} {/* Short-circuit Evaluation: Jika ada error, tampilkan teks pesan error dengan warna merah */}

          {/* Grid Katalog Kendaraan */}
          {!isLoading && !error && (  // {/* Kondisi rendering: Tampilkan daftar hanya jika pemuatan sudah selesai (!isLoading) DAN tidak terjadi error (!error) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Sistem kisi (Grid): 1 kolom di layar HP (grid-cols-1), 2 kolom di layar sedang (md:grid-cols-2), jarak antar kisi 16px */}
              {vehicles.map((vehicle) => ( // Melakukan perulangan (mapping) pada setiap item objek kendaraan di dalam array 'vehicles'
                <VehicleCard key={vehicle.id || crypto.randomUUID()} {...vehicle} /> // Rendernya komponen VehicleCard: berikan key unik wajib, lalu sebar seluruh properti objek vehicle menggunakan spread operator ({...vehicle})
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
