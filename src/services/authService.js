import axios from "axios";

const API_URL = "/api";

export const login = async (username, password) => {
    const response = await axios.post($`{API_URL}/app1/login`, {
        username,
        password,
    });
    localStorage.setItem("token", response.data.token);
    return response.data;
};

export const register = async (userData) => {
    return await axios.post($`{API_URL}/app1/register`, userData);
};

export const logout = () => {
    localStorage.removeItem("token");
};

export const getUserById = async (id) => {
    const token = localStorage.getItem("token");
    const response = await axios.get($`{API_URL}/app2/api/v1/user/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};