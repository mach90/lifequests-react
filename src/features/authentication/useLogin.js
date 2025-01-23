import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {mutate: login, isPending} = useMutation({
        mutationFn: ({email, password}) => loginApi(email, password),
        onSuccess: async (user) => {
            queryClient.setQueryData(["user"] , user);
            queryClient.invalidateQueries(["user"]);
            navigate("/character", {replace: true});
            toast.success("Welcome back!");
        },
        onError: (error) => {
            toast.error(error.message || "Incorrect email or password");
        }
    });
    
    return {login, isPending};
}