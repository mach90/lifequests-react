import { useQuery } from "@tanstack/react-query";
import { getMyContract as getMyContractApi } from "../../services/apiContracts";
import toast from "react-hot-toast";

export function useContract(contractId) {
    const {
        isPending, 
        data: contract, 
        error
    } = useQuery({
        queryKey: ["contract", contractId],
        queryFn: () => getMyContractApi(contractId),
        staleTime: 0,
        retry: false,
        refetchOnMount: true,
        refetchOnReconnect: true,
        refetchOnWindowFocus: false,
        onError: (error) => {
            toast.error("Couldn't get contract.");
            if (error?.response?.status === 401) return null;
        }
    });

    return {
        isPending,
        contract,
        error
    };
}