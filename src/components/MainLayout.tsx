import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-100">
      <aside className="w-full md:w-64 bg-slate-900 text-white p-6 flex flex-col shadow-xl">
        <h1 className="text-2xl font-bold mb-8 text-blue-400">Rent Car Admin</h1>
        <nav className="flex flex-col gap-3">
          <Link 
            to="/vehicles"className="p-3 rounded-lg hover:bg-slate-800 transition-colors font-medium flex items-center gap-2">Daftar Kendaraan</Link>
          <Link 
            to="/vehicles/new"className="p-3 rounded-lg hover:bg-slate-800 transition-colors font-medium flex items-center gap-2">➕ Tambah Baru</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6 md:p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}