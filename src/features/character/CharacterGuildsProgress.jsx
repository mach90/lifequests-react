import { useAllProgress } from "../progress/useAllProgress";
import ProgressItem from "../progress/ProgressItem";
import Card from "../../ui/Card";
import LoadingSpinner from "../../ui/LoadingSpinner";

const characterGuildsProgressContainerStyle = "col-span-6 row-span-6";
const guildProgressContainer = "grid grid-cols-3 gap-4";

function CharacterGuildsProgress() {
    const {isLoading, progress, totalCount, error} = useAllProgress();

    if(isLoading) return <LoadingSpinner size="md" />;
    if(progress.length === 0 || totalCount === 0) return <div className={characterGuildsProgressContainerStyle}>No progress</div>
    console.log(progress)

    return (

        <div className={characterGuildsProgressContainerStyle}>
            <Card title="Guild Progress" legend="sort">
                <div className={guildProgressContainer}>
                    {progress.map(progr => <ProgressItem key={progr?.id} progr={progr} to={`/guilds/${progr?.guild?.id}`} />)}
                </div>
            </Card>
        </div>
    );
};

export default CharacterGuildsProgress;
