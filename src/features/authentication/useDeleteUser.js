import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMe as deleteMeApi } from "../../services/apiUser";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useDeleteUser() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {
        mutate: deleteUser,
        isPending,
        error
    } = useMutation({
        mutationFn: deleteMeApi,
        onSuccess: (deleteUser) => {
            toast.success("Your account has been deleted.");
            queryClient.setQueryData(["user"], deleteUser);
            queryClient.invalidateQueries({ queryKey: ["user"] });
            navigate("/login", {replace: true});
        },
        onError: (error) => {
            toast.error(error.message || "Couldn't delete user.");
        }
    });

    return {deleteUser, isPending, error};
}