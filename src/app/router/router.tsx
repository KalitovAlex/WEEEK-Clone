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
        lazy: () => import("@/pages/HomePage/Home.page"),
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
    ],
  },
]);
