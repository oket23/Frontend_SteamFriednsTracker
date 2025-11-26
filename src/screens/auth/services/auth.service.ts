import instance from "@/services/api/interceptors.api.ts";
import type {IUser} from "@/types/IAuth.ts";
import {getProfileUrl} from "@/config/api.config.ts";
import type {IApiResponse} from "@/types/api-response.ts";

export const AuthService = {
    get: async () =>
        instance<IApiResponse<IUser>>({
            url: getProfileUrl(),
            method: "GET",
        })

}