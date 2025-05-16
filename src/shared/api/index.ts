import axios from "axios";
import { getCookie } from "../utils/cookie";
import { TOKEN } from "../constants/api";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  const token = getCookie(TOKEN);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
