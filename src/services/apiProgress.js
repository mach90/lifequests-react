import axios from "axios";
import toast from "react-hot-toast";

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