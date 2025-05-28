import axios from 'axios';
import { getToken } from './tokenService';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || '/api',
    headers: { 'Content-Type': 'application/json' }
});

api.interceptors.request.use(cfg => {
    const token = getToken();
    if (token) cfg.headers.Authorization = `Bearer ${token}`;
    return cfg;
});

export function login(credentials) {
    return api.post('/login', credentials);        // { data: { token } }
}

export function fetchUser(id) {
    return api.get(`/v1/user/${id}`);              // { data: { …user } }
}
