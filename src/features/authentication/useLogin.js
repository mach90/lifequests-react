import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {
        mutate: login, 
        isPending,
        error
    } = useMutation({
        mutationFn: (formData) => loginApi(formData),
        onSuccess: async (user) => {
            // queryClient.setQueryData(["user"] , user);
            setTimeout(() => {
                navigate("/character", {replace: true});
            }, 500);
        },
        onError: (error) => {
            toast.error(error.message || "Incorrect email or password");
        }
    });
    
    return {login, isPending, error};
}