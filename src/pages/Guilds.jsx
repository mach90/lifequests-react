import { useState } from "react";
import { getGuilds } from "../services/apiGuilds";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../ui/LoadingSpinner";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

function Guilds() {
    const [currentGuild, setCurrentGuild] = useState(null);
    const [company1, setCompany1] = useState(true);
    const [company2, setCompany2] = useState(true);
    const [company3, setCompany3] = useState(true);
    const [company4, setCompany4] = useState(true);
    const [company5, setCompany5] = useState(true);
    const [company6, setCompany6] = useState(true);

    const { isLoading, data, error } = useQuery({
        queryKey: ["guild"],
        queryFn: getGuilds,
    });

    if(isLoading) return <LoadingSpinner />

    return (
        <div className="grid grid-flow-col grid-cols-12 grid-rows-12 p-4 gap-4 h-full">

            <div className="bg-card col-span-3 row-span-full overflow-scroll p-4 flex flex-col gap-4
            [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-none [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-gray-400 [&::-webkit-scrollbar:horizontal]:hidden">
                <div>
                    <button className="flex flex-row gap-2 items-center justify-between text-xl font-black text-white border-b-2 border-white mb-2 w-full" onClick={() => setCompany1(!company1)}>Naturalists {company1 ? <MdOutlineArrowDropDown /> : <MdOutlineArrowDropUp />}</button>
                    {company1 && <div className="flex flex-col gap-2">
                        {data.filter(guild => guild.company?.name === "Naturalists").map(guild => <button key={guild._id} className="p-1 text-left font-semibold px-4 py-1 bg-gradient-to-r from-slate-900 hover:from-variant1 to-transparent text-white" onClick={() => setCurrentGuild(guild)}>{guild.name}</button>)}
                    </div>}
                </div>
                <div>
                    <button className="flex flex-row gap-2 items-center justify-between text-xl font-black text-white border-b-2 border-white mb-2 w-full" onClick={() => setCompany2(!company2)}>Crafters {company2 ? <MdOutlineArrowDropDown /> : <MdOutlineArrowDropUp />}</button>
                    {company2 && <div className="flex flex-col gap-2">
                        {data.filter(guild => guild.company?.name === "Crafters").map(guild => <button key={guild._id} className="p-1 text-left font-semibold px-4 py-1 bg-gradient-to-r from-slate-900 hover:from-variant1 to-transparent text-white" onClick={() => setCurrentGuild(guild)}>{guild.name}</button>)}
                    </div>}
                </div>
                <div>
                    <button className="flex flex-row gap-2 items-center justify-between text-xl font-black text-white border-b-2 border-white mb-2 w-full" onClick={() => setCompany3(!company3)}>Champions {company3 ? <MdOutlineArrowDropDown /> : <MdOutlineArrowDropUp />}</button>
                    {company3 && <div className="flex flex-col gap-2">
                        {data.filter(guild => guild.company?.name === "Champions").map(guild => <button key={guild._id} className="p-1 text-left font-semibold px-4 py-1 bg-gradient-to-r from-slate-900 hover:from-variant1 to-transparent text-white" onClick={() => setCurrentGuild(guild)}>{guild.name}</button>)}
                    </div>}
                </div>
                <div>
                    <button className="flex flex-row gap-2 items-center justify-between text-xl font-black text-white border-b-2 border-white mb-2 w-full" onClick={() => setCompany4(!company4)}>Specialists {company4 ? <MdOutlineArrowDropDown /> : <MdOutlineArrowDropUp />}</button>
                    {company4 && <div className="flex flex-col gap-2">
                        {data.filter(guild => guild.company?.name === "Specialists").map(guild => <button key={guild._id} className="p-1 text-left font-semibold px-4 py-1 bg-gradient-to-r from-slate-900 hover:from-variant1 to-transparent text-white" onClick={() => setCurrentGuild(guild)}>{guild.name}</button>)}
                    </div>}
                </div>
                <div>
                    <button className="flex flex-row gap-2 items-center justify-between text-xl font-black text-white border-b-2 border-white mb-2 w-full" onClick={() => setCompany5(!company5)}>Artists {company5 ? <MdOutlineArrowDropDown /> : <MdOutlineArrowDropUp />}</button>
                    {company5 && <div className="flex flex-col gap-2">
                        {data.filter(guild => guild.company?.name === "Artists").map(guild => <button key={guild._id} className="p-1 text-left font-semibold px-4 py-1 bg-gradient-to-r from-slate-900 hover:from-variant1 to-transparent text-white" onClick={() => setCurrentGuild(guild)}>{guild.name}</button>)}
                    </div>}
                </div>
                <div>
                    <button className="flex flex-row gap-2 items-center justify-between text-xl font-black text-white border-b-2 border-white mb-2 w-full" onClick={() => setCompany6(!company6)}>Synergists {company6 ? <MdOutlineArrowDropDown /> : <MdOutlineArrowDropUp />}</button>
                    {company6 && <div className="flex flex-col gap-2">
                        {data.filter(guild => guild.company?.name === "Synergists").map(guild => <button key={guild._id} className="p-1 text-left font-semibold px-4 py-1 bg-gradient-to-r from-slate-900 hover:from-variant1 to-transparent text-white" onClick={() => setCurrentGuild(guild)}>{guild.name}</button>)}
                    </div>}
                </div>
            </div>

            {currentGuild && <div className="col-span-6 row-span-1 text-white flex justify-between items-center">
                <h1 className="text-white font-black text-2xl">{currentGuild.name} Guild</h1>
                <h2 className="text-white font-semi-bold text-lg">{currentGuild.company.name}</h2>
            </div>}

            {currentGuild && <div className="relative bg-card col-span-6 row-span-6 text-gray-100 flex justify-center items-center"><h1 className="z-10">Guild Master avatar, semi animated, chatbot output</h1> <img className="absolute inset-0 h-full w-full object-cover object-center" src={currentGuild.imageCover ? `http://127.0.0.1:3000/img/guilds/${currentGuild.imageCover}` : "http://127.0.0.1:3000/img/guilds/default-cover.jpg"} /></div>}

            {currentGuild && <div className="bg-card col-span-6 row-span-5 text-white flex justify-center items-center">Chatbot input</div>}

            {currentGuild && <div className="bg-card col-span-3 row-span-6 text-white flex justify-center items-center">{currentGuild ?currentGuild.description : "NO"}</div>}

            {currentGuild && <div className="bg-card col-span-3 row-span-4 text-white flex justify-center items-center">Guild progress (level)</div>}

            {currentGuild && <div className="bg-card col-span-3 row-span-2 text-white flex justify-center items-center">See Quests</div>}

        </div>
    );
};

export default Guilds;