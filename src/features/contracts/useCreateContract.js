import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMyContract as createMyContractApi } from "../../services/apiContracts";
import toast from "react-hot-toast";

export function useCreateContract() {
    const queryClient = useQueryClient();
    
    const mutation = useMutation({
        mutationFn: (questId) => createMyContractApi(questId),
        onSuccess: (data, questId) => {
            queryClient.invalidateQueries({
                queryKey: ["quest", questId],
                queryKey: ["contracts"],
            });
        },
        onError: (error) => {
            toast.error("Couldn't create contract.");
            if (error?.response?.status === 401) return null;
        }
    });

    return mutation;
}