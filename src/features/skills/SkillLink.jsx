import { NavLink, useSearchParams } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { PiSphereFill } from "react-icons/pi";

const skillLinkStyle = "flex flex-row gap-4 w-full h-10 px-3 py-1.5 bg-main1 rounded-lg items-center justify-between border border-transparent hover:border-main4 text-main4 duration-200";
const skillLinkActiveStyle = "flex flex-row gap-4 w-full h-10 px-3 py-1.5 bg-main1 rounded-lg items-center justify-between border border-neutral0 text-neutral0 duration-200";
const skillLinkNameStyle = "w-full text-sm font-bold";
const skillLinkIconStyle = "";
const skillLinkStatusAcquiredStyle = "uppercase text-sm font-bold text-green1";
const skillLinkLevelStyle = "flex flex-row text-xs text-green2";

function SkillLink({skillId, name, category, level, acquired}) {
    const [searchParams] = useSearchParams();

    const to = {
        pathname: `/skills/${skillId}`,
        search: searchParams.toString()
    };

    return (
        <NavLink to={to} className={({ isActive }) => isActive ? skillLinkActiveStyle : skillLinkStyle}>
            {category === "technical" && <div className={skillLinkIconStyle}><PiSphereFill color="#eea66a" /></div>}
            {category === "social" && <div className={skillLinkIconStyle}><PiSphereFill color="#d36ea7" /></div>}
            {category === "physical" && <div className={skillLinkIconStyle}><PiSphereFill color="#c6324c" /></div>}
            {category === "fourth" && <div className={skillLinkIconStyle}><PiSphereFill color="#4b8bb9" /></div>}
            {category === "fifth" && <div className={skillLinkIconStyle}><PiSphereFill color="#6bb79a" /></div>}
            {level === 1 && <div className={skillLinkLevelStyle}><FaStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></div>}
            {level === 2 && <div className={skillLinkLevelStyle}><FaStar /><FaStar /><FaRegStar /><FaRegStar /><FaRegStar /></div>}
            {level === 3 && <div className={skillLinkLevelStyle}><FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar /></div>}
            {level === 4 && <div className={skillLinkLevelStyle}><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></div>}
            {level === 5 && <div className={skillLinkLevelStyle}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>}
            <h2 className={skillLinkNameStyle}>{name}</h2>
            {acquired && <p className={skillLinkStatusAcquiredStyle}>ACQUIRED</p>}
        </NavLink>
    );
};

export default SkillLink;