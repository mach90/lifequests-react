import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getGuilds } from "../../services/apiGuilds";

export function useGuilds() {
    const [searchParams] = useSearchParams();
    
    // Get filter and sort parameters
    const companyFilter = searchParams.get('company');
    const sortBy = searchParams.get('sortBy') || 'name-asc';
    
    // Build params object
    const params = {};
    if (companyFilter && companyFilter !== 'all') {
        params.company = companyFilter;
    }
    if (sortBy) {
        params.sortBy = sortBy;
    }

    const {isLoading, data: guilds, error} = useQuery({
        queryKey: ["guilds", params],
        queryFn: () => getGuilds(params),
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