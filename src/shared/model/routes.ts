import "react-router-dom";

export const ROUTES = {
  AUTH: "/auth",
  REGISTER: "/register",
  HOME: "/",
} as const;

export type PathParams = {
  [ROUTES.AUTH]: {
    authId: string;
  };
};

declare module "react-router-dom" {
  interface Register {
    path: keyof typeof ROUTES;
  }
}
