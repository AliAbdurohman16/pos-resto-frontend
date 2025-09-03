import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
})

// API Endpoints
export const login = (data) => api.post("/api/users/login", data);
export const register = (data) => api.post("/api/users/register", data);
export const getUserData = () => api.get("/api/users");
export const logout = () => api.post("/api/users/logout");

export const addTable = (data) => api.post("/api/table/", data);
export const getTables = () => api.get("/api/table");