import { NavLink } from "react-router-dom";
import { useLogout } from "../features/authentication/useLogout";
import { FaScroll } from "react-icons/fa";
import { BsBackpack4Fill } from "react-icons/bs";
import { ImTree } from "react-icons/im";
import { FaGear, FaHouseFlag, FaPerson } from "react-icons/fa6";
import { HiLogout } from "react-icons/hi";

const mainNavContainerStyle = "bg-container rounded-full shadow-inner shadow-black flex flex-row gap-2 justify-end items-center pl-6 pr-1 py-1 text-slate-200 border-4 border-slate-700";
const mainNavLinkStyle = "flex flex-col justify-center items-center text-slate-500 hover:text-white w-20";
const mainNavLinkIconStyle = "text-2xl p-2 rounded-full border-4 border-slate-700 mb-1 bg-radial-[at_50%_75%] from-slate-900 via-slate-800 to-slate-900 to-90%";
const mainNavLinkTextStyle = "uppercase text-xs font-bold";
const mainNavLinkActiveStyle = "flex flex-col justify-center items-center text-white w-20";
const mainNavOptionsContainerStyle = "bg-slate-700 flex flex-row gap-2 h-full rounded-full justify-center items-center pr-4"
const mainNavSettingsStyle = "ml-4 text-slate-400 hover:text-white";
const mainNavSettingsActiveStyle = "ml-4 text-white";
const mainNavLogoutStyle = "ml-4 text-slate-400 hover:text-red-500 cursor-pointer";
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
            <NavLink to="contracts" className={({ isActive }) => isActive ? mainNavLinkActiveStyle : mainNavLinkStyle}>
                <div className={mainNavLinkIconStyle}><FaScroll /></div> 
                <div className={mainNavLinkTextStyle}>Quests</div>
            </NavLink>
            <NavLink to="inventory" className={({ isActive }) => isActive ? mainNavLinkActiveStyle : mainNavLinkStyle}>
                <div className={mainNavLinkIconStyle}><BsBackpack4Fill /></div> 
                <div className={mainNavLinkTextStyle}>Inventory</div>
            </NavLink>
            <div className={mainNavOptionsContainerStyle}>
                <NavLink to="settings" className={({ isActive }) => isActive ? mainNavSettingsActiveStyle : mainNavSettingsStyle}>
                    <FaGear size={24}/>
                </NavLink>
                <button onClick={handleLogout} className={mainNavLogoutStyle} disabled={isLoading}>
                    <HiLogout size={24}/>
                </button>
            </div>
        </nav>
    );
};

export default MainNav;
