import { useQuery } from "@tanstack/react-query";
import { getGuild } from "../../services/apiGuilds";

export function useGuild(guildId) {
    const {isLoading, data: guild, error} = useQuery({
        queryKey: ["guild", guildId],
        queryFn: () => getGuild(guildId),
        staleTime: 1000 * 60 * 30,
        retry: false,
        refetchOnMount: true,
        refetchOnReconnect: true,
        refetchOnWindowFocus: false,
        onError: (error) => {
            if (error?.response?.status === 401) return null;
            console.error(error);
        }
    });

    return {
        isLoading, 
        guild, 
        error
    };
}