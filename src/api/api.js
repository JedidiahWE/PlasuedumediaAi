import axios from "axios";

const api = axios.create({
  baseURL: "https://plasuedumediaai.onrender.com",
});

api.interceptors.request.use((config) => {

  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;

});

export default api;