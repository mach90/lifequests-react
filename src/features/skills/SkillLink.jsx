import { PiSphereFill } from "react-icons/pi";
import { NavLink, useSearchParams } from "react-router-dom";

const skillLinkStyle = "flex flex-row gap-4 w-full h-10 px-3 py-1.5 bg-main1 rounded-lg items-center justify-between border border-transparent hover:border-main4 text-main4 duration-200";
const skillLinkActiveStyle = "flex flex-row gap-4 w-full h-10 px-3 py-1.5 bg-main1 rounded-lg items-center justify-between border border-neutral0 text-neutral0 duration-200";
const skillLinkNameStyle = "w-full text-sm font-bold";
const skillLinkIcon = "";

function SkillLink({skillId, name}) {
    const [searchParams] = useSearchParams();

    const to = {
        pathname: `/skills/${skillId}`,
        search: searchParams.toString()
    };

    return (
        <NavLink to={to} className={({ isActive }) => isActive ? skillLinkActiveStyle : skillLinkStyle}>
            <div className={skillLinkIcon}><PiSphereFill  /></div>
            <h2 className={skillLinkNameStyle}>{name}</h2>
        </NavLink>
    );
};

export default SkillLink;