import axios from "axios";
const API_BASE = import.meta.env.VITE_API_URL;
const authApi = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});
export function loginUser({ username, password }) {
  return authApi
    .post("/app1/login", { username, password })
    .then((response) => response.data);
}

export function registerUser({ username, password, email, name, surname, birth_date, role }) {
  return authApi
    .post("/app1/register", { username, password, email, name, surname, birth_date, role })
    .then((response) => response.data);
}
