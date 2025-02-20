import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMe as updateMeApi } from "../../services/apiUser";
import toast from "react-hot-toast";

export function useUpdateUser() {
    const queryClient = useQueryClient();

    const { 
        mutate: updateUser, 
        isPending,
        error 
    } = useMutation({
        mutationFn: (userData) => updateMeApi(userData),
        onSuccess: () => {
            toast.success("User updated");
            queryClient.invalidateQueries({ queryKey: ["user"] });
        },
        onError: (error) => {
            toast.error(error.message || "Couldn't update user.");
        }
    });

    return {updateUser, isPending, error};
}