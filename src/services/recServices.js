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

export function getQuestion(user_id) {
    return userApi.post(`/app6/api/v1/prediction/${user_id}/questions`).then(res => res.data);
}

export function getProgram(user_id) {
    return userApi.get(`/app6/api/v1/prediction/${user_id}/programs`).then(res => res.data);
}
