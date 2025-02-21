import { NavLink, useSearchParams } from "react-router-dom";

const serverUrl = import.meta.env.VITE_SERVER_URL;

const guildLinkStyle = "relative flex flex-row gap-4 w-full h-10 px-3 py-1.5 bg-main1 rounded-lg items-center justify-between border border-transparent hover:border-main4 text-main4 duration-200";
const guildLinkActiveStyle = "relative flex flex-row gap-4 w-full h-10 px-3 py-1.5 bg-main1 rounded-lg items-center justify-between border border-neutral0 text-neutral0 duration-200";
const guildLinkNameStyle = "w-max text-sm font-bold z-10 uppercase";
const guildLinkEmblemStyle = "h-6 w-6 z-10";
const guildLinkCoverStyle = "absolute inset-0 rounded-lg z-0";
const guildCoverImageStyle = "w-full h-full object-cover rounded-lg";
const guildCoverGradientStyle = "absolute inset-0 bg-gradient-to-r from-main1/25 via-main1/90 via-30% to-main1 to-50% rounded-lg";

function GuildLink({guildId, name, imageCover, emblem}) {
    const [searchParams] = useSearchParams();

    const to = {
        pathname: `/guilds/${guildId}`,
        search: searchParams.toString()
    };

    return (
        <NavLink to={to} className={({ isActive }) => isActive ? guildLinkActiveStyle : guildLinkStyle}>
            <img src={emblem ? `${serverUrl}/img/guilds/emblems/${emblem}` : `${serverUrl}/img/guilds/emblems/default-emblem.png`} alt="Guild emblem" className={guildLinkEmblemStyle} />
            <h2 className={guildLinkNameStyle}>{name}</h2>
            <div className={guildLinkCoverStyle}>
                <img 
                    src={imageCover ? `${serverUrl}/img/guilds/covers/${imageCover}` : `${serverUrl}/img/guilds/covers/default-cover.png`} 
                    alt="Guild image cover" 
                    className={guildCoverImageStyle}
                />
                <div className={guildCoverGradientStyle}></div>
            </div>
        </NavLink>
    );
};

export default GuildLink;