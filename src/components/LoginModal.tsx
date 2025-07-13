"use client";

import { useModalStore } from "@/stores/modalStore";
import LoginForm from "./LoginForm";
import { X } from "lucide-react";

export default function LoginModal() {
  const isOpen = useModalStore((state) => state.isLoginOpen);
  const close = useModalStore((state) => state.closeLogin);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/50 flex justify-center items-center">
      <div className="relative w-full max-w-md bg-white rounded-xl p-6 shadow-lg">
        {/* Tombol close pojok kanan atas */}
        <button
          onClick={close}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X className="w-6 h-6" />
        </button>

        <LoginForm />
      </div>
    </div>
  );
}