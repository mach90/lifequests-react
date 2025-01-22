import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePassword } from "../../services/apiAuth";

export function useUpdatePassword() {
    const queryClient = useQueryClient();

    const { 
        mutate: updateUserPassword, 
        isLoading: isUpdating,
        error 
    } = useMutation({
        mutationFn: updatePassword,
        onSuccess: (user) => {
            // Update the user data in the cache
            queryClient.setQueryData(["user"], user);
        },
        onError: (error) => {
            console.error("Update password error:", error);
        }
    });

    return { updateUserPassword, isUpdating, error };
}