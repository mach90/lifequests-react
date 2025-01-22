import axios from "axios";

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'production'
      ? 'https://lifequests.onrender.com/api/v1'
      : 'http://localhost:3000/api/v1',
    withCredentials: true,  // Essential for cookies to work
    credentials: 'include',  // Also important for cross-origin requests
});

export const signup = async (name, email, password, passwordConfirm) => {
    try {
        const res = await api.post('/users/signup', { name, email, password, passwordConfirm });

        if(res.data.status === "success") {
            console.log("Signup success:", res.data);
        }

    } catch(err) {
        throw new Error(err?.response?.data?.message || "Signup failed");
    }
}

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
        const res = await api.get('/users/logout');

        return res.data;
    } catch(err) {
        throw new Error(err?.response?.data?.message || "Logout failed");
    }
}

export const updatePassword = async ({ passwordCurrent, password, passwordConfirm }) => {
    try {
        const res = await api.patch('/users/updateMyPassword', {
            passwordCurrent,
            password,
            passwordConfirm
        });

        if(res.data.status === "success") {
            return res.data.data.user;
        }
    } catch(err) {
        throw new Error(err?.response?.data?.message || "Password update failed");
    }
}