import { Outlet } from "react-router-dom";

function Quests() {
    return (
        <div className="grid grid-flow-col grid-cols-12 grid-rows-12 p-4 gap-4 h-full">
            <div className="bg-variant6/50 col-span-4 row-span-full text-white flex justify-center items-center">Search quests</div>
            <Outlet />
        </div>
    );
};

export default Quests;