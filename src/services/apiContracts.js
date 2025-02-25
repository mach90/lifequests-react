import { api } from "./api";

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
GET ALL MY CONTRACTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export const getMyContracts = async (params = {}) => {
    try {
        if (params.sortBy) {
            const [field, direction] = params.sortBy.split("-");
            params.sort = direction === "desc" ? `-${field}` : field;
            delete params.sortBy;
        }

        const res = await api.get("contracts/my-contracts", {
            params: params
        });

        if(res.data.status === "success") {
            return {
                contracts: res.data.data.data,
                totalCount: res.data.totalCount
            }
        }
        throw new Error(`Request failed with status: ${res.data.status}`);
    } catch(err) {
        throw new Error(err?.response?.data?.message || "Failed to get user contracts");
    }
}

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
GET MY CONTRACT (CONTRACT ID)
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export const getMyContract = async (contractId) => {
    try {
        const res = await api.get(`contracts/my-contracts/${contractId}`);

        if(res.data.status === "success") {
            return res.data.data.data;
        }

        throw new Error(`Request failed with status: ${res.data.status}`);
    } catch(err) {
        throw new Error(err?.response?.data?.message || "Failed to get user contract");
    }
}

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
CREATE MY CONTRACT (QUEST ID)
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export const createMyContract = async (questId) => {
    try {
        const res = await api.post("contracts/my-contracts", { 
            quest: questId
        });
        
        if(res.data.status === "success") {
            return res.data;
        }

        throw new Error(`Request failed with status: ${res.data.status}`);
    } catch(err) {
        throw new Error(err?.response?.data?.message || "Failed to create user contract");
    }
}

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
UPDATE MY CONTRACT (CONTRACT ID)
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export const updateMyContract = async (contractId, status, finishedAt) => {
    try {
        const res = await api.patch(`contracts/my-contracts/${contractId}`, {
            status,
            finishedAt
        });

        if(res.data.status === "success") {
            return res.data.data;
        }
    } catch(err) {
        throw new Error(err?.response?.data?.message || "Contract update failed");
    }
}