import { makeObservable, observable, action, runInAction } from "mobx";
import { fromPromise } from "mobx-utils";
import { ApiStore } from "@/shared/store/ApiStore";
import { authApi } from "../../../entities/Auth/api";
import type { AuthPayload, RegisterPayload } from "@/entities/Auth/model";
import type { IPromiseBasedObservable } from "mobx-utils";
import type { User } from "@/entities/User";

class AuthStore extends ApiStore {
  data: IPromiseBasedObservable<User> | null = null;

  constructor() {
    super();
    makeObservable(this, {
      data: observable,
      auth: action,
      register: action,
    });
  }

  auth = async (payload: AuthPayload) => {
    try {
      this.startLoading();

      const response = await authApi.login(payload);
      const user = response.data;
      this.data = user;
      runInAction(() => {
        this.handleSuccess();
      });
    } catch (error) {
      runInAction(() => {
        if (error instanceof Error) {
          this.handleError(error.message);
        } else {
          this.handleError("Unknown error");
        }
      });
    }
  };

  register = async (payload: RegisterPayload) => {
    const response = authApi.register(payload);
    this.data = fromPromise(response.then((res) => res.data as User));
  };
}

export const authStore = new AuthStore();
