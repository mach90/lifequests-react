import axios from "axios";

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'production'
      ? 'https://lifequests.onrender.com/api/v1'
      : 'http://localhost:3000/api/v1',
    withCredentials: true,  // Essential for cookies to work
    credentials: 'include',  // Also important for cross-origin requests
});

export const getAllMyProgress = async (params = {}) => {
    try {
        if (params.sortBy) {
            const [field, direction] = params.sortBy.split('-');
            params.sort = direction === 'desc' ? `-${field}` : field;
            delete params.sortBy;
        }

        const res = await api.get('progress/my-progress', {
            params: params
        });

        if(res.data.status === "success") {
            return {
                progress: res.data.data.data,
                totalCount: res.data.totalCount
            }
        }
        throw new Error(`Request failed with status: ${res.data.status}`);
    } catch(err) {
        throw new Error(err?.response?.data?.message || "Failed to get user progress");
    }
}

export const getGuildProgress = async (guildId) => {
    try {
        const res = await api.get(`progress/guild-related-progress/${guildId}`);

        if(res.data.status === "success") {
            return res.data.data.progress;
        }

        throw new Error(`Request failed with status: ${res.data.status}`);
    } catch(err) {
        console.error('Get my contract error:', err);
        throw new Error(err?.response?.data?.message || "Failed to get guild progress");
    }
}

export const updateOrCreateContractRelatedProgress = async (contractId, progressData) => {
    if (!contractId) throw new Error("Contract ID is required");
    if (!progressData?.experience) throw new Error("Experience value is required");

    try {
        const res = await api.patch(
            `progress/contract-related-progress/${contractId}`,
            progressData
        );

        if (res.data.status === "success") {
            return res.data.data.data; // Return the actual progress data array
        }
        
        throw new Error(`Request failed with status: ${res.data.status}`);
    } catch (err) {
        if (axios.isAxiosError(err)) {
            throw new Error(
                err.response?.data?.message || 
                err.message || 
                "Contract related guild progress update failed"
            );
        }
        throw err;
    }
};