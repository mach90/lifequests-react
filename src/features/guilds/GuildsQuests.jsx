import { useQuery } from "@tanstack/react-query";
import { getAllGuildQuests } from "../../services/apiGuilds";
import GuildsQuestsItem from "./GuildsQuestsItem";
import LoadingSpinner from "../../ui/LoadingSpinner";

const guildsQuestsCardStyle = "bg-card col-span-6 row-span-9 flex flex-col gap-2 text-white flex justify-start items-center p-6";
const guildsQuestsTitleStyle = "text-white text-xl font-bold";
const guildsQuestsListStyle = "flex flex-col gap-4 overflow-y-scroll w-full";

function GuildsQuests({currentGuild}) {
    const { isLoading, data: quests, error } = useQuery({
        queryKey: ["quests", currentGuild.id],
        queryFn: () => getAllGuildQuests(currentGuild.id),
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
        return <div className={guildsQuestsCardStyle}>No quests available yet</div>
    }

    return (
        <div className={guildsQuestsCardStyle}>
            <h3 className={guildsQuestsTitleStyle}>Guild's Quests</h3>
            <div className={guildsQuestsListStyle}>
                {quests.map(quest => 
                    <GuildsQuestsItem key={quest.id} quest={quest} />)
                }
            </div>
        </div>
    );
};

export default GuildsQuests;