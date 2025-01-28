import { useQuery } from "@tanstack/react-query";
import { getMe } from "../../services/apiUser";

export function useUser() {
    const {isLoading, data: user, error} = useQuery({
        queryKey: ["user"],
        queryFn: getMe,
        staleTime: 1000 * 60 * 30,
        retry: false,
        refetchOnMount: true,
        refetchOnReconnect: true,
        refetchOnWindowFocus: false,
        onError: (error) => {
            if (error?.response?.status === 401) return null;
            console.error("Authentication error:", error);
        }
    });

    return {
        isLoading, 
        user, 
        isAuthenticated: !!user,
        error
    };
}