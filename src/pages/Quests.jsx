import { Outlet } from "react-router-dom";

const questsContainerStyle = "grid grid-flow-col grid-cols-12 grid-rows-12 p-4 gap-4 h-full";
const questsCardStyle = "bg-variant6/50 col-span-3 row-span-full flex justify-start items-center flex-col rounded-lg border-4 border-variant6";
const questsTitleStyle = "bg-variant6 w-full text-center text-base font-bold text-white py-1 px-2 uppercase";

function Quests() {
    return (
        <div className={questsContainerStyle}>
            <div className={questsCardStyle}>
                <h2 className={questsTitleStyle}>All Quests</h2>
            </div>
            <Outlet />
        </div>
    );
};

export default Quests;