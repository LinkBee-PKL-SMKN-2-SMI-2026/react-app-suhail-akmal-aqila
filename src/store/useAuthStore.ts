import { create } from "zustand";
import type { AuthState } from "../types/Vehicle";

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("token") || null,
  login: (newToken: string) => {
    localStorage.setItem("token", newToken);
    set({ token: newToken });
  },
  logout: () => {
    localStorage.removeItem("token");
    set({ token: null });
  },
}));