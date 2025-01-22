import { NavLink } from "react-router-dom";
import { useLogout } from "../features/authentication/useLogout";
import { MdLogout } from "react-icons/md";
import { FaScroll } from "react-icons/fa";
import { BsBackpack4Fill } from "react-icons/bs";
import { ImTree } from "react-icons/im";
import { FaGear, FaHouseFlag, FaPerson } from "react-icons/fa6";

const mainNavContainerStyle = "bg-container rounded-lg flex flex-row gap-4 justify-end items-center px-6 py-2 text-slate-200";
const mainNavLinkStyle = "flex flex-col justify-center items-center hover:text-variant1 border-b-4 border-gray-800 hover:border-variant1 w-20";
const mainNavSettingsStyle = "ml-4 hover:text-variant1";
const mainNavLogoutStyle = "ml-4 hover:text-red-500";

function MainNav() {
    const {logout, isLoading} = useLogout();

    function handleLogout() {
        logout();
    }

    return (
        <nav className={mainNavContainerStyle}>
            <NavLink to="character" className={mainNavLinkStyle}><FaPerson /> Character</NavLink>
            <NavLink to="skills" className={mainNavLinkStyle}><ImTree /> Skills</NavLink>
            <NavLink to="guilds" className={mainNavLinkStyle}><FaHouseFlag /> Guilds</NavLink>
            <NavLink to="quests" className={mainNavLinkStyle}><FaScroll /> Quests</NavLink>
            <NavLink to="inventory" className={mainNavLinkStyle}><BsBackpack4Fill /> Inventory</NavLink>
            <NavLink to="account" className={mainNavSettingsStyle}><FaGear size={24}/></NavLink>
            <button onClick={handleLogout} className={mainNavLogoutStyle} disabled={isLoading}><MdLogout size={24}/></button>
        </nav>
    );
};

export default MainNav;
