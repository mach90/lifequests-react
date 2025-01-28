import { useQuery } from "@tanstack/react-query";
import { getMyContract } from "../../services/apiContracts";

export function useContract(contractId) {
    const {isLoading, data: contract, error} = useQuery({
        queryKey: ["contract", contractId],
        queryFn: () => getMyContract(contractId),
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
        contract,
        error
    };
}