import { NavLink } from "react-router-dom";
import LoadingSpinner from "../../ui/LoadingSpinner";
import { useGuild } from "../guilds/useGuild";
import { FaHouseFlag } from "react-icons/fa6";

const questGuildsItemLinkStyle = "text-main4/75 text-sm px-2 border border-main4/75 rounded-md flex flex-row gap-1 items-center hover:text-main4 hover:border-main4 w-max";

function QuestGuildsItem(guildId) {
    const {isLoading, guild} = useGuild(guildId.guildId);

    if(isLoading) return <LoadingSpinner size="lg" />

    return (
        <div>
            {guild && <NavLink to={`/guilds/${guildId.guildId}`} className={questGuildsItemLinkStyle}><FaHouseFlag /> {guild.name}</NavLink>}
        </div>
    );
};

export default QuestGuildsItem;
