import { lazy } from "solid-js";

export const routes = [
    {
        path: "/",
        component: lazy(() => import("@/pages/home/index.tsx")),
    },
    {
        path: "/gre",
        component: lazy(() => import("@/pages/gre/index.tsx"))
    },
    {
        path: "/ielts",
        component: lazy(() => import("@/pages/ielts/index.tsx"))
    }
]