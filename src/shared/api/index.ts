import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: () => ({}),
});
