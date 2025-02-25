import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateOrCreateContractRelatedProgress } from "../../services/apiProgress";

export function useUpdateOrCreateContractRelatedProgress() {
    const queryClient = useQueryClient();

    const {
        mutate: updateRelatedProgress,
        isPending: isUpdatingRelatedProgress,
        error
    } = useMutation({
        mutationFn: ({ contractId, progressData }) => 
            updateOrCreateContractRelatedProgress(contractId, progressData),
        onSuccess: () => {
            // Invalidate and refetch progress queries
            queryClient.invalidateQueries({ queryKey: ["progress"] });
            // Also invalidate the specific contract's progress if you're tracking it
            queryClient.invalidateQueries({ 
                queryKey: ["progress", "contract"]
            });
        },
        onError: (error) => {
            console.error("Progress update error:", error.message);
        }
    });

    return { 
        updateRelatedProgress, 
        isUpdatingRelatedProgress, 
        error
    };
}