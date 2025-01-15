import { NavLink } from "react-router-dom";
import { useLogout } from "../features/authentication/useLogout";
import { MdLogout } from "react-icons/md";
import { FaScroll, FaUser } from "react-icons/fa";
import { BsBackpack4Fill } from "react-icons/bs";
import { ImTree } from "react-icons/im";
import { FaShield } from "react-icons/fa6";

function MainNav() {
    const {logout, isLoading} = useLogout();

    function handleLogout() {
        logout();
    }

    return (
        <nav className="bg-container rounded-lg flex flex-row gap-4 justify-end items-center px-6 py-2 text-slate-200">
            <ul><NavLink to="character" className="flex flex-col justify-center items-center hover:text-variant1"><FaUser /> Character</NavLink></ul>
            <ul><NavLink to="skills" className="flex flex-col justify-center items-center hover:text-variant1"><ImTree /> Skills</NavLink></ul>
            <ul><NavLink to="guilds" className="flex flex-col justify-center items-center hover:text-variant1"><FaShield /> Guilds</NavLink></ul>
            <ul><NavLink to="quests" className="flex flex-col justify-center items-center hover:text-variant1"><FaScroll /> Quests</NavLink></ul>
            <ul><NavLink to="inventory" className="flex flex-col justify-center items-center hover:text-variant1"><BsBackpack4Fill /> Inventory</NavLink></ul>
            <ul><button onClick={handleLogout} className="ml-4 hover:text-variant1"><MdLogout size={24}/></button></ul>
        </nav>
    );
};

export default MainNav;
