import { useQuest } from "./useQuest";
import QuestGuildsItem from "./QuestGuildsItem";
import LoadingSpinner from "../../ui/LoadingSpinner";

const questGuildsContainerStyle = "col-span-2 row-span-2 flex flex-flow gap-2 border-y border-main2 py-2";

function QuestGuilds({questId}) {
    const {isLoading, quest} = useQuest(questId);

    if(isLoading) return <LoadingSpinner size="lg" />

    return (
        <div className={questGuildsContainerStyle}>
            <h3>Guilds</h3>
            {quest?.guilds?.map(guild => {
                return <QuestGuildsItem key={guild} guildId={guild} />
            })}
        </div>
    );
};

export default QuestGuilds;
