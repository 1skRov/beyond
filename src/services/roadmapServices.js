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

export function getRoadmap() {
    return userApi.get(`/app5/api/v1/roadmaps/`).then(res => res.data);
}

export function createRoadmap(payload) {
    return userApi.post(`/app5/api/v1/roadmaps/`, payload).then(res => res.data);
}

export function getRoadmapById(id) {
    return userApi.get(`/app5/api/v1/roadmaps/${id}`).then(res => res.data);
}

export function getRoadmapByUserId(user_id) {
    return userApi.get(`/app5/api/v1/roadmaps/by-user/${user_id}`).then(res => res.data);
}

export function updateRoadmap(id, payload,) {
    return userApi.put(`/app5/api/v1/roadmaps/${id}`, payload).then(res => res.data);
}

export function deleteRoadmap(id) {
    return userApi.delete(`/app5/api/v1/roadmaps/${id}`).then(res => res.data);
}

export function getNode(id) {
    return userApi.get(`/app5/api/v1/nodes/tree/${id}`).then(res => res.data);
}

export function createNode(id, payload) {
    return userApi.post(`/app5/api/v1/nodes/${id}`, payload).then(res => res.data);
}