import { useQuery } from "@tanstack/react-query";
import { getMySkillset as getMySkillsetApi } from "../../services/apiSkillsets";
import toast from "react-hot-toast";

export function useSkillset() {
    const {isPending, data: skillset, error} = useQuery({
        queryKey: ["skillset"],
        queryFn: getMySkillsetApi,
        staleTime: 0,
        retry: false,
        refetchOnMount: true,
        refetchOnReconnect: true,
        refetchOnWindowFocus: false,
        onError: (error) => {
            toast.error("Couldn't get skillset.");
            if (error?.response?.status === 401) return null;
        }
    });

    return {
        isPending,
        skillset,
        error
    };
}