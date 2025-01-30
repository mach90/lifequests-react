import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'production'
      ? 'https://lifequests.onrender.com/api/v1'
      : 'http://localhost:3000/api/v1',
    withCredentials: true,  // Essential for cookies to work
    credentials: 'include',  // Also important for cross-origin requests
});

export const getMyContracts = async () => {
    try {
        const res = await api.get('contracts/my-contracts');

        if(res.data.status === "success") {
            return res.data.data.data;
        }
        throw new Error(`Request failed with status: ${res.data.status}`);
    } catch(err) {
        // console.error('Get my contracts error:', err);
        throw new Error(err?.response?.data?.message || "Failed to get user contracts");
    }
}

export const getMyContract = async (contractId) => {
    try {
        const res = await api.get(`contracts/my-contracts/${contractId}`);

        if(res.data.status === "success") {
            // console.log("CONTRACT DATA", res.data.data.data);
            return res.data.data.data;
        }

        throw new Error(`Request failed with status: ${res.data.status}`);
    } catch(err) {
        console.error('Get my contract error:', err);
        throw new Error(err?.response?.data?.message || "Failed to get user contract");
    }
}

export const createMyContract = async (questId) => {
    try {
        const res = await api.post('contracts/my-contracts', { 
            quest: questId
        });
        
        if(res.data.status === "success") {
            toast.success("Contract successfully created.");
            return res.data;
        }

        throw new Error(`Request failed with status: ${res.data.status}`);
    } catch(err) {
        console.error('Create my contract error:', err);
        throw new Error(err?.response?.data?.message || "Failed to create user contract");
    }
}

export const updateMyContract = async (contractId, status) => {
    try {
        const res = await api.patch(`contracts/my-contracts/${contractId}`, {
            status
        });

        if(res.data.status === "success") {
            console.log("API CONTRACT UPDATED", res.data.data);
            return res.data.data;
        }
    } catch(err) {
        throw new Error(err?.response?.data?.message || "Contract update failed");
    }
}