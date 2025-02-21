import { useQuery } from "@tanstack/react-query";
import { getGuildProgress as getGuildProgressApi } from "../../services/apiProgress";
import toast from "react-hot-toast";

export function useGuildProgress(guildId) {
    const { 
        isPending, 
        data: progress, 
        error 
    } = useQuery({
        queryKey: ["progress", guildId],
        queryFn: () => getGuildProgressApi(guildId),
        staleTime: 0,
        retry: false,
        refetchOnMount: true,
        refetchOnReconnect: true,
        refetchOnWindowFocus: false,
        onError: (error) => {
            toast.error("Couldn't get guild's progress.");
            if (error?.response?.status === 401) return null;
        }
    });

    return {
        isPending,
        progress,
        error
    };
}