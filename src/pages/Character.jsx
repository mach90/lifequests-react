import { useUser } from "../features/authentication/useUser";
import CharacterAttributes from "../features/character/CharacterAttributes";
import CharacterAttributesChart from "../features/character/CharacterAttributesChart";
import CharacterStats from "../features/character/CharacterStats";
import CharacterGuildsProgress from "../features/character/CharacterGuildsProgress";
import CharacterTrackedQuests from "../features/character/CharacterTrackedQuests";
// import LoadingSpinner from "../ui/LoadingSpinner";

const characterContainerStyle = "grid grid-flow-col grid-cols-12 grid-rows-12 gap-4 h-full";

function Character() {
    const { isPending, user, error } = useUser();

    return (
        <div className={characterContainerStyle}>
                <CharacterAttributes data={user?.data} isPending={isPending} />
                <CharacterAttributesChart chartData={user?.data} isPending={isPending} />
                <CharacterStats />
                <CharacterGuildsProgress />
                <CharacterTrackedQuests />
        </div>
    );
};

export default Character;