import { useUser } from "../features/authentication/useUser";
import CharacterAttributes from "../features/character/CharacterAttributes";
import CharacterAttributesChart from "../features/character/CharacterAttributesChart";
import CharacterStats from "../features/character/CharacterStats";
import CharacterGuildsProgress from "../features/character/CharacterGuildsProgress";
import CharacterTrackedQuests from "../features/character/CharacterTrackedQuests";
import LoadingSpinner from "../ui/LoadingSpinner";

const characterContainerStyle = "grid grid-flow-col grid-cols-12 grid-rows-12 p-4 gap-4 h-full";

function Character() {
    const { isLoading, user, error } = useUser();

    if(isLoading) return <LoadingSpinner size="lg" />;
    if(error) return <div>Error: {error.message}</div>;
    if(!user) return <div>No user data found</div>;

    return (
        <div className={characterContainerStyle}>
            <CharacterAttributes data={user?.data} />
            <CharacterAttributesChart chartData={user?.data} />
            <CharacterStats />
            <CharacterGuildsProgress />
            <CharacterTrackedQuests />
        </div>
    );
};

export default Character;