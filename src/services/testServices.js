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

export function getSubjectsList() {
  return userApi.get(`/app4/api/v1/subjects/`).then(res => res.data);
}

export function createSubject(payload) {
  return userApi.post(`/app4/api/v1/subjects/`, payload).then(res => res.data);
}

export function getSubjectById(id) {
  return userApi.get(`/app4/api/v1/subjects/${id}`).then(res => res.data);
}

export function updateSubject(id, payload,) {
  return userApi.put(`/app4/api/v1/subjects/${id}`, payload).then(res => res.data);
}

export function deleteSubject(id) {
  return userApi.delete(`/app4/api/v1/subjects/${id}`).then(res => res.data);
}


export function createTopic(payload) {
  return userApi.post(`/app4/api/v1/topics/`, payload).then(res => res.data);
}

export function getTopicsBySubjectId(subjectId) {
  return userApi.get(`/app4/api/v1/topics/by-subject/${subjectId}`).then(res => res.data);
}

export function deleteTopicById(subjectId) {
  return userApi.delete(`/app4/api/v1/topics/${subjectId}`).then(res => res.data);
}