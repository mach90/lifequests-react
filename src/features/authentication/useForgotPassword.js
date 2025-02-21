import { useMutation } from "@tanstack/react-query";
import { forgotPassword as forgotPasswordApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useForgotPassword() {
    const navigate = useNavigate();

    const {
        mutate: forgotPassword, 
        isPending,
        error
    } = useMutation({
        mutationFn: (formData) => forgotPasswordApi(formData),
        onSuccess: async () => {
            toast.success("If an account is associated with this email, you will receive a password reset link shortly. Please check your inbox and spam folder.");
            setTimeout(() => {
                navigate("/login", {replace: true});
            }, 500);
        },
        onError: async () => {
            toast.success("If an account is associated with this email, you will receive a password reset link shortly. Please check your inbox and spam folder.");
            setTimeout(() => {
                navigate("/login", {replace: true});
            }, 500);
        }
    });
    
    return {forgotPassword, isPending, error};
}