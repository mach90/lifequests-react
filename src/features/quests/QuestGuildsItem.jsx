import { NavLink } from "react-router-dom";
import LoadingSpinner from "../../ui/LoadingSpinner";
import { useGuild } from "../guilds/useGuild";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const questGuildsItemLinkStyle = "text-variant2/50 text-sm px-2 border border-variant2/50 rounded-md flex flex-row gap-1 items-center hover:text-variant2 hover:border-variant2";

function QuestGuildsItem(guildId) {
    const {isLoading, guild} = useGuild(guildId.guildId);

    if(isLoading) return <LoadingSpinner size="lg" />

    return (
        <div>
            {guild && <NavLink to={`/guilds/${guildId.guildId}`} className={questGuildsItemLinkStyle}><FaExternalLinkSquareAlt /> {guild.name}</NavLink>}
        </div>
    );
};

export default QuestGuildsItem;
