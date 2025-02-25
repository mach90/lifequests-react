import { api } from "./api";

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
GET MY SKILLSET
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export const getMySkillset = async () => {
    try {
        const res = await api.get("skillsets/my-skillset");

        if(res.data.status === "success") {
            return {
                skillset: res.data.data.data,
            }
        }
        throw new Error(`Request failed with status: ${res.data.status}`);
    } catch(err) {
        throw new Error(err?.response?.data?.message || "Failed to get user skillset");
    }
}

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
CREATE MY SKILLSET
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export const createMySkillset = async () => {
    try {
        const res = await api.post("skillsets/my-skillset");
        
        if(res.data.status === "success") {
            return res.data;
        }

        throw new Error(`Request failed with status: ${res.data.status}`);
    } catch(err) {
        console.error("Create my skillset error:", err);
        throw new Error(err?.response?.data?.message || "Failed to create user skillset");
    }
}

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
UPDATE MY SKILLSET
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export const updateMySkillset = async (skills) => {
    try {
        const res = await api.patch("skillsets/my-skillset", skills);

        if(res.data.status === "success") {
            return res.data.data;
        }
    } catch(err) {
        throw new Error(err?.response?.data?.message || "Skillset update failed");
    }
}