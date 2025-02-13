import { useQuery } from "@tanstack/react-query";
import { getGuildProgress } from "../../services/apiProgress";

export function useGuildProgress(guildId) {
    const { isLoading, data: progress, error } = useQuery({
        queryKey: ["progress", guildId],
        queryFn: () => getGuildProgress(guildId),
        staleTime: 0,
        retry: false,
        refetchOnMount: true,
        refetchOnReconnect: true,
        refetchOnWindowFocus: false,
        onError: (error) => {
            if (error?.response?.status === 401) return null;
            console.error("Query error:", error);
        }
    });

    return {
        isLoading,
        progress,
        error
    };
}