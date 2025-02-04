import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getQuests } from "../../services/apiQuests";

export function useQuests() {
    const [searchParams] = useSearchParams();
    
    // Get filter and sort parameters
    const difficultyFilter = searchParams.get('difficulty');
    const sortBy = searchParams.get('sortBy') || 'name-asc';
    
    // Build params object
    const params = {};
    if (difficultyFilter && difficultyFilter !== 'all') {
        params.difficulty = difficultyFilter;
    }
    if (sortBy) {
        params.sortBy = sortBy;
    }

    const {isLoading, data: quests, error} = useQuery({
        queryKey: ["quests", params], // Include params in queryKey for proper cache invalidation
        queryFn: () => getQuests(params),
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
        error,
        sortBy // Return current sortBy value for UI state management
    };
}