import { useParams } from "react-router-dom";
import { useGuild } from "../features/guilds/useGuild";
import LoadingSpinner from "../ui/LoadingSpinner";
import GuildTitle from "../features/guilds/GuildTitle";
import GuildMaster from "../features/guilds/GuildMaster";
import GuildChatbotInput from "../features/guilds/GuildChatbotInput";
import GuildQuests from "../features/guilds/GuildQuests";
import GuildDescription from "../features/guilds/GuildDescription";
import GuildProgress from "../features/guilds/GuildProgress";

const guildContainerStyle = "grid grid-flow-col grid-cols-10 grid-rows-12 gap-4 text-white w-full h-full";

function Guild() {
    const { guildId } = useParams();
    const { isLoading, guild, error } = useGuild(guildId);

    if(isLoading) return <LoadingSpinner size="lg" />

    return (
        <div className={guildContainerStyle}>
            {guild && <GuildTitle guild={guild} />}
            {guild && <GuildMaster guild={guild} />}
            {guild && <GuildChatbotInput guild={guild} />}
            {guild && <GuildQuests guild={guild} />}
            {guild && <GuildDescription guild={guild} />}
            {guild && <GuildProgress guild={guild} />}
        </div>
    );
};

export default Guild;