import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { forgotPassword as forgotPasswordApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useForgotPassword() {
    // const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {mutate: forgotPassword, isPending} = useMutation({
        mutationFn: ({email}) => forgotPasswordApi(email),
        onSuccess: async (user) => {
            navigate("/login", {replace: true});
            toast.success("If an account is associated with this email, you will receive a password reset link shortly. Please check your inbox and spam folder.");
        },
        onError: (error) => {
            toast.success("If an account is associated with this email, you will receive a password reset link shortly. Please check your inbox and spam folder.");
        }
    });
    
    return {forgotPassword, isPending};
}