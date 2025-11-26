export const RouterEnum = {
    MAIN: '/',
    AUTH_CALLBACK: "/auth/callback",
    PROFILE: '/profile',
    GAMES: "/games",
    GAME_DETAILS: "/games/:id",
}

export type RouterEnum = typeof RouterEnum[keyof typeof RouterEnum]