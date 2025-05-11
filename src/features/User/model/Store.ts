import { makeAutoObservable, observable } from "mobx";
import { userApi } from "../api";
import { fromPromise, type IPromiseBasedObservable } from "mobx-utils";
import type { User } from "@/entities/User";

export class UserStore {
  @observable data: IPromiseBasedObservable<User> | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async getUser() {
    const response = userApi.getUser();
    this.data = fromPromise(response);
  }
}

export const userStore = new UserStore();
