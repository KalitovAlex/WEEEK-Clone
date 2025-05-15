import type { User } from "@/entities/User";
import type { ApiResponse } from "../../../shared/types/api";

export interface BoardResponse extends ApiResponse {
  data: {
    _id: string;
    title: string;
    description: string;
    background: string;
    owner: {
      _id: string;
      email: string;
      firstName: string;
      lastName: string;
    };
    members: Array<{
      user: User;
      role: string;
      _id: string;
    }>;
    // lists: any[];
    isPublic: boolean;
    activity: Array<{
      action: string;
      user: string;
      meta: {
        title: string;
      };
      _id: string;
      date: string;
    }>;
    folder: null;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}
