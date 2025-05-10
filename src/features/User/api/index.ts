export const userApi = {
  getUser: async () => {
    const response = await fetch("/api/user");
    return response.json();
  },
};
