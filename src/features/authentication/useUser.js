import { useQuery } from "@tanstack/react-query";
import { getMe } from "../../services/apiAuth";

export function useUser() {
    const {isLoading, data: user, error} = useQuery({
        queryKey: ["user"],
        queryFn: getMe,
        staleTime: Infinity,
        retry: false,
        refetchOnMount: true,
        refetchOnReconnect: true,
        refetchOnWindowFocus: true,
        // Add error handling
        onError: (error) => {
            // Handle unauthorized errors silently
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