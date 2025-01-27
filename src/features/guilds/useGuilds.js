import { useQuery } from "@tanstack/react-query";
import { getGuilds } from "../../services/apiGuilds";

export function useGuilds() {
    const {isLoading, data: guilds, error} = useQuery({
        queryKey: ["guilds"],
        queryFn: getGuilds,
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
        guilds, 
        error
    };
}