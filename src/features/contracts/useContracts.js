import { useQuery } from "@tanstack/react-query";
import { getMyContracts } from "../../services/apiContracts";

export function useContracts() {
    const {isLoading, data: contracts, error} = useQuery({
        queryKey: ["contracts"],
        queryFn: getMyContracts,
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