import { observable } from "mobx";

class FolderStore {
  @observable
  folders = [];
}

export const folderStore = new FolderStore();
