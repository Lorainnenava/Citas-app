import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
export const useAuthStore = create(
  persist(
    (set) => ({
      token: "",
      setToken: (token:string) =>
        set(() => ({
          token,
        })),
      profile: null,
      setProfile: (profile:any) =>
        set(() => ({
          profile,
        })),
      logOut: (token:string, profile:any) =>
        set(() => ({
          token,
          profile,
        })),
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
