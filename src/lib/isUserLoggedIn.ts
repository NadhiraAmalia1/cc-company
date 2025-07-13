import { useAuthStore } from "@/stores/authStore";

export const isUserLoggedIn = () => {
  const user = useAuthStore.getState().user;
  return !!user;
};