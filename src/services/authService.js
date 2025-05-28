// src/services/authService.ts
import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: { 'Content-Type': 'application/json' }
});

// автоматически пробрасываем JWT
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwt');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export async function login({ username, password }) {
  const { data } = await API.post('/app1/login', { username, password });
  localStorage.setItem('jwt', data.token);       // ожидаем { token: '...' }
  return data;
}

export async function register(payload) {
  return API.post('/app1/register', payload);
}

export function logout() {
  localStorage.removeItem('jwt');
}

export function isLoggedIn() {
  return Boolean(localStorage.getItem('jwt'));
}
