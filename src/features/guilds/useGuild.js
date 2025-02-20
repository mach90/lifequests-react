import { useQuery } from "@tanstack/react-query";
import { getGuild as getGuildApi } from "../../services/apiGuilds";
import toast from "react-hot-toast";

export function useGuild(guildId) {
    const {
        isPending, 
        data: guild, 
        error
    } = useQuery({
        queryKey: ["guild", guildId],
        queryFn: () => getGuildApi(guildId),
        staleTime: 1000 * 60 * 30,
        retry: false,
        refetchOnMount: true,
        refetchOnReconnect: true,
        refetchOnWindowFocus: false,
        onError: (error) => {
            toast.error("Couldn't get guild.");
            if (error?.response?.status === 401) return null;
        }
    });

    return {
        isPending, 
        guild, 
        error
    };
}