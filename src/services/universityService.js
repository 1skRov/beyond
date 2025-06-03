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
  return userApi.delete(`/app3/api/v1/universities/${id}`).then(res => res.data);
}
//faculty
export function getFacultyList() {
  return userApi.get(`/app3/api/v1/faculties`).then(res => res.data);
}

export function createFaculty(payload) {
  return userApi.post(`/app3/api/v1/faculties`, payload).then(res => res.data);
}

export function getFacultyById(id) {
  return userApi.get(`/app3/api/v1/faculties/${id}`).then(res => res.data);
}

export function updateFaculty(id, payload,) {
  return userApi.put(`/app3/api/v1/faculties/${id}`, payload).then(res => res.data);
}

export function deleteFaculty(id) {
  return userApi.delete(`/app3/api/v1/faculties/${id}`).then(res => res.data);
}

//dormitories
export function getdormitoriesListById(id) {
  return userApi.get(`/app3/universities/${id}/dormitories`).then(res => res.data);
}

export function createdormitories(payload) {
  return userApi.post(`/app3/api/v1/dormitories`, payload).then(res => res.data);
}

export function getdormitoriesById(id) {
  return userApi.get(`/app3/api/v1/dormitories/${id}`).then(res => res.data);
}

export function updatedormitories(id, payload,) {
  return userApi.put(`/app3/api/v1/dormitories/${id}`, payload).then(res => res.data);
}

export function deletedormitories(id) {
  return userApi.delete(`/app3/api/v1/dormitories/${id}`).then(res => res.data);
}

//education-program-groups
export function getEducation() {
  return userApi.get(`/app3/api/v1/education-program-groups`).then(res => res.data);
}

export function createEducation(payload) {
  return userApi.post(`/app3/api/v1/education-program-groups`, payload).then(res => res.data);
}

export function getEducationById(id) {
  return userApi.get(`/app3/api/v1/education-program-groups/${id}`).then(res => res.data);
}

export function updateEducation(id, payload,) {
  return userApi.put(`/app3/api/v1/education-program-groups/${id}`, payload).then(res => res.data);
}

export function deleteEducation(id) {
  return userApi.delete(`/app3/api/v1/education-program-groups/${id}`).then(res => res.data);
}

//departments

export function getDepartmentsList() {
  return userApi.get(`/app3/api/v1/departments`).then(res => res.data);
}
export function createDepartments(payload) {
  return userApi.post(`/app3/api/v1/departments`, payload).then(res => res.data);
}

export function getDepartmentsById(id) {
  return userApi.get(`/app3/api/v1/departments/${id}`).then(res => res.data);
}

export function updateDepartments(id, payload,) {
  return userApi.put(`/app3/api/v1/departments/${id}`, payload).then(res => res.data);
}

export function deleteDepartments(id) {
  return userApi.delete(`/app3/api/v1/departments/${id}`).then(res => res.data);
}