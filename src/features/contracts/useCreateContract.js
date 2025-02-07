// import { useMutation } from "@tanstack/react-query";
// import { createMyContract } from "../../services/apiContracts";

// export function useCreateContract() {
//     const mutation = useMutation({
//         mutationFn: (questId) => createMyContract(questId)
//     });

//     return mutation;
// }

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMyContract } from "../../services/apiContracts";

export function useCreateContract() {
    const queryClient = useQueryClient();
    
    const mutation = useMutation({
        mutationFn: (questId) => createMyContract(questId),
        onSuccess: (data, questId) => {
            queryClient.invalidateQueries({
                queryKey: ["quest", questId],
                queryKey: ["contracts"],
            });
        }
    });

    return mutation;
}