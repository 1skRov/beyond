import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL;

const userApi = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

userApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Получить профиль пользователя по ID
export function getUserById(id) {
  return userApi.get(`/app2/api/v1/user/${id}`).then(res => res.data);
}

// Обновить данные пользователя
export function updateUser(id, payload) {
  return userApi.put(`/app2/api/v1/user/${id}`, payload).then(res => res.data);
}

// Удалить пользователя
export function deleteUser(id) {
  return userApi.delete(`/app2/api/v1/user/${id}`).then(res => res.data);
}

export function getprof() {
  return userApi.get(`app2/api/v1/profile-subjects`).then(res => res.data);
}
