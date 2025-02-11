import { FaPlug, FaUser } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import CardMenu from "../../ui/CardMenu";

const accountMenuContainerStyle = "col-span-3 row-span-full";
const accountMenuListStyle = "flex flex-col gap-4 justify-start items-center flex-col w-full p-4";
const accountMenuButtonStyle = "bg-main3 px-4 py-2 rounded-xl w-full flex flex-row gap-4 justify-start items-center text-main4 hover:text-neutral0 duration-200 font-medium uppercase text-base";
const accountMenuButtonActiveStyle = "bg-main3 px-4 py-2 rounded-xl w-full flex flex-row gap-4 justify-start items-center text-neutral0 duration-200 font-medium uppercase text-base";

function SettingsMenu() {
    return (
        <div className={accountMenuContainerStyle}>
            <CardMenu title="Menu">
                <div className={accountMenuListStyle}>
                    <NavLink to="profile" className={({ isActive }) => isActive ?  accountMenuButtonActiveStyle : accountMenuButtonStyle}><FaUser /> Profile</NavLink>
                    <NavLink to="security" className={({ isActive }) => isActive ?  accountMenuButtonActiveStyle : accountMenuButtonStyle}><RiLockPasswordFill /> Password</NavLink>
                    <NavLink to="admin" className={({ isActive }) => isActive ?  accountMenuButtonActiveStyle : accountMenuButtonStyle}><FaPlug /> Account</NavLink>
                    <NavLink to="app-settings" className={({ isActive }) => isActive ?  accountMenuButtonActiveStyle : accountMenuButtonStyle}><IoSettingsSharp /> App</NavLink>
                </div>
            </CardMenu>
        </div>
    );
};

export default SettingsMenu;