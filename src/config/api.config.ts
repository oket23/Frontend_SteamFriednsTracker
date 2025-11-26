export const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const AUTH_PREFIX = "/auth-api/steam";
const GAMES_PREFIX = "/games-api/steam";

// auth
export const getLoginUrl = () => `${AUTH_PREFIX}/login`;
export const postAccessTokenUrl = () => `${AUTH_PREFIX}/refresh`;
export const getProfileUrl = () => `${AUTH_PREFIX}/me`;

//friends

// games
export const getGameDetailsUrl = (id: string,lang: string) => `${GAMES_PREFIX}/${id}?lang=${lang}`;
export const getGamesUrl = (gameName: string, lang: string, region: string) =>
    `${GAMES_PREFIX}/search?term=${gameName}&lang=${lang}&cc=${region}`;

