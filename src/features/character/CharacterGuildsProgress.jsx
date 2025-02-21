import { useAllProgress } from "../progress/useAllProgress";
import ProgressItem from "../progress/ProgressItem";
import Card from "../../ui/Card";
import LoadingSpinner from "../../ui/LoadingSpinner";
import { FaHouseFlag } from "react-icons/fa6";

const characterGuildsProgressContainerStyle = "col-span-6 row-span-6";
const guildProgressContainer = "grid grid-cols-5 gap-2";

function CharacterGuildsProgress() {
    const {isPending, progress, totalCount, error} = useAllProgress();

    return (
        <div className={characterGuildsProgressContainerStyle}>
            <Card title="Guilds Levels" legend="Legend" icon={FaHouseFlag} sort="GuildsProgress" pagination={true} totalCount={totalCount}>
                <div className={guildProgressContainer}>
                    {progress.length === 0 || totalCount === 0 && <div className={characterGuildsProgressContainerStyle}>No progress</div>}
                    {isPending && <div className={characterGuildsProgressContainerStyle}><LoadingSpinner size="sm" /></div>}
                    {progress.map(progr => <ProgressItem key={progr?.id} progr={progr} to={`/guilds/${progr?.guild?.id}`} />)}
                </div>
            </Card>
        </div>
    );
};

export default CharacterGuildsProgress;
