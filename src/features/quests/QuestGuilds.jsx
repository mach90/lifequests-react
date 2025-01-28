import { useQuest } from "./useQuest";
import QuestGuildsItem from "./QuestGuildsItem";
import LoadingSpinner from "../../ui/LoadingSpinner";

const questGuildsContainerStyle = "flex flex-col gap-2";

function QuestGuilds({questId}) {
    const {isLoading, quest} = useQuest(questId);

    if(isLoading) return <LoadingSpinner size="lg" />

    return (
        <div className={questGuildsContainerStyle}>
            <div>GUILDS THAT HAVE THIS QUEST: {quest?.guilds.length}</div>
            {quest?.guilds?.map(guild => {
                return <QuestGuildsItem key={guild} guildId={guild} />
            })}
        </div>
    );
};

export default QuestGuilds;
