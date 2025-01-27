import { useQuery } from "@tanstack/react-query";
import { getAllGuildQuests } from "../../services/apiGuilds";
import GuildsQuestsItem from "./GuildsQuestsItem";
import LoadingSpinner from "../../ui/LoadingSpinner";

const guildQuestsCardStyle = "bg-card col-span-6 row-span-9 flex flex-col gap-2 text-white flex justify-start items-center p-6";
const guildQuestsTitleStyle = "text-white text-xl font-bold";
const guildQuestsListStyle = "flex flex-col gap-4 overflow-y-scroll w-full";

function GuildQuests({guild}) {
    const { isLoading, data: quests, error } = useQuery({
        queryKey: ["quests", guild.id],
        queryFn: () => getAllGuildQuests(guild.id),
    });

    console.log("GETGUILDSQUESTQUERIED", quests);

    /* 
    FILTER THE QUESTS
    DISPLAY ONLY THE QUESTS THAT THE USER HAS NOT STARTED/FINISHED
    SORT/FILTER
    */

    if (isLoading || quests === undefined) {
        return <LoadingSpinner size="md" />;
    }

    if (quests.length === 0) {
        return <div className={guildQuestsCardStyle}>No quests available yet</div>
    }

    return (
        <div className={guildQuestsCardStyle}>
            <h3 className={guildQuestsTitleStyle}>Guild's Quests</h3>
            <div className={guildQuestsListStyle}>
                {quests.map(quest => 
                    <GuildsQuestsItem key={quest.id} quest={quest} />)
                }
            </div>
        </div>
    );
};

export default GuildQuests;