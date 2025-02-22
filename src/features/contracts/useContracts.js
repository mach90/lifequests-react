import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getMyContracts } from "../../services/apiContracts";
import toast from "react-hot-toast";

import { DEFAULT_PAGE_SIZE } from "../../utils/constants"; //10

export function useContracts(overrideParams = {}) {
    const [searchParams] = useSearchParams();
    
    // Get filter and sort parameters
    const statusFilter = overrideParams.status ?? searchParams.get('status');
    const sortBy = overrideParams.sortBy ?? (searchParams.get('sortBy') || 'status-asc');
    const page = overrideParams.page ?? (searchParams.get('page') || 1);
    const limit = overrideParams.limit ?? (searchParams.get('limit') || DEFAULT_PAGE_SIZE);
    
    // Build params object
    const params = {};
    if (statusFilter && statusFilter !== 'all') {
        params.status = statusFilter;
    }
    if (sortBy) {
        params.sortBy = sortBy;
    }
    if (page) {
        params.page = page;
    }
    if (limit) {
        params.limit = limit;
    }

    const {isPending, data, error} = useQuery({
        queryKey: ["contracts", params],
        queryFn: () => getMyContracts(params),
        staleTime: 0,
        retry: false,
        refetchOnMount: true,
        refetchOnReconnect: true,
        refetchOnWindowFocus: false,
        onError: (error) => {
            toast.error("Couldn't get contracts.");
            if (error?.response?.status === 401) return null;
        }
    });

    const contracts = data?.contracts || [];
    const totalCount = data?.totalCount || 0;

    return {
        isPending,
        contracts,
        totalCount,
        error
    };
}