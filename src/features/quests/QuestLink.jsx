import { FaScroll } from "react-icons/fa";
import { NavLink, useSearchParams } from "react-router-dom";

const questLinkStyle = "flex flex-row gap-4 w-full h-10 px-3 py-1.5 bg-main1 rounded-lg items-center justify-between border border-transparent hover:border-main4 text-main4 duration-200";
const questLinkActiveStyle = "flex flex-row gap-4 w-full h-10 px-3 py-1.5 bg-main1 rounded-lg items-center justify-between border border-neutral0 text-neutral0 duration-200";
const questLinkNameStyle = "w-full text-sm font-bold";
const questLinkIcon = "";

function QuestLink({questId, name}) {
    const [searchParams] = useSearchParams();

    const to = {
        pathname: `/quests/${questId}`,
        search: searchParams.toString()
    };

    return (
        <NavLink to={to} className={({ isActive }) => isActive ? questLinkActiveStyle : questLinkStyle}>
            <div className={questLinkIcon}><FaScroll /></div>
            <h2 className={questLinkNameStyle}>{name}</h2>
        </NavLink>
    );
};

export default QuestLink;