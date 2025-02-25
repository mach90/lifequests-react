import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMySkillset as updateMySkillsetApi } from "../../services/apiSkillsets";
import toast from "react-hot-toast";

export function useUpdateSkillset() {
    const queryClient = useQueryClient();

    const { 
        isPending, 
        mutate: updateSkillset, 
        data: updatedSkillset, 
        error 
    } = useMutation({
        mutationFn: (skills) => updateMySkillsetApi(skills),
        onSuccess: () => {
            queryClient.invalidateQueries({ 
                queryKey: ["skillset"], 
            });
        },
        onError: (error) => {
            toast.error("Couldn't update skillset");
            if (error?.response?.status === 401) return null;
        }
    });

    return {
        isPending,
        updateSkillset,
        updatedSkillset,
        error
    };
}