import { useQuery } from "@tanstack/react-query";
import { getMe as getMeApi } from "../../services/apiUser";
import toast from "react-hot-toast";

export function useUser() {
    const {
        isPending, 
        data: user,
        error
    } = useQuery({
        queryKey: ["user"],
        queryFn: getMeApi,
        staleTime: 1000 * 60 * 30,
        retry: false,
        refetchOnMount: true,
        refetchOnReconnect: true,
        refetchOnWindowFocus: false,
        onError: (error) => {
            toast.error("User error.");
            if (error?.response?.status === 401) return null;
        }
    });

    return {
        isPending, 
        user, 
        isAuthenticated: !!user,
        error
    };
}