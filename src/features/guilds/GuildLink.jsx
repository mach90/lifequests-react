import { NavLink, useSearchParams } from "react-router-dom";

const serverUrl = import.meta.env.VITE_SERVER_URL;

const guildLinkStyle = "flex flex-row gap-4 w-full h-10 px-3 py-1.5 bg-main1 rounded-lg items-center justify-between border border-transparent hover:border-main4 text-main4 duration-200";
const guildLinkActiveStyle = "flex flex-row gap-4 w-full h-10 px-3 py-1.5 bg-main1 rounded-lg items-center justify-between border border-neutral0 text-neutral0 duration-200";
const guildLinkNameStyle = "w-full text-sm font-bold";
const guildLinkEmblemStyle = "h-6 w-6";

function GuildLink({guildId, name, emblem}) {
    const [searchParams] = useSearchParams();

    const to = {
        pathname: `/guilds/${guildId}`,
        search: searchParams.toString()
    };

    return (
        <NavLink to={to} className={({ isActive }) => isActive ? guildLinkActiveStyle : guildLinkStyle}>
            <img src={emblem ? `${serverUrl}/img/guilds/${emblem}` : `${serverUrl}/img/guilds/default-emblem.png`} alt="guild-emblem" className={guildLinkEmblemStyle} />
            <h2 className={guildLinkNameStyle}>{name}</h2>
        </NavLink>
    );
};

export default GuildLink;
