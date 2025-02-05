import { useQuest } from "./useQuest";
import QuestGuildsItem from "./QuestGuildsItem";
import LoadingSpinner from "../../ui/LoadingSpinner";

const questGuildsContainerStyle = "flex flex-row gap-2 w-full h-full";

function QuestGuilds({questId}) {
    const {isLoading, quest} = useQuest(questId);

    if(isLoading) return <LoadingSpinner size="lg" />

    return (
        <div className={questGuildsContainerStyle}>
            {quest?.guilds?.map(guild => {
                return <QuestGuildsItem key={guild} guildId={guild} />
            })}
        </div>
    );
};

export default QuestGuilds;
