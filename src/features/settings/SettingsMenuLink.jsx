import { FaSquare  } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const accountMenuButtonStyle = "relative bg-main1 px-4 py-2 rounded-lg w-full h-full flex flex-row gap-4 justify-start items-center text-main4 hover:text-neutral0 duration-200 font-bold uppercase";
const accountMenuButtonActiveStyle = "relative bg-main1 px-4 py-2 rounded-lg w-full h-full flex flex-row gap-4 justify-start items-center text-neutral0 duration-200 font-bold uppercase";

function SettingsMenuLink({to, children}) {
    return (
        <div className="flex flex-row gap-1 w-full h-max items-center justify-between">
            <NavLink to={to} className={({ isActive }) => isActive ?  accountMenuButtonActiveStyle : accountMenuButtonStyle}>
                {children}
            </NavLink>
        </div>
    );
};

export default SettingsMenuLink;