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

export function getUniversityList() {
  return userApi.get(`/app3/api/v1/universities`).then(res => res.data);
}

export function createUniversity(payload) {
  return userApi.post(`/app3/api/v1/universities`, payload).then(res => res.data);
}

export function getUniversityById(id) {
  return userApi.get(`/app3/api/v1/universities/${id}`).then(res => res.data);
}

export function updateUniversity(id, payload,) {
  return userApi.put(`/app3/api/v1/universities/${id}`, payload).then(res => res.data);
}

export function deleteUniversity(id) {
  return userApi.delete(`/app2/api/v1/universities/${id}`).then(res => res.data);
}