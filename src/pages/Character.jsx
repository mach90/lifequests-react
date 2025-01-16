import { useQuery } from "@tanstack/react-query";
import { getMe } from "../services/apiAuth";
import CharacterAttributes from "../features/character/CharacterAttributes";
import CharacterAttributesChart from "../features/character/CharacterAttributesChart";
import CharacterStats from "../features/character/CharacterStats";
import CharacterGuildsProgress from "../features/character/CharacterGuildsProgress";
import CharacterTrackedQuests from "../features/character/CharacterTrackedQuests";
import LoadingSpinner from "../ui/LoadingSpinner";

const characterContainerStyle = "grid grid-flow-col grid-cols-12 grid-rows-12 p-4 gap-4 h-full";

function Character() {
    const { isLoading, data, error } = useQuery({
        queryKey: ["user"],
        queryFn: getMe,
    });

    if(isLoading) return <LoadingSpinner size="lg" />;

    return (
        <div className={characterContainerStyle}>
            <CharacterAttributes data={data} />
            <CharacterAttributesChart data={data} />
            <CharacterStats />
            <CharacterGuildsProgress />
            <CharacterTrackedQuests />
        </div>
    );
};

export default Character;
