import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { IAuthUser } from "@/types/IAuth";

export type AuthTokens = {
    accessToken: string;
    refreshToken: string;
    tokenVersion: string;
};

export type AuthState = {
    accessToken: string | null;
    refreshToken: string | null;
    tokenVersion: string | null;
    profile: IAuthUser | null;

    setTokens: (tokens: AuthTokens) => void;
    setProfile: (profile: IAuthUser | null) => void;
    clearAuth: () => void;
};

export const AUTH_STORAGE_KEY = "user-auth";

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            accessToken: null,
            refreshToken: null,
            tokenVersion: null,
            profile: null,

            setTokens: ({ accessToken, refreshToken, tokenVersion }) =>
                set({ accessToken, refreshToken, tokenVersion }),

            setProfile: (profile) => set({ profile }),

            clearAuth: () =>
                set({
                    accessToken: null,
                    refreshToken: null,
                    tokenVersion: null,
                    profile: null,
                }),
        }),
        {
            name: AUTH_STORAGE_KEY,
            storage: createJSONStorage(() => localStorage),

            partialize: (s) => ({
                accessToken: s.accessToken,
                refreshToken: s.refreshToken,
                tokenVersion: s.tokenVersion,
                profile: s.profile,
            }),
        }
    )
);
