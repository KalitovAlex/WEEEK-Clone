import { App } from "@/app";
import { ROUTES } from "@/shared/model/routes";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <App />,
    children: [
      {
        path: ROUTES.HOME,
        element: <MainLayout />,
        children: [
          {
            path: ROUTES.HOME,
            lazy: () => import("@/pages/HomePage/Home.page"),
          },
        ],
      },
      {
        path: ROUTES.LOGIN,
        lazy: () => import("@/pages/AuthPage/Auth.page"),
      },
      {
        path: ROUTES.REGISTER,
        lazy: () => import("@/pages/RegisterPage/Register.page"),
      },
      {
        path: ROUTES.WELCOME,
        lazy: () => import("@/pages/Onboarding/Welcome.page"),
      },
      {
        path: ROUTES.SETUP,
        lazy: () => import("@/pages/Onboarding/Setup.page"),
      },
      {
        path: ROUTES.WORKSPACE,
        lazy: () => import("@/pages/WorkSpace/Workspace.page"),
      },
    ],
  },
]);
