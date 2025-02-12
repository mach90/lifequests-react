import { FaSquare  } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const accountMenuButtonStyle = "relative bg-main3 px-4 py-2 rounded-l-xl w-76 hover:w-80 h-full flex flex-row gap-4 justify-start items-center text-main4 hover:text-neutral0 duration-200 font-medium uppercase text-base z-10";
const accountMenuButtonActiveStyle = "relative bg-main3 px-4 py-2 rounded-l-xl w-full h-full flex flex-row gap-4 justify-start items-center text-neutral0 duration-200 font-medium uppercase text-base z-10";

function SettingsMenuLink({to, children}) {
    return (
        <div className="flex flex-row gap-1 w-full h-max items-center justify-between">
            <NavLink to={to} className={({ isActive }) => isActive ?  accountMenuButtonActiveStyle : accountMenuButtonStyle}>
                {children}
                <FaSquare  size={18} className="absolute text-main3 -right-3 h-full" />
            </NavLink>
            <div className="relative bg-main3 h-full w-10 z-0 rounded-r-xl">
                <FaSquare  size={24} className="absolute text-main2 -left-3 h-full" />
            </div>
        </div>
    );
};

export default SettingsMenuLink;
