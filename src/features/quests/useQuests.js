import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getQuests as getQuestsApi } from "../../services/apiQuests";

import { DEFAULT_PAGE_SIZE } from "../../utils/constants"; //10

export function useQuests() {
    const [searchParams] = useSearchParams();
    
    // Get filter and sort parameters
    const difficultyFilter = searchParams.get('difficulty');
    const sortBy = searchParams.get('sortBy') || 'name-asc';
    const page = searchParams.get('page') || 1;
    const limit = searchParams.get('limit') || DEFAULT_PAGE_SIZE;
    
    // Build params object
    const params = {};
    if (difficultyFilter && difficultyFilter !== 'all') {
        params.difficulty = difficultyFilter;
    }
    if (sortBy) {
        params.sortBy = sortBy;
    }
    if (page) {
        params.page = page;
    }
    if (limit) {
        params.limit = limit;
    }

    const {isPending, data, error} = useQuery({
        queryKey: ["quests", params],
        queryFn: () => getQuestsApi(params),
        staleTime: 1000 * 60 * 30,
        retry: false,
        refetchOnMount: true,
        refetchOnReconnect: true,
        refetchOnWindowFocus: false,
        onError: (error) => {
            toast.error("Couldn't get quests.");
            if (error?.response?.status === 401) return null;
        }
    });

    const quests = data?.quests || [];
    const totalCount = data?.totalCount || 0;
    const results = data?.results || 0;

    return {
        isPending, 
        quests,
        totalCount, 
        results,
        error,
    };
}