export interface AuthPayload {
  email: string;
  password: string;
}

export interface RegisterPayload extends AuthPayload {
  firstName: string;
  lastName: string;
}
