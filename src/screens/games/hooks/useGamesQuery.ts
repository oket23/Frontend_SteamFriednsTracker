import {keepPreviousData, useQuery} from "@tanstack/react-query";
import type { ISearchGameResult, ISteamStoreSearchResponse } from "@/types/ISteamSearch.ts";
import { GamesService } from "@/screens/games/services/games.service.ts";
import type { IApiResponse } from "@/types/api-response.ts";

export const useGamesQuery = ({ name, lang, region }: ISearchGameResult) => {
    const trimmedName = name.trim();

    return useQuery<ISteamStoreSearchResponse>({
        queryKey: ["games.search", trimmedName, lang, region],
        enabled: trimmedName.length > 0,
        placeholderData: keepPreviousData,
        queryFn: async () => {
            const res = await GamesService.get({ name: trimmedName, lang, region });
            const body: IApiResponse<ISteamStoreSearchResponse> = res.data;

            if (!body.success) {
                throw new Error(
                    body.error || body.message || "Failed to load games from API"
                );
            }

            return body.data;
        },
    });
};
