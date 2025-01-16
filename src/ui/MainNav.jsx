import { NavLink } from "react-router-dom";
import { useLogout } from "../features/authentication/useLogout";
import { MdLogout } from "react-icons/md";
import { FaScroll, FaUser } from "react-icons/fa";
import { BsBackpack4Fill } from "react-icons/bs";
import { ImTree } from "react-icons/im";
import { FaShield } from "react-icons/fa6";

const mainNavContainerStyle = "bg-container rounded-lg flex flex-row gap-4 justify-end items-center px-6 py-2 text-slate-200";
const mainNavLinkStyle = "flex flex-col justify-center items-center hover:text-variant1";
const mainNavLogoutStyle = "ml-4 hover:text-red-500";

function MainNav() {
    const {logout, isLoading} = useLogout();

    function handleLogout() {
        logout();
    }

    return (
        <nav className={mainNavContainerStyle}>
            <ul><NavLink to="character" className={mainNavLinkStyle}><FaUser /> Character</NavLink></ul>
            <ul><NavLink to="skills" className={mainNavLinkStyle}><ImTree /> Skills</NavLink></ul>
            <ul><NavLink to="guilds" className={mainNavLinkStyle}><FaShield /> Guilds</NavLink></ul>
            <ul><NavLink to="quests" className={mainNavLinkStyle}><FaScroll /> Quests</NavLink></ul>
            <ul><NavLink to="inventory" className={mainNavLinkStyle}><BsBackpack4Fill /> Inventory</NavLink></ul>
            <ul><button onClick={handleLogout} className={mainNavLogoutStyle}><MdLogout size={24}/></button></ul>
        </nav>
    );
};

export default MainNav;
