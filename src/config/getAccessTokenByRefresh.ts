import axios from "axios";
import { SERVER_URL, postAccessTokenUrl } from "@/config/api.config";
import type {IRefresh} from "@/types/IAuth.ts";
import {useAuthStore} from "@/store/useAuthStore.ts";
import {jwtDecode} from "jwt-decode";
import type {AccessTokenPayload} from "@/types/api-response.ts";

export const getAccessTokenByRefresh = async () => {
    try {
        const { refreshToken, setTokens } = useAuthStore.getState();

        const res = await axios.post<string, {data: {data: IRefresh}}>(
            SERVER_URL + postAccessTokenUrl(),
            { refreshToken }
        );

        const { accessToken, refreshToken: newRefreshToken } = res.data.data;
        const payload = jwtDecode<AccessTokenPayload>(accessToken);
        const tokenVersion = payload.ver;

        setTokens({
            accessToken,
            refreshToken: newRefreshToken,
            tokenVersion: tokenVersion,
        });

    }
    catch (e){
        console.error(e)
    }
};
