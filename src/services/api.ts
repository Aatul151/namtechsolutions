import axios from "axios";
import { APIENDPOINT } from "./apihelper";
import { fetchGuestUserToken } from "./authservices";

const api = axios.create({
  baseURL: `${APIENDPOINT}/api`,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

const PublicUrls = ["/auth/public/session"];

api.interceptors.request.use(
  async (config: any) => {
    let token = localStorage.getItem("token");
    if (!token && !PublicUrls.includes(config?.url)) {
      token = await fetchGuestUserToken();
    }
    config.headers.Authorization = `Bearer ${token}`;
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
