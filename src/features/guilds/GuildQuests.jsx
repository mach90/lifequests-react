import { useQuery } from "@tanstack/react-query";
import { getAllGuildQuests } from "../../services/apiGuilds";
import GuildQuestsItem from "./GuildQuestsItem";
import LoadingSpinner from "../../ui/LoadingSpinner";
import { useContracts } from "../contracts/useContracts";
import Card from "../../ui/Card";

const guildQuestsContainerStyle = "col-span-6 row-span-9";
const guildQuestsListStyle = "flex flex-wrap p-6 gap-4 overflow-none bg-main2 rounded-lg";

function GuildQuests({guild}) {
    const { isLoading, data: quests, error } = useQuery({
        queryKey: ["quests", guild.id],
        queryFn: () => getAllGuildQuests(guild.id),
    });
    
    const { isLoading: isLoadingContracts, contracts } = useContracts({
        page: 1,
        limit: 9999
    });
           
    return (
        <div className={guildQuestsContainerStyle}>
            <Card title="Guild's Quests">
                {/* <div>FILTER / SORT</div> */}
                {quests?.length === 0 && <p>No quests available yet</p>}
                {isLoading || quests === undefined || isLoadingContracts && <LoadingSpinner size="md" />}
                {quests && quests.length > 0 && <div className={guildQuestsListStyle}>
                    {quests.map(quest => 
                        <GuildQuestsItem key={quest.id} quest={quest} contracts={contracts} />)
                    }
                </div>}
            </Card>
        </div>
    );
};

export default GuildQuests;