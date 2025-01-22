import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMe } from "../../services/apiUser";

export function useUpdateUser() {
    const queryClient = useQueryClient();

    const { 
        mutate: updateUser, 
        isLoading: isUpdating,
        error 
    } = useMutation({
        mutationFn: updateMe,
        onSuccess: (updatedUser) => {
            // Update the user data in the cache
            queryClient.setQueryData(["user"], updatedUser);
            
            // Optionally invalidate the query to trigger a refresh
            queryClient.invalidateQueries({ queryKey: ["user"] });
        },
        onError: (error) => {
            console.error("Update user error:", error);
        }
    });

    return { updateUser, isUpdating, error };
}