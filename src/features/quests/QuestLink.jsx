import { NavLink, useSearchParams } from "react-router-dom";

const questLinkStyle = "flex flex-row justify-start items-center gap-2 p-2 bg-red-600 w-full rounded-l-full rounded-br-full bg-variant6/50 border-b-4 border-slate-800";
const questLinkActiveStyle = "flex flex-row justify-start items-center gap-2 p-2 bg-red-600 w-full rounded-l-full rounded-br-full bg-variant6 border-b-4 border-slate-800";
const questLinkNameStyle ="text-slate-800 font-black uppercase text-base";

function QuestLink({questId, name}) {
    const [searchParams] = useSearchParams();

    const to = {
        pathname: `/quests/${questId}`,
        search: searchParams.toString()
    };

    return (
        <NavLink to={to} className={({ isActive }) => isActive ? questLinkActiveStyle : questLinkStyle}>
            <h2 className={questLinkNameStyle}>{name}</h2>
        </NavLink>
    );
};

export default QuestLink;