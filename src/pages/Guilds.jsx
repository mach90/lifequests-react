import { Outlet } from "react-router-dom";
import GuildsMenu from "../features/guilds/GuildsMenu";

const guildsContainerStyle = "grid grid-flow-col grid-cols-12 grid-rows-12 gap-4 h-full";
const guildsOutletContainerStyle = "col-span-9 row-span-full text-white";

function Guilds() {
    return (
        <div className={guildsContainerStyle}>
            <GuildsMenu />
            <div className={guildsOutletContainerStyle}>
                <Outlet />
            </div>
        </div>
    );
};

export default Guilds;