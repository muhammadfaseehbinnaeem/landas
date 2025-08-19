import { create } from "zustand";

type AuthState = {
  isAuthenticated: boolean;
  userId: string | null;
  login: (id: string, remember: boolean) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  userId: null,
  login: (id, remember) => {
    try {
      if (remember) localStorage.setItem("rememberId", id);
      else localStorage.removeItem("rememberId");
    } catch {}
    set({ isAuthenticated: true, userId: id });
  },
  logout: () => set({ isAuthenticated: false, userId: null }),
}));

export function getRememberedId(): string {
  try {
    return localStorage.getItem("rememberId") || "";
  } catch {
    return "";
  }
}
