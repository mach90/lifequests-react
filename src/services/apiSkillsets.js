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