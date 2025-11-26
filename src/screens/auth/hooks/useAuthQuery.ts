import {useQuery} from "@tanstack/react-query";
import {AuthService} from "@/screens/auth/services/auth.service.ts";
import type {IUser} from "@/types/IAuth.ts";
import type {IApiResponse} from "@/types/api-response.ts";

export const useAuthQuery = (enabled: boolean) => {
    return useQuery({
        queryKey:['user-profile'],
        enabled,
        queryFn: async () => {
            const res = await AuthService.get();
            const body: IApiResponse<IUser> = res.data;

            if (!body.success) {
                throw new Error(body.error || body.message || "Failed to load API config",);
            }

            return body.data;
        }
    })
}