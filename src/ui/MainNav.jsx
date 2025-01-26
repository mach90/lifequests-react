import { NavLink } from "react-router-dom";
import { useLogout } from "../features/authentication/useLogout";
import { MdLogout } from "react-icons/md";
import { FaScroll } from "react-icons/fa";
import { BsBackpack4Fill } from "react-icons/bs";
import { ImTree } from "react-icons/im";
import { FaGear, FaHouseFlag, FaPerson } from "react-icons/fa6";

const mainNavContainerStyle = "bg-container rounded-full shadow-inner shadow-black flex flex-row gap-2 justify-end items-center px-6 py-2 text-slate-200 border-4 border-slate-700";
const mainNavLinkStyle = "flex flex-col justify-center items-center text-slate-500 hover:text-white w-20";
const mainNavLinkIconStyle = "text-2xl p-2 rounded-full border-4 border-slate-700 mb-1 bg-radial-[at_50%_75%] from-slate-900 via-slate-800 to-slate-900 to-90%";
const mainNavLinkTextStyle = "uppercase text-xs font-bold";
const mainNavLinkActiveStyle = "flex flex-col justify-center items-center text-white w-20";
const mainNavSettingsStyle = "ml-4 text-slate-500 hover:text-white";
const mainNavSettingsActiveStyle = "ml-4 text-white";
const mainNavLogoutStyle = "ml-4 text-slate-500 hover:text-red-500 cursor-pointer";

function MainNav() {
    const {logout, isLoading} = useLogout();

    function handleLogout() {
        logout();
    }

    return (
        <nav className={mainNavContainerStyle}>
            <NavLink to="character" className={({ isActive }) => isActive ? mainNavLinkActiveStyle : mainNavLinkStyle}>
                <div className={mainNavLinkIconStyle}><FaPerson /></div> 
                <div className={mainNavLinkTextStyle}>Character</div> 
            </NavLink>
            <NavLink to="skills" className={({ isActive }) => isActive ? mainNavLinkActiveStyle : mainNavLinkStyle}>
                <div className={mainNavLinkIconStyle}><ImTree /></div>
                <div className={mainNavLinkTextStyle}>Skills</div>
            </NavLink>
            <NavLink to="guilds" className={({ isActive }) => isActive ? mainNavLinkActiveStyle : mainNavLinkStyle}>
                <div className={mainNavLinkIconStyle}><FaHouseFlag /></div> 
                <div className={mainNavLinkTextStyle}>Guilds</div>
            </NavLink>
            <NavLink to="quests" className={({ isActive }) => isActive ? mainNavLinkActiveStyle : mainNavLinkStyle}>
                <div className={mainNavLinkIconStyle}><FaScroll /></div> 
                <div className={mainNavLinkTextStyle}>Quests</div>
            </NavLink>
            <NavLink to="inventory" className={({ isActive }) => isActive ? mainNavLinkActiveStyle : mainNavLinkStyle}>
                <div className={mainNavLinkIconStyle}><BsBackpack4Fill /></div> 
                <div className={mainNavLinkTextStyle}>Inventory</div>
            </NavLink>
            <NavLink to="settings" className={({ isActive }) => isActive ? mainNavSettingsActiveStyle : mainNavSettingsStyle}>
                <FaGear size={24}/>
            </NavLink>
            <button onClick={handleLogout} className={mainNavLogoutStyle} disabled={isLoading}>
                <MdLogout size={24}/>
            </button>
        </nav>
    );
};

export default MainNav;
