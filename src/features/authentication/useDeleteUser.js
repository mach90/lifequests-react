import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMe } from "../../services/apiUser";
import { useNavigate } from "react-router-dom";

export function useDeleteUser() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {
        mutate: deleteUser,
        isLoading: isDeleting,
        error
    } = useMutation({
        mutationFn: deleteMe,
        onSuccess: (deleteUser) => {
            queryClient.setQueryData(["user"], deleteUser);
            queryClient.invalidateQueries({ queryKey: ["user"] });
            navigate("/login", {replace: true});
        },
        onError: (error) => {
            console.error("Delete user error:", error);
        }
    });

    return { deleteUser, isDeleting, error };
}