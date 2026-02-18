import axios from "axios";
import { APIENDPOINT } from "./apihelper";

const api = axios.create({
  baseURL: `${APIENDPOINT}/api`,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config:any) => {
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const formattedError = {
      message: error?.response?.data?.message || error?.message || "Something went wrong",
      status: error?.response?.status || null,
      originalError: error,
    };
    return Promise.reject(formattedError);
  }
);

export default api;
