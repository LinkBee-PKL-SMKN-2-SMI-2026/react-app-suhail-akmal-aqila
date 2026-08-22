import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../utils/api";
import { useAuthStore } from "../store/useAuthStore";

interface LoginFormData {
  email: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit } = useForm<LoginFormData>();
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await api.post("/auth/login", data);
      const token = response.data.data?.accessToken || response.data?.accessToken;

      if (token) {
        login(token);
        alert("Login Berhasil!");
        navigate("/vehicles");
      }
    } catch (err: unknown) {
      alert("Login Gagal! Periksa email dan password Anda.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-slate-800 text-center">Login Rent Car Admin</h1>
        
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1 text-slate-700">Email</label>
          <input 
            type="email" 
            {...register("email", { required: true })} 
            className="border border-slate-300 p-2.5 rounded-lg w-full text-sm"placeholder="admin@rentcar.com"/>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1 text-slate-700">Password</label>
          <input 
            type="password" 
            {...register("password", { required: true })} 
            className="border border-slate-300 p-2.5 rounded-lg w-full text-sm"placeholder="••••••••"/>
        </div>

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold p-3 rounded-lg transition-colors">Masuk
        </button>
      </form>
    </div>
  );
}