import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getMyContractsAfterDate as getMyContractsAfterDateApi } from "../../services/apiContracts";
import toast from "react-hot-toast";

// import { DEFAULT_PAGE_SIZE } from "../../utils/constants"; //10

export function useRecentContracts(overrideParams = {}) {
    const [searchParams] = useSearchParams();
    
    // Get filter parameters
    const lastFilter = overrideParams.last ?? searchParams.get("last");
    
    // Build params object
    const params = {};
    if (lastFilter && lastFilter !== "7") {
        params.last = lastFilter;
    }

    // Calculate date based on "last" parameter (days ago)
    const calculateDate = () => {
        const days = parseInt(lastFilter || "7");
        const date = new Date();
        date.setDate(date.getDate() - days);
        return date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    };

    const {
        isPending, 
        data, 
        error
    } = useQuery({
        queryKey: ["recent-contracts", params],
        queryFn: () => getMyContractsAfterDateApi(calculateDate()),
        staleTime: 0,
        retry: false,
        refetchOnMount: true,
        refetchOnReconnect: true,
        refetchOnWindowFocus: false,
        onError: (error) => {
            toast.error("Couldn't get recent contracts.");
            if (error?.response?.status === 401) return null;
        }
    });

    const contracts = data?.contracts || [];
    const totalCount = data?.totalCount || 0;
    const perDayStats = data?.perDayStats || [];
    const averageStats = data?.averageStats || [];

    return {
        isPending,
        contracts,
        totalCount,
        perDayStats,
        averageStats,
        error
    };
}