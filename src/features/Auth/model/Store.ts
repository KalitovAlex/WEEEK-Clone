import { makeAutoObservable } from "mobx";
import { fromPromise } from "mobx-utils";
import { authApi } from "../api";
import type { AuthPayload, RegisterPayload } from "@/entities/Auth/model";
import type { IPromiseBasedObservable } from "mobx-utils";
import type { User } from "@/entities/User";

class AuthStore {
  data: IPromiseBasedObservable<User> | null = null;
  constructor() {
    makeAutoObservable(this);
  }

  auth = async (payload: AuthPayload) => {
    const response = authApi.login(payload);
    this.data = fromPromise(response.then((res) => res.data as User));
  };

  register = async (payload: RegisterPayload) => {
    const response = authApi.register(payload);
    this.data = fromPromise(response.then((res) => res.data as User));
  };
}

export const authStore = new AuthStore();
