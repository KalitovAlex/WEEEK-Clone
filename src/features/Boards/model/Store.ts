import { boardsApi } from "@/entities/Boards/api";
import type { Board } from "@/entities/Boards/model";
import { ApiStore } from "@/shared/store/ApiStore";
import { AxiosError } from "axios";
import { action, makeObservable, observable, runInAction } from "mobx";

class BoardStore extends ApiStore {
  boards: Board[] = [];

  constructor() {
    super();
    makeObservable(this, {
      boards: observable,
      getBoards: action,
    });
  }

  getBoards = async () => {
    try {
      this.startLoading();
      const response = await boardsApi.getBoards();
      this.boards = response;
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
}

export const boardStore = new BoardStore();
