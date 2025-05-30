import { makeObservable, observable, action, runInAction } from "mobx";
import { ApiStore } from "@/shared/store/ApiStore";
import { authApi } from "../../../entities/Auth/api";
import type {
  AuthPayload,
  MeResponse,
  RegisterPayload,
} from "@/entities/Auth/model";
import { AxiosError } from "axios";
import i18n from "@/shared/i18n";

class AuthStore extends ApiStore {
  data: MeResponse | null = null;

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
      const responseData = response.data.data;
      this.data = responseData;

      runInAction(() => {
        this.handleSuccess();
      });
    } catch (error) {
      runInAction(() => {
        if (error instanceof AxiosError) {
          this.handleError(error.response?.data.message);
        } else {
          this.handleError("Unknown error");
        }
      });
    }
  };

  register = async (payload: RegisterPayload) => {
    try {
      this.startLoading();

      const response = await authApi.register(payload);
      const responseData = response.data.data;
      this.data = responseData;

      runInAction(() => {
        this.handleSuccess();
      });
    } catch (error) {
      runInAction(() => {
        if (error instanceof AxiosError) {
          this.handleError(error.response?.data.message);
        } else {
          this.handleError(i18n.t("unknownError"));
        }
      });
    }
  };

  me = async () => {
    try {
      this.startLoading();

      const response = await authApi.me();
      const responseData = response.data.data;
      this.data = responseData;

      runInAction(() => {
        this.handleSuccess();
      });
    } catch (error) {
      runInAction(() => {
        if (error instanceof AxiosError) {
          this.handleError(error.response?.data.message);
        } else {
          this.handleError(i18n.t("unknownError"));
        }
      });
    }
  };
}

export const authStore = new AuthStore();
