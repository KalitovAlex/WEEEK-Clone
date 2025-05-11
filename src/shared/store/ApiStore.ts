import { makeAutoObservable } from "mobx";

class ApiStore {
  isLoading = false;
  isError = false;
  error: string | null = null;
  isSuccess = false;

  constructor() {
    makeAutoObservable(this);
  }

  startLoading() {
    this.isLoading = true;
    this.isError = false;
    this.error = null;
    this.isSuccess = false;
  }

  handleSuccess() {
    this.isLoading = false;
    this.isError = false;
    this.error = null;
    this.isSuccess = true;
  }

  handleError(error: string) {
    this.isLoading = false;
    this.isError = true;
    this.error = error;
    this.isSuccess = false;
  }
}

export default ApiStore;
