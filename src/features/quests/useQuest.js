import { useQuery } from "@tanstack/react-query";
import { getQuest } from "../../services/apiQuests";

export function useQuest(questId) {
    const {isPending, data: quest, error} = useQuery({
        queryKey: ["quest", questId],
        queryFn: () => getQuest(questId),
        staleTime: 1000 * 60 * 30,
        retry: false,
        refetchOnMount: true,
        refetchOnReconnect: true,
        refetchOnWindowFocus: false,
        onError: (error) => {
            toast.error("Couldn't get quest");
            if (error?.response?.status === 401) return null;
        }
    });

    return {
        isPending, 
        quest, 
        error
    };
}