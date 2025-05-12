import "react-router-dom";

export const ROUTES = {
  LOGIN: "/login",
  REGISTER: "/register",
  HOME: "/",
  WELCOME: "/welcome",
} as const;

export type PathParams = {
  [ROUTES.LOGIN]: {
    authId: string;
  };
  [ROUTES.REGISTER]: {
    authId: string;
  };
};

declare module "react-router-dom" {
  interface Register {
    path: keyof typeof ROUTES;
  }
}
