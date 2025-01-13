import axios from "axios";

// axios.defaults.withCredentials = true;
const api = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    withCredentials: true,  // Essential for cookies to work
    credentials: 'include',  // Also important for cross-origin requests
});

// const api = axios.create({
//     baseURL: 'http://127.0.0.1:3000/api/v1',
// });

export const login = async (email, password) => {
    try {
        const res = await api.post('/users/login', { email, password });
        if(res.data.status === "success") {
            return res.data.data.user;
        }
    } catch(err) {
        throw new Error(err?.response?.data?.message || "Login failed");
    }
}

export const logout = async () => {
    try {
        const res = await api.get('/users/logout', {
            withCredentials: true
        });

        return res.data;
    } catch(err) {
        throw new Error(err?.response?.data?.message || "Logout failed");
    }
}

export const getMe = async () => {
    try {
        const res = await api.get('/users/me', {
            withCredentials: true
        });

        if(res.data.status === "success") {
            return res.data.data.user;
        }
    } catch(err) {
        throw new Error(err?.response?.data?.message || "Failed to get user data");
    }
}