"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser } from "@/lib/auth";
import { useAuthStore } from "@/stores/authStore";
import type { User } from "@/stores/authStore";
import { motion } from "framer-motion";
import { X, Sparkles } from "lucide-react"; // Icon bintang

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

type LoginInput = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [errorMsg, setErrorMsg] = useState("");
  const login = useAuthStore((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginInput) => {
    try {
      const user: User = await loginUser(data.email, data.password);
      login(user);
      alert(`Successfully logged in as ${user.role}`);
    } catch (err) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("Login failed, something went wrong");
      }
    }
  };

return (
  <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-blue-950 flex items-center justify-center px-4 relative">
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-lg bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl rounded-2xl px-10 py-12 text-white relative"
    >
      {/* Tombol Close */}
      <button
        onClick={() => window.history.back()}
        type="button"
        className="absolute top-4 right-4 text-gray-300 hover:text-white transition"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="flex justify-center mb-6">
        <motion.div
          initial={{ rotate: -15 }}
          animate={{ rotate: [0, -10, 10, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-blue-400"
        >
          <Sparkles size={40} />
        </motion.div>
      </div>

      <h2 className="text-4xl font-bold mb-8 text-center text-blue-400 tracking-wide">
        Login to Your Account
      </h2>

      {/* Form Email */}
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Form Password */}
      <div className="mb-6">
        <label htmlFor="password" className="block text-sm font-medium mb-1">
          Password
        </label>
        <input
          id="password"
          type="password"
          {...register("password")}
          className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="••••••••"
        />
        {errors.password && (
          <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>
        )}
      </div>

      {errorMsg && (
        <p className="text-red-400 text-xs text-center mb-4">{errorMsg}</p>
      )}

      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.02 }}
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-white font-semibold py-3 px-4 rounded-md"
      >
        Sign In
      </motion.button>
    </motion.form>
  </div>
);
}