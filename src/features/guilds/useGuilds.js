import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getGuilds as getGuildsApi } from "../../services/apiGuilds";
import toast from "react-hot-toast";

export function useGuilds() {
    const [searchParams] = useSearchParams();
    
    // Get filter and sort parameters
    const companyFilter = searchParams.get('company.name');
    const sortBy = searchParams.get('sortBy') || 'name-asc';
    
    // Build params object
    const params = {};
    if (companyFilter && companyFilter !== 'all') {
        params.company = companyFilter;
    }
    if (sortBy) {
        params.sortBy = sortBy;
    }

    const {
        isPending, 
        data: guilds, 
        error
    } = useQuery({
        queryKey: ["guilds", params],
        queryFn: () => getGuildsApi(params),
        staleTime: 1000 * 60 * 30,
        retry: false,
        refetchOnMount: true,
        refetchOnReconnect: true,
        refetchOnWindowFocus: false,
        onError: (error) => {
            if (error?.response?.status === 401) return null;
            toast.error("Couldn't get guilds.");
        }
    });

    return {
        isPending, 
        guilds, 
        error
    };
}