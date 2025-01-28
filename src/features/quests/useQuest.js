import { useQuery } from "@tanstack/react-query";
import { getQuest } from "../../services/apiQuests";

export function useQuest(questId) {
    const {isLoading, data: quest, error} = useQuery({
        queryKey: ["quest", questId],
        queryFn: () => getQuest(questId),
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
        quest, 
        error
    };
}