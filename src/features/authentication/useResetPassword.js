import { useMutation, useQueryClient } from "@tanstack/react-query";
import { resetPassword as resetPasswordApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useResetPassword() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { 
        mutate: resetUserPassword, 
        isPending,
        error 
    } = useMutation({
        mutationFn: (formData) => resetPasswordApi(formData),
        onSuccess: () => {
            toast.success("Password reset.");
            queryClient.invalidateQueries(["user"]);
            setTimeout(() => {
                navigate("/login", {replace: true});
            }, 500);
        },
        onError: (error) => {
            toast.error(error.message || "Failed reset password.");
            setTimeout(() => {
                navigate("/login", {replace: true});
            }, 500);
        }
    });

    return {resetUserPassword, isPending, error};
}