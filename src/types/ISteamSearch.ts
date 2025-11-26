export type ISteamPrice = {
    currency: string;
    initial: number;
    final: number;
};

export type ISteamStoreSearchItem = {
    id: string;
    name: string;
    tiny_image: string;
    price?: ISteamPrice | null;
};

export type ISearchGameResult = {
    name: string;
    lang: string;
    region: string;
}

export type ISteamStoreSearchResponse = {
    total: number;
    items: ISteamStoreSearchItem[];
};

