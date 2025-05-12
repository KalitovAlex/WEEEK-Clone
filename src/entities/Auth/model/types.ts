import type { User } from "@/entities/User";
import type { ApiResponse } from "@/shared/types/api";

export interface AuthPayload {
  email: string;
  password: string;
}

export interface RegisterPayload extends AuthPayload {
  firstName: string;
  lastName: string;
}

export interface AuthResponse extends ApiResponse {
  token: string;
  user: User;
}

export interface MeResponse extends ApiResponse {
  user: User;
  token: string;
}
