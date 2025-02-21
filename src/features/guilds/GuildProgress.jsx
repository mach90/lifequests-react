import { useGuildProgress } from "../progress/useGuildProgress";
import Card from "../../ui/Card";
import ProgressItem from "../progress/ProgressItem";

const guildProgressContainerStyle = "col-span-3 row-span-3";

function GuildProgress({guild, isPending}) {
    const {isPending: isLoadingProgress, progress, error} = useGuildProgress(guild?.id);

    return (
        <div className={guildProgressContainerStyle}>
            <Card title="Guild progress">
                {!isPending && progress && <ProgressItem progr={progress} simple="true" />}
            </Card>
        </div>
    );
};

export default GuildProgress;
