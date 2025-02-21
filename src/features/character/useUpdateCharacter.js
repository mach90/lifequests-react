import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMyCharacter as updateMyCharacterApi } from "../../services/apiUser";

export function useUpdateCharacter() {
    const queryClient = useQueryClient();

    const { 
        mutate: updateCharacter, 
        isPending,
        error 
    } = useMutation({
        mutationFn: (characterData) => updateMyCharacterApi(characterData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["user"] });
        },
        onError: (error) => {
            console.error("Update user error:", error);
        }
    });

    return {updateCharacter, isPending, error};
}