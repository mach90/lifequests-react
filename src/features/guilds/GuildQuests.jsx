import { useQuery } from "@tanstack/react-query";
import { getAllGuildQuests } from "../../services/apiGuilds";
import GuildQuestsItem from "./GuildQuestsItem";
import LoadingSpinner from "../../ui/LoadingSpinner";
import { useContracts } from "../contracts/useContracts";

const guildQuestsCardStyle = "bg-variant3/50 col-span-6 row-span-9 flex flex-col gap-2 text-white flex justify-start items-center rounded-lg border-4 border-variant3";
const guildQuestsTitleStyle = "bg-variant3 w-full text-center text-base font-bold text-white py-1 px-2 uppercase";
const guildQuestsListStyle = "flex flex-wrap p-6 gap-4 overflow-y-scroll w-full [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-800 [&::-webkit-scrollbar-thumb]:bg-variant3 [&::-webkit-scrollbar-thumb]:hover:bg-variant3 [&::-webkit-scrollbar:horizontal]:hidden";

function GuildQuests({guild}) {
    const { isLoading, data: quests, error } = useQuery({
        queryKey: ["quests", guild.id],
        queryFn: () => getAllGuildQuests(guild.id),
    });
    
    const { isLoading: isLoadingContracts, contracts } = useContracts({
        page: 1,
        limit: 9999
    });

    // console.log("GETGUILDSQUESTQUERIED", quests);
    
    /* 
    FILTER THE QUESTS
    DISPLAY ONLY THE QUESTS THAT THE USER HAS NOT STARTED/FINISHED
    AND THAT THE USER CAN DO (GUILD PROGRESS XP)
    SORT/FILTER
    */
   
   if (isLoading || quests === undefined || isLoadingContracts) {
       return <LoadingSpinner size="md" />;
    }
    
    if (quests.length === 0) {
        return <div className={guildQuestsCardStyle}>No quests available yet</div>
    }
    
    console.log(contracts)
    console.log(quests)

    return (
        <div className={guildQuestsCardStyle}>
            <h3 className={guildQuestsTitleStyle}>Guild's Quests</h3>
            <div>FILTER / SORT</div>
            <div className={guildQuestsListStyle}>
                {quests.map(quest => 
                    <GuildQuestsItem key={quest.id} quest={quest} contracts={contracts} />)
                }
            </div>
        </div>
    );
};

export default GuildQuests;