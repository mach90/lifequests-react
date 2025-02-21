import { useParams } from "react-router-dom";
import { useGuild } from "../features/guilds/useGuild";
import GuildTitle from "../features/guilds/GuildTitle";
import GuildMaster from "../features/guilds/GuildMaster";
import GuildChatbotInput from "../features/guilds/GuildChatbotInput";
import GuildQuests from "../features/guilds/GuildQuests";
import GuildDescription from "../features/guilds/GuildDescription";
import GuildProgress from "../features/guilds/GuildProgress";

const guildContainerStyle = "grid grid-flow-col grid-cols-10 grid-rows-12 gap-4 text-white w-full h-full transition-all duration-400";

function Guild() {
    const { guildId } = useParams();

    const guildPlaceholder = {
        name: null,
        summary: null,
        description: null,
        imageCover : null,
        images: [null, null, null],
        company: {
            name: null,
        },
        slug: null,
    }

    const { isPending, guild = guildPlaceholder, error } = useGuild(guildId);

    return (
        <div className={guildContainerStyle}>
            <GuildTitle guild={guild} isPending={isPending} />
            <GuildMaster guild={guild} isPending={isPending} />
            <GuildChatbotInput guild={guild} isPending={isPending} />
            <GuildQuests guild={guild} isPending={isPending} />
            <GuildDescription guild={guild} isPending={isPending} />
            <GuildProgress guild={guild} isPending={isPending} />
        </div>
    );
};

export default Guild;