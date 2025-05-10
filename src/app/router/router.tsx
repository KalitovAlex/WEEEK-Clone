import { App } from "@/app";
import { ROUTES } from "@/shared/model/routes";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <App />,
    children: [
      {
        path: ROUTES.HOME,
        lazy: () => import("@/pages/Home.page.tsx"),
      },
    ],
  },
]);
