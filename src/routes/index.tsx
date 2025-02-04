import Main from "@/layouts/main/index.tsx";
import { lazy } from "solid-js";

export const routes = [
  {
    path: "/",
    component: lazy(() =>
      import("@/pages/home/index.tsx").then((module) => ({
        default: () => <Main>{module.default()}</Main>,
      }))
    ),
  },
  {
    path: "/signup",
    component: lazy(() =>
      import("@/pages/registration/index.tsx").then((module) => ({
        default: () => <Main>{module.default()}</Main>,
      }))
    ),
  },
];