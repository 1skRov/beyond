import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL;

const userApi = axios.create({
  baseURL: API_BASE,
});

userApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

userApi.interceptors.response.use(
  res => res,
  err => {
    if (err.response?.status === 401) {
      localStorage.removeItem("jwt");
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);

// Получить профиль пользователя по ID
export function getUserById(id) {
  return userApi.get(`/app2/api/v1/user/${id}`).then(res => res.data);
}

// Обновить данные пользователя
export function updateUser(id, payload, isMultipart = false) {
  const headers = isMultipart
    ? { 'Content-Type': 'multipart/form-data' }
    : { 'Content-Type': 'application/json' };

  return userApi.put(`/app2/api/v1/user/${id}`, payload, { headers }).then(res => res.data);
}

// Удалить пользователя
export function deleteUser(id) {
  return userApi.delete(`/app2/api/v1/user/${id}`).then(res => res.data);
}

export function getprof() {
  return userApi.get(`app2/api/v1/profile-subjects`).then(res => res.data);
}
