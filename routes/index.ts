export const ROUTES = {
    HOME: '/',
    ABOUT: '/about',
    EFFECTOR: '/effector',
    POSTS: '/posts',
} as const;

const routesList = Object.values(ROUTES);

export type TDeepRoutes = `/posts/${number}`;
export type TRoutes = typeof routesList[number];
