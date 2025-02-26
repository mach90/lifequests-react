import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getAllMyProgress as getAllMyProgressApi } from "../../services/apiProgress";

import { DEFAULT_PAGE_SIZE } from "../../utils/constants";

export function useAllProgress(overrideParams = {}) {
    const [searchParams] = useSearchParams();

    // Get filter and sort parameters
    const experienceFilter = overrideParams.experience ?? searchParams.get("experience");
    const sortBy = overrideParams.sortBy ?? (searchParams.get("sortBy") || "experience-desc");
    const page = overrideParams.page ?? (searchParams.get("page") || 1);
    const limit = overrideParams.limit ?? (searchParams.get("limit") || DEFAULT_PAGE_SIZE);

    // Build params object
    const params = {};
    if (experienceFilter && experienceFilter !== "all") {
        params.status = experienceFilter;
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
        queryKey: ["progress", params],
        queryFn: () => getAllMyProgressApi(params),
        staleTime: 0,
        retry: false,
        refetchOnMount: true,
        refetchOnReconnect: true,
        refetchOnWindowFocus: false,
        onError: (error) => {
            if (error?.response?.status === 401) return null;
            console.error("Query error:", error);
        }
    });

    const progress = data?.progress || [];
    const totalCount = data?.totalCount || 0;

    return {
        isPending,
        progress,
        totalCount,
        error
    }
}