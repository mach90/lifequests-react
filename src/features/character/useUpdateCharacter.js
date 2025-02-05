import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMyCharacter } from "../../services/apiUser";

export function useUpdateCharacter() {
    const queryClient = useQueryClient();

    const { 
        mutate: updateCharacter, 
        isLoading: isUpdatingCharacter,
        error 
    } = useMutation({
        mutationFn: (characterData) => updateMyCharacter(characterData),
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

    return { updateCharacter, isUpdatingCharacter, error };
}