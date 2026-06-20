import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "@router/layouts/RootLayout";
import { Home } from "@components/pages/Home";
import { About } from "@components/pages/About";

export const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: Home,
});
export const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/about",
    component: About,
});

const rootRoutes = [indexRoute, aboutRoute]
export const routeTree = rootRoute.addChildren([...rootRoutes]);