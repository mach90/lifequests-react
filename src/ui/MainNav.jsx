import { NavLink } from "react-router-dom";
import { useLogout } from "../features/authentication/useLogout";
import { MdLogout } from "react-icons/md";
import { FaScroll } from "react-icons/fa";
import { BsBackpack4Fill } from "react-icons/bs";
import { ImTree } from "react-icons/im";
import { FaGear, FaHouseFlag, FaPerson } from "react-icons/fa6";

const mainNavContainerStyle = "bg-container rounded-lg flex flex-row gap-4 justify-end items-center px-6 py-2 text-slate-200";
const mainNavLinkStyle = "flex flex-col justify-center items-center hover:text-variant1 border-b-4 border-gray-800 hover:border-variant1 w-20";
const mainNavLinkActiveStyle = "flex flex-col justify-center items-center text-variant1 border-b-4 border-variant1 w-20";
const mainNavSettingsStyle = "ml-4 hover:text-yellow-400";
const mainNavSettingsActiveStyle = "ml-4 text-yellow-400";
const mainNavLogoutStyle = "ml-4 hover:text-red-500";

function MainNav() {
    const {logout, isLoading} = useLogout();

    function handleLogout() {
        logout();
    }

    return (
        <nav className={mainNavContainerStyle}>
            <NavLink to="character" className={({ isActive }) => isActive ? mainNavLinkActiveStyle : mainNavLinkStyle}><FaPerson /> Character</NavLink>
            <NavLink to="skills" className={({ isActive }) => isActive ? mainNavLinkActiveStyle : mainNavLinkStyle}><ImTree /> Skills</NavLink>
            <NavLink to="guilds" className={({ isActive }) => isActive ? mainNavLinkActiveStyle : mainNavLinkStyle}><FaHouseFlag /> Guilds</NavLink>
            <NavLink to="quests" className={({ isActive }) => isActive ? mainNavLinkActiveStyle : mainNavLinkStyle}><FaScroll /> Quests</NavLink>
            <NavLink to="inventory" className={({ isActive }) => isActive ? mainNavLinkActiveStyle : mainNavLinkStyle}><BsBackpack4Fill /> Inventory</NavLink>
            <NavLink to="account" className={({ isActive }) => isActive ? mainNavSettingsActiveStyle : mainNavSettingsStyle}><FaGear size={24}/></NavLink>
            <button onClick={handleLogout} className={mainNavLogoutStyle} disabled={isLoading}><MdLogout size={24}/></button>
        </nav>
    );
};

export default MainNav;
