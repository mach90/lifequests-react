import SettingsMenuLink from "./SettingsMenuLink";
import CardMenu from "../../ui/CardMenu";
import { FaPlug, FaUser } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaGear } from "react-icons/fa6";

const accountMenuContainerStyle = "col-span-3 row-span-full";
const accountMenuListStyle = "flex flex-col gap-4 justify-start items-center flex-col w-full p-4";

function SettingsMenu() {
    return (
        <div className={accountMenuContainerStyle}>
            <CardMenu title="Settings" icon={FaGear}>
                <div className={accountMenuListStyle}>
                    <SettingsMenuLink to="profile"><FaUser /> Profile</SettingsMenuLink>
                    <SettingsMenuLink to="security"><RiLockPasswordFill /> Password</SettingsMenuLink>
                    <SettingsMenuLink to="admin"><FaPlug /> Account</SettingsMenuLink>
                    <SettingsMenuLink to="app-settings"><IoSettingsSharp /> App</SettingsMenuLink>
                </div>
            </CardMenu>
        </div>
    );
};

export default SettingsMenu;