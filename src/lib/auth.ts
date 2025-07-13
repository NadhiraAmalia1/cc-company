// lib/auth.ts
import Backendless from "backendless";
import type { User } from "@/stores/authStore";

type UserWithRole = Backendless.User & {
  role?: "admin" | "user";
};

if (!Backendless.applicationId) {
  Backendless.initApp(
    process.env.NEXT_PUBLIC_BACKENDLESS_APP_ID!,
    process.env.NEXT_PUBLIC_BACKENDLESS_API_KEY!
  );
}

export const loginUser = async (email: string, password: string): Promise<User> => {
  try {
    const user = await Backendless.UserService.login(
      email,
      password,
      true
    ) as UserWithRole;

    if (!user.email) {
      throw new Error("Email tidak tersedia dari server");
    }

    return {
      email: user.email,
      role: user.role ?? "user",
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error("Login failed:", error.message);
      throw new Error(error.message);
    }

    throw new Error("Unexpected login failure");
  }
};