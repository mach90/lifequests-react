import { useState } from "react";
import { getGuilds } from "../services/apiGuilds";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../ui/LoadingSpinner";

function Guilds() {
    const [currentGuild, setCurrentGuild] = useState(null);

    const { isLoading, data, error } = useQuery({
        queryKey: ["guild"],
        queryFn: getGuilds,
    });

    if(isLoading) return <LoadingSpinner />

    return (
        <div className="grid grid-flow-col grid-cols-12 grid-rows-12 p-4 gap-4 h-full">

            <div className="bg-stone-900 col-span-3 row-span-full overflow-scroll p-4">
                <div className="flex flex-col gap-2">
                    {data.map(guild => <button key={guild._id} className="bg-green-800 p-1" onClick={() => setCurrentGuild(guild)}>{guild.name}</button>)}
                </div>
            </div>

            {currentGuild && <div className="bg-stone-900 col-span-6 row-span-1 text-gray-500 flex justify-center items-center">{currentGuild.name}</div>}

            {currentGuild && <div className="relative bg-stone-900 col-span-6 row-span-6 text-gray-500 flex justify-center items-center"><h1 className="z-10">Guild interactive character</h1> <img className="absolute inset-0 h-full w-full" src={currentGuild.imageCover ? `http://127.0.0.1:3000/img/guilds/${currentGuild.imageCover}` : "http://127.0.0.1:3000/img/guilds/default-cover.jpg"} /></div>}

            {currentGuild && <div className="bg-stone-900 col-span-6 row-span-5 text-gray-500 flex justify-center items-center">Chatbot to ask advices</div>}

            {currentGuild && <div className="bg-stone-900 col-span-3 row-span-6 text-gray-500 flex justify-center items-center">{currentGuild ?currentGuild.description : "NO"}</div>}

            {currentGuild && <div className="bg-stone-900 col-span-3 row-span-4 text-gray-500 flex justify-center items-center">Guild progress (level)</div>}

            {currentGuild && <div className="bg-stone-900 col-span-3 row-span-2 text-gray-500 flex justify-center items-center">See Quests</div>}

        </div>
    );
};

export default Guilds;