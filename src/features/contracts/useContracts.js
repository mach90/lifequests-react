import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMyContracts } from "../../services/apiContracts";

export function useContracts() {
    const [searchParams] = useSearchParams();
    
    // Get filter and sort parameters
    const statusFilter = searchParams.get('status');
    const sortBy = searchParams.get('sortBy') || 'status-asc';
    
    // Build params object
    const params = {};
    if (statusFilter && statusFilter !== 'all') {
        params.status = statusFilter;
    }
    if (sortBy) {
        params.sortBy = sortBy;
    }

    const {isLoading, data: contracts, error} = useQuery({
        queryKey: ["contracts", params],
        queryFn: () => getMyContracts(params),
        staleTime: 0,
        retry: false,
        refetchOnMount: true,
        refetchOnReconnect: true,
        refetchOnWindowFocus: false,
        onError: (error) => {
            if (error?.response?.status === 401) return null;
            console.error("Query error:", error);
        }
    });

    return {
        isLoading,
        contracts,
        error
    };
}