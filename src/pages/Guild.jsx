import { useParams } from "react-router-dom";
import { useGuild } from "../features/guilds/useGuild";
import LoadingSpinner from "../ui/LoadingSpinner";
import GuildTitle from "../features/guilds/GuildTitle";
import GuildMaster from "../features/guilds/GuildMaster";
import GuildChatbotInput from "../features/guilds/GuildChatbotInput";
import GuildQuests from "../features/guilds/GuildQuests";
import GuildDescription from "../features/guilds/GuildDescription";
import GuildProgress from "../features/guilds/GuildProgress";

const guildContainerStyle = "grid grid-flow-col grid-cols-10 grid-rows-12 gap-4 text-white w-full h-full transition-all duration-400";

function Guild() {
    const { guildId } = useParams();
    const { isPending, guild, error } = useGuild(guildId);

    return (
        <div className={guildContainerStyle}>
            {guild && <GuildTitle guild={guild} isPending={isPending} />}
            {guild && <GuildMaster guild={guild} isPending={isPending} />}
            {guild && <GuildChatbotInput guild={guild} isPending={isPending} />}
            {guild && <GuildQuests guild={guild} isPending={isPending} />}
            {guild && <GuildDescription guild={guild} isPending={isPending} />}
            {guild && <GuildProgress guild={guild} isPending={isPending} />}
        </div>
    );
};

export default Guild;