import type { AuthPayload, RegisterPayload } from "@/entities/Auth/model/types";
import { api } from "@/shared/api";

export const authApi = {
  login: (payload: AuthPayload) => {
    return api.post("auth/login", payload);
  },
  register: (payload: RegisterPayload) => {
    return api.post("auth/register", payload);
  },
};
