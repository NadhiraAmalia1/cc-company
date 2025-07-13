// stores/authStore.ts
import { create } from "zustand";

export type User = {
  email: string;
  role: "admin" | "user";
};

type AuthStore = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
}));