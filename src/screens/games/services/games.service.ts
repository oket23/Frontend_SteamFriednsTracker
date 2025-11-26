import instance from "@/services/api/interceptors.api.ts";
import type {IApiResponse} from "@/types/api-response.ts";
import {getGamesUrl} from "@/config/api.config.ts";
import type {ISearchGameResult, ISteamStoreSearchResponse} from "@/types/ISteamSearch.ts";

export const GamesService = {
    get: async ({name, lang, region}: ISearchGameResult) =>
        instance<IApiResponse<ISteamStoreSearchResponse>>({
            url: getGamesUrl(name, lang, region),
            method: "GET",
        })

}