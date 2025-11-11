export const protectedRoutes = [
    '/',
    '/users',
    '/feedback-components',
    '/components-demo',
    '/navigation-overlay-demo',
];

export const publicRoutes = [
    '/login',
];

export const isProtectedRoute = (path: string): boolean => {
    return protectedRoutes.some(route => path.startsWith(route));
};

export const isPublicRoute = (path: string): boolean => {
    return publicRoutes.some(route => path === route);
};



