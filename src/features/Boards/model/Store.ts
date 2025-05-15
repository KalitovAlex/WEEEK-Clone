import type { BoardResponse } from "@/entities/Boards/model";
import { observable } from "mobx";

class BoardStore {
  @observable
  boards: BoardResponse[] = [];
}

export const boardStore = new BoardStore();
