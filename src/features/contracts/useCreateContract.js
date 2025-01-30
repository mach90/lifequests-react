import { useMutation } from "@tanstack/react-query";
import { createMyContract } from "../../services/apiContracts";

export function useCreateContract() {
    const mutation = useMutation({
        mutationFn: (questId) => createMyContract(questId)
    });

    return mutation;
}