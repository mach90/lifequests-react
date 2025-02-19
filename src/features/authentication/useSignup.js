import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSignup() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    
    const {
        mutate: signup, 
        isPending,
        error
    } = useMutation({
        mutationFn: (formData) => signupApi(formData),
        onSuccess: async (newUser) => {
            toast.success("Account successfully created.");
            queryClient.setQueryData(["user"], newUser);
            setTimeout(() => {
                navigate("/character", {replace: true});
            }, 500);
        },
        onError: (error) => {
            toast.error(error.message || "Account creation failed.");
        }
    });

    return {signup, isPending, error};
};