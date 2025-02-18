import { useMutation, useQueryClient } from "@tanstack/react-query";
import { resetPassword } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useResetPassword() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { 
        mutate: resetUserPassword, 
        isLoading: isUpdating,
        error 
    } = useMutation({
        mutationFn: resetPassword,
        onSuccess: () => {
            toast.success("Password reset successfully");
            // Invalidate user query to force a refresh if needed
            queryClient.invalidateQueries(["user"]);
            navigate("/character", { replace: true });
        },
        onError: (err) => {
            console.error("Reset password error:", err);
            toast.error(err.message || "Failed to reset password");
            navigate("/login", { replace: true });
        }
    });

    return { resetUserPassword, isUpdating, error };
}