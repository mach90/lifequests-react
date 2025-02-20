import { useGuildProgress } from "../progress/useGuildProgress";
import Card from "../../ui/Card";
import LoadingSpinner from "../../ui/LoadingSpinner";
import ProgressItem from "../progress/ProgressItem";

const guildProgressContainerStyle = "col-span-3 row-span-3";

function GuildProgress({ guild }) {
    const {isPending, progress, error} = useGuildProgress(guild?.id);

    if(isPending) return <LoadingSpinner size="sm" />

    return (
        <div className={guildProgressContainerStyle}>
            <Card title="Guild progress">
                <ProgressItem progr={progress} simple="true" />
            </Card>
        </div>
    );
};

export default GuildProgress;
