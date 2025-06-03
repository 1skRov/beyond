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

export function getSpecialtiesList() {
    return userApi.get(`/app3/api/v1/specialties`).then(res => res.data);
}

export function createSpecialties(payload) {
    return userApi.post(`/app3/api/v1/specialties`, payload).then(res => res.data);
}

export function getSpecialtiesById(id) {
    return userApi.get(`/app3/api/v1/specialties/${id}`).then(res => res.data);
}

export function updateSpecialties(id, payload,) {
    return userApi.put(`/app3/api/v1/specialties/${id}`, payload).then(res => res.data);
}

export function deleteSpecialties(id) {
    return userApi.delete(`/app3/api/v1/specialties/${id}`).then(res => res.data);
}