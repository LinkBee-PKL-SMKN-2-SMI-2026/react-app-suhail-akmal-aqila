import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function MainLayout() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-100">
      <aside className="w-full md:w-64 bg-slate-900 text-white p-6 flex flex-col justify-between shadow-xl">
        <div>
          <h1 className="text-2xl font-bold mb-8 text-blue-400"> Rent Car Admin </h1>
          <nav className="flex flex-col gap-3">
            <Link to="/vehicles" className="p-3 rounded-lg hover:bg-slate-800 transition-colors font-medium"> Daftar Kendaraan </Link>
            <Link to="/vehicles/new" className="p-3 rounded-lg hover:bg-slate-800 transition-colors font-medium"> + Tambah Baru </Link>
          </nav>
        </div>

        <button 
          onClick={handleLogout}
          className="mt-8 p-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold transition-colors w-full">Logout
        </button>
      </aside>

      <main className="flex-1 p-6 md:p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}