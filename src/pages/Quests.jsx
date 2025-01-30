import { Outlet } from "react-router-dom";
import QuestsMenu from "../features/quests/QuestsMenu";

const questsContainerStyle = "grid grid-flow-col grid-cols-12 grid-rows-12 p-4 gap-4 h-full";
const guildsOutletContainerStyle = "col-span-10 row-span-full text-white flex justify-center items-center";

function Quests() {
    return (
        <div className={questsContainerStyle}>
            <QuestsMenu />
            <div className={guildsOutletContainerStyle}>
                <Outlet />
            </div>
        </div>
    );
};

export default Quests;