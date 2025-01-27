import { FaPlug, FaUser } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const accountMenuStyle = "bg-card flex flex-col gap-4 justify-start items-start col-span-3 row-span-6 text-white p-8 rounded-lg";
const accountMenuButtonStyle = "w-full p-2 flex flex-row gap-2 items-center border-b border-slate-800 hover:bg-variant1 text-left";

function SettingsMenu() {
    return (
        <div className={accountMenuStyle}>
            <NavLink to="profile" className={accountMenuButtonStyle}><FaUser /> Profile</NavLink>
            <NavLink to="security" className={accountMenuButtonStyle}><RiLockPasswordFill /> Password</NavLink>
            <NavLink to="admin" className={accountMenuButtonStyle}><FaPlug /> Account</NavLink>
            <NavLink to="app-settings" className={accountMenuButtonStyle}><IoSettingsSharp /> App</NavLink>
        </div>
    );
};

export default SettingsMenu;