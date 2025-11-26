import { useEffect, useMemo, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useAuthStore } from "@/store/useAuthStore";
import { useAuthQuery } from "@/screens/auth/hooks/useAuthQuery";
import type { IUser, IAuthUser } from "@/types/IAuth";
import type { AccessTokenPayload } from "@/types/api-response";

const mapProfile = (u: IUser): IAuthUser => ({
    id: u.steamId,
    nickname: u.personaName,
    avatarUrl: u.avatarUrl,
});

export const useFinishSteamLoginFromQuery = (search: string) => {
    const {setTokens, setProfile, clearAuth} = useAuthStore();

    const tokens = useMemo(() => {
        const params = new URLSearchParams(search);
        const accessToken = params.get("accessToken");
        const refreshToken = params.get("refreshToken");
        if (!accessToken || !refreshToken) return null;

        const payload = jwtDecode<AccessTokenPayload>(accessToken);
        const tokenVersion = payload.ver;

        return { accessToken, refreshToken, tokenVersion };
    }, [search]);

    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (!tokens) return;
        setTokens(tokens);
        setReady(true);
    }, [tokens, setTokens]);

    const { data, isError, isSuccess, isLoading } = useAuthQuery(ready);

    useEffect(() => {
        if (!isSuccess) return;
        setProfile(mapProfile(data));
    }, [isSuccess, data, setProfile]);

    useEffect(() => {
        if (!isError) return;
        clearAuth();
    }, [isError, clearAuth]);

    return {
        hasTokens: !!tokens,
        ready,
        isLoading,
        isError,
        isSuccess,
        data,
    };
};
