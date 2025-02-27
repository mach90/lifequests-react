import { useQuery } from "@tanstack/react-query";
import { getAllGuildQuests } from "../../services/apiGuilds";
import { useContracts } from "../contracts/useContracts";
import GuildQuestsItem from "./GuildQuestsItem";
import Card from "../../ui/Card";
import LoadingSpinner from "../../ui/LoadingSpinner";

const guildQuestsContainerStyle = "col-span-6 row-span-9";
const guildQuestsListStyle = "flex flex-wrap p-6 gap-4 overflow-none bg-main2 rounded-lg";

function GuildQuests({guild, isPending}) {
    const { isPending: isLoadingGuildsQuests, data: quests, error } = useQuery({
        queryKey: ["quests", guild.id],
        queryFn: () => getAllGuildQuests(guild.id),
    });
    
    const { isPending: isLoadingContracts, contracts } = useContracts({
        page: 1,
        limit: 9999
    });
           
    return (
        <div className={guildQuestsContainerStyle}>
            <Card title="Guild's Quests">
                {quests?.length === 0 && <p className="text-main4">No quests available yet</p>}
                {isLoadingGuildsQuests || quests === undefined || isLoadingContracts && <LoadingSpinner size="md" />}
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