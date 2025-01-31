import { NavLink } from "react-router-dom";

const serverUrl = import.meta.env.VITE_SERVER_URL;

const guildLinkStyle = "flex flex-row justify-start items-center gap-2 p-2 bg-red-600 w-full rounded-l-full rounded-br-full bg-variant3/50 border-b-4 border-slate-800";
const guildLinkActiveStyle = "flex flex-row justify-start items-center gap-2 p-2 bg-red-600 w-full rounded-l-full rounded-br-full bg-variant3 border-b-4 border-slate-800";
const guildLinkEmblemStyle ="h-6 w-6";
const guildLinkNameStyle ="text-slate-800 font-black uppercase text-base";

function GuildLink({guildId, name, emblem}) {

    return (
        <NavLink to={`/guilds/${guildId}`} className={({ isActive }) => isActive ? guildLinkActiveStyle : guildLinkStyle}>
            <img src={emblem ? `${serverUrl}/img/guilds/${emblem}` : `${serverUrl}/img/guilds/default-emblem.png`} alt="guild-emblem" className={guildLinkEmblemStyle} />
            <h2 className={guildLinkNameStyle}>{name}</h2>
        </NavLink>
    );
};

export default GuildLink;
