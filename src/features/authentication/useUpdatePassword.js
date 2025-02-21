import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePassword as updatePasswordApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdatePassword() {
    const queryClient = useQueryClient();

    const { 
        mutate: updateUserPassword, 
        isPending,
        error 
    } = useMutation({
        mutationFn: (formData) => updatePasswordApi(formData),
        onSuccess: (user) => {
            toast.success("Password changed.");
            queryClient.setQueryData(["user"], user);
        },
        onError: (error) => {
            toast.error(error.message || "Password couldn't be changed.");
        }
    });

    return {updateUserPassword, isPending, error};
}