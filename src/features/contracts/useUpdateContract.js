import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMyContract } from "../../services/apiContracts";

export function useUpdateContract() {
    const queryClient = useQueryClient();

    const { 
        isLoading: isUpdating, 
        mutate: updateContract, 
        data: updatedContract, 
        error 
    } = useMutation({
        mutationFn: ({ contractId, status, finishedAt }) => updateMyContract(contractId, status, finishedAt),
        onSuccess: (data, variables) => {
            queryClient.invalidateQueries({ 
                queryKey: ["contract", variables.contractId], 
            });
            queryClient.invalidateQueries({ 
                queryKey: ["contracts"], 
            });
        },
        onError: (error) => {
            if (error?.response?.status === 401) return null;
            console.error("Update contract error:", error);
        }
    });

    return {
        isUpdating,
        updateContract,
        updatedContract,
        error
    };
}