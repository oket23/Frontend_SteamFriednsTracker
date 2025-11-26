import axios from "axios";
import { SERVER_URL } from "@/config/api.config";
import { getAccessTokenByRefresh } from "@/config/getAccessTokenByRefresh";
import { RouterEnum } from "@/config/RouterEnum";
import {useAuthStore} from "@/store/useAuthStore.ts";

const instance = axios.create({
    baseURL: SERVER_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use((config) => {
    const { accessToken } = useAuthStore.getState();

    if (config.headers && accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    console.log("< REQUEST >", config.url, config.params, config.data);
    return config;
});

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        const status = error.response?.status;

        if (status === 401 && !originalRequest._isRetry) {
            originalRequest._isRetry = true;
            await getAccessTokenByRefresh();
            return instance.request(originalRequest);
        }

        if (status === 401 && originalRequest._isRetry) {
            useAuthStore.getState().clearAuth();
            window.location.href = RouterEnum.MAIN;

            throw error.response?.data || error;
        }

        throw error?.response?.data || error.message;
    }
);

export default instance;
