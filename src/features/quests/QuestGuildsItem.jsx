import { NavLink } from "react-router-dom";
import LoadingSpinner from "../../ui/LoadingSpinner";
import { useGuild } from "../guilds/useGuild";

const questGuildsItemLinkStyle = "bg-variant6 px-2 py-1 rounded-md";

function QuestGuildsItem(guildId) {
    const {isLoading, guild} = useGuild(guildId.guildId);

    if(isLoading) return <LoadingSpinner size="lg" />

    return (
        <div>
            {guild && <NavLink to={`/guilds/${guildId.guildId}`} className={questGuildsItemLinkStyle}>{guild.name}</NavLink>}
        </div>
    );
};

export default QuestGuildsItem;
