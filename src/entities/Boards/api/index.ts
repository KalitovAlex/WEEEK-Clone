import { api } from "@/shared/api";
import type { BoardResponse } from "../model";

export const boardsApi = {
  getBoards: async () => {
    const response = await api.get<BoardResponse>("boards");
    return response.data.data;
  },
};
