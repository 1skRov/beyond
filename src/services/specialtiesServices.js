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

export function createSpecialtiesQ(id, payload) {
    return userApi.post(`/app3/api/v1/specialties/${id}/subjects`, payload).then(res => res.data);
}

export function getSpecialtiesQById(id) {
    return userApi.get(`/app3/api/v1/specialties/${id}/subjects`).then(res => res.data);
}

export function deleteSpecialtiesQ(id, subject_id) {
    return userApi.delete(`/app3/api/v1/specialties/${id}/subjects/${subject_id}`).then(res => res.data);
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