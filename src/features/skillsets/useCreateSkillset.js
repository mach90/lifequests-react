import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMySkillset as createMySkillsetApi } from "../../services/apiSkillsets";

export function useCreateSkillset() {
    const queryClient = useQueryClient();
    
    const mutation = useMutation({
        mutationFn: createMySkillsetApi,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["skillset"],
            });
        }
    });

    return mutation;
}