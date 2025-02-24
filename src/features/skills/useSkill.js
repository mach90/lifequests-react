import { useQuery } from "@tanstack/react-query";
import { getSkill as getSkillApi } from "../../services/apiSkills";

export function useSkill(skillId) {
    const {isPending, data: skill, error} = useQuery({
        queryKey: ["skill", skillId],
        queryFn: () => getSkillApi(skillId),
        staleTime: 1000 * 60 * 30,
        retry: false,
        refetchOnMount: true,
        refetchOnReconnect: true,
        refetchOnWindowFocus: false,
        onError: (error) => {
            toast.error("Couldn't get skill");
            if (error?.response?.status === 401) return null;
        }
    });

    return {
        isPending, 
        skill, 
        error
    };
}