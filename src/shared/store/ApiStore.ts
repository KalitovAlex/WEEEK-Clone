import { makeObservable, observable, action } from "mobx";

export class ApiStore<T> {
  isLoading = false;
  isError = false;
  error: string | null = null;
  isSuccess = false;
  response: T | null = null;

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      isError: observable,
      error: observable,
      isSuccess: observable,
      startLoading: action,
      handleSuccess: action,
      handleError: action,
    });
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
