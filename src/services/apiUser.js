import { api } from './api';

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
GET ME
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export const getMe = async () => {
    try {
        const res = await api.get('/users/me');
        
        if(res.data.status === "success") {
            return res.data.data;
        }
        throw new Error(`Request failed with status: ${res.data.status}`);
    } catch(err) {
        throw new Error(err?.response?.data?.message || "Failed to get user data");
    }
}

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
UPDATE ME
//////////////////////////////////////////////////////////////////////////////////////////////////// */
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

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
DELETE ME, set account to inactive
//////////////////////////////////////////////////////////////////////////////////////////////////// */
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

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
UPDATE MY CHARACTER
Attributes, xp and money
//////////////////////////////////////////////////////////////////////////////////////////////////// */
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