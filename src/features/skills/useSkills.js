import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getSkills as getSkillsApi } from "../../services/apiSkills";

import { DEFAULT_PAGE_SIZE } from "../../utils/constants"; //10

export function useSkills() {
    const [searchParams] = useSearchParams();
    
    // Get filter and sort parameters
    const categoryFilter = searchParams.get('category');
    const sortBy = searchParams.get('sortBy') || 'name-asc';
    const page = searchParams.get('page') || 1;
    const limit = searchParams.get('limit') || DEFAULT_PAGE_SIZE;
    
    // Build params object
    const params = {};
    if (categoryFilter && categoryFilter !== 'all') {
        params.category = categoryFilter;
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

    const {
        isPending, 
        data, 
        error
    } = useQuery({
        queryKey: ["skills", params],
        queryFn: () => getSkillsApi(params),
        staleTime: 1000 * 60 * 30,
        retry: false,
        refetchOnMount: true,
        refetchOnReconnect: true,
        refetchOnWindowFocus: false,
        onError: (error) => {
            toast.error("Couldn't get skills.");
            if (error?.response?.status === 401) return null;
        }
    });

    const skills = data?.skills || [];
    const totalCount = data?.totalCount || 0;
    const results = data?.results || 0;

    return {
        isPending, 
        skills,
        totalCount, 
        results,
        error,
    };
}