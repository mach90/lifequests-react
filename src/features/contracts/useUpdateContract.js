import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMyContract as updateMyContractApi } from "../../services/apiContracts";
import toast from "react-hot-toast";

export function useUpdateContract() {
    const queryClient = useQueryClient();

    const { 
        isPending, 
        mutate: updateContract, 
        data: updatedContract, 
        error 
    } = useMutation({
        mutationFn: ({ contractId, status, finishedAt }) => updateMyContractApi(contractId, status, finishedAt),
        onSuccess: (data, variables) => {
            queryClient.invalidateQueries({ 
                queryKey: ["contract", variables.contractId], 
            });
            queryClient.invalidateQueries({ 
                queryKey: ["contracts"], 
            });
        },
        onError: (error) => {
            toast.error("Couldn't update contract.");
            if (error?.response?.status === 401) return null;
        }
    });

    return {
        isPending,
        updateContract,
        updatedContract,
        error
    };
}