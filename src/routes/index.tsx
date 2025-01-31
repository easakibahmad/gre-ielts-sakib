import { lazy } from "solid-js";

export const routes = [
    {
        path: "/",
        component: lazy(() => import("@/pages/home/index.tsx")),
    },
    {
        path: "/registration",
        component: lazy(() => import("@/pages/registration/index.tsx")),
    }
]