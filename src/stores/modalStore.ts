// src/stores/modalStore.ts
import { create } from "zustand";

type ModalStore = {
  isLoginOpen: boolean;
  openLogin: () => void;
  closeLogin: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  isLoginOpen: false,
  openLogin: () => set({ isLoginOpen: true }),
  closeLogin: () => set({ isLoginOpen: false }),
}));