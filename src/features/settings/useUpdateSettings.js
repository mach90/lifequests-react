import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMySettings as updateMySettingsApi } from "../../services/apiUser";
import toast from "react-hot-toast";

export function useUpdateSettings() {
    const queryClient = useQueryClient();

    const { 
        mutate: updateSettings, 
        isPending,
        error 
    } = useMutation({
        mutationFn: (userData) => updateMySettingsApi(userData),
        onSuccess: () => {
            toast.success("Settings updated");
            queryClient.invalidateQueries({ queryKey: ["user"] });
        },
        onError: (error) => {
            toast.error(error.message || "Couldn't update app settings.");
        }
    });

    return {updateSettings, isPending, error};
}