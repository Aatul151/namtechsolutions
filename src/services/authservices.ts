import api from "./api";

export const fetchGuestUserToken = async () => {
  try {
    const res: any = await api.get(`/auth/public/session`);
    if (res?.success) {
      localStorage.setItem("token", res?.data?.token);
      return res?.data?.token;
    }
    localStorage.removeItem("token");
    return null;
  } catch (err) {
    return null;
  }
};
