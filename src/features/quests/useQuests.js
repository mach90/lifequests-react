import { useQuery } from "@tanstack/react-query";
import { getQuests } from "../../services/apiQuests";

export function useQuests() {
    const {isLoading, data: quests, error} = useQuery({
        queryKey: ["quests"],
        queryFn: getQuests,
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
        quests, 
        error
    };
}