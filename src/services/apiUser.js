import axios from "axios";

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'production'
      ? 'https://lifequests.onrender.com/api/v1'
      : 'http://localhost:3000/api/v1',
    withCredentials: true,  // Essential for cookies to work
    credentials: 'include',  // Also important for cross-origin requests
});

export const getMe = async () => {
    try {
        const res = await api.get('/users/me');
        
        if(res.data.status === "success") {
            // console.log("GETMEAPI", res.data.data);
            return res.data.data;
        }
        throw new Error(`Request failed with status: ${res.data.status}`);
    } catch(err) {
        console.error('GetMe error:', err);
        throw new Error(err?.response?.data?.message || "Failed to get user data");
    }
}

export const updateMe = async (userData) => {
    try {
        const res = await api.patch('/users/updateMe', userData);

        if(res.data.status === "success") {
            return res.data.data.user;
        }
    } catch(err) {
        throw new Error(err?.response?.data?.message || "Failed to update user data");
    }
}

export const deleteMe = async () => {
    try {
        const res = await api.delete('/users/deleteMe');

        if(res.data.status === "success") {
            return res.data.data;
        }
    } catch(err) {
        throw new Error(err?.response?.data?.message || "Failed to delete user");
    }
}

export const updateMyCharacter = async (characterData) => {
    try {
        const res = await api.patch('/users/updateMyCharacter', characterData);

        if(res.data.status === "success") {
            console.log(res.data)
            return res.data;
        }
    } catch(err) {
        throw new Error(err?.response?.data?.message || "Failed to update character data");
    }
}