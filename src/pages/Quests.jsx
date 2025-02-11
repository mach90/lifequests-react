import { Outlet } from "react-router-dom";
import QuestsMenu from "../features/quests/QuestsMenu";

const questsContainerStyle = "grid grid-flow-col grid-cols-12 grid-rows-12 gap-4 h-full";
const questsOutletContainerStyle = "col-span-9 row-span-full text-white flex justify-center items-center";

function Quests() {
    return (
        <div className={questsContainerStyle}>
            <QuestsMenu />
            <div className={questsOutletContainerStyle}>
                <Outlet />
            </div>
        </div>
    );
};

export default Quests;