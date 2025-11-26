import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import type { IApiResponse } from "@/types/api-response.ts";
import type { SteamGameDetails } from "@/types/IGameDetails.ts";
import { GameService } from "@/screens/game-details/services/game.service.ts";

export const useGameQuery = (id: string, lang: string) => {
    return useQuery<SteamGameDetails, AxiosError>({
        queryKey: ["game", id, lang],
        queryFn: async () => {
            const res = await GameService.get(id, lang);
            const body: IApiResponse<SteamGameDetails> = res.data;

            if (!body.success) {
                throw new Error(
                    body.error || body.message || "Failed to load game details from API",
                );
            }

            return body.data;
        },
    });
};
