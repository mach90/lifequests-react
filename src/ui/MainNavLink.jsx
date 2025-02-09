import { NavLink } from "react-router-dom";

import { FaFileContract } from "react-icons/fa6";
import { BsBackpack4Fill } from "react-icons/bs";
import { ImTree } from "react-icons/im";
import { FaGear, FaHouseFlag, FaPerson } from "react-icons/fa6";
import { HiLogout } from "react-icons/hi";
import { FaScroll } from "react-icons/fa";

const mainNavLinkStyle = "w-20 h-full flex flex-col gap-1 items-center justify-center border-b-2 border-b-transparent text-main4 transition duration-200 hover:text-neutral0";
const mainNavLinkActiveStyle = "w-20 h-full flex flex-col gap-1 items-center justify-center border-b-2 border-b-green2 text-neutral0 transition duration-200 bg-linear-to-t from-main3 to-transparent";
const mainNavLinkIconStyle = "h-7 w-7";
const mainNavLinkTitleStyle = "uppercase text-xs font-bold";

function MainNavLink({ to, icon, onClick }) {
    if(!to) {
        return <NavLink to={to} onClick={onClick} className={mainNavLinkStyle}>
            <div className={mainNavLinkIconStyle}>
                {icon === "HiLogout" && <HiLogout size={24} />}
            </div> 
        </NavLink>
    }

    return (
        <NavLink to={to} onClick={onClick} className={({ isActive } ) => isActive ? mainNavLinkActiveStyle : mainNavLinkStyle}>
            <div className={mainNavLinkIconStyle}>
                {icon === "FaPerson" && <FaPerson size={28} />}
                {icon === "ImTree" && <ImTree size={28} />}
                {icon === "FaScroll" && <FaScroll size={28} />}
                {icon === "FaHouseFlag" && <FaHouseFlag size={28} />}
                {icon === "FaFileContract" && <FaFileContract size={28}/>}
                {icon === "BsBackpack4Fill" && <BsBackpack4Fill size={28} />}
                {icon === "FaGear" && <FaGear size={24} />}
                {icon === "HiLogout" && <HiLogout size={24} />}
            </div> 
            {to !== "settings" && to !== "logout" && <p className={mainNavLinkTitleStyle}>{to}</p>}
        </NavLink>
    );
};

export default MainNavLink;