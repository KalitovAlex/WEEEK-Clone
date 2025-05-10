import { type User } from "@entities/User";
import { makeAutoObservable } from "mobx";

export class UserStore {
  user: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: User) {
    this.user = user;
  }
}

export const userStore = new UserStore();
