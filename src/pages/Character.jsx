import { useQuery } from "@tanstack/react-query";
import { getMe } from "../services/apiAuth";
import { FaCircle } from "react-icons/fa";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts";

function Character() {
    const { isLoading, data, error } = useQuery({
        queryKey: ["user"],
        queryFn: getMe,
    });

    console.log(data)

    const chartData = [
        { 'attribute': 'STR', 'value': data.attributes.strength }, 
        { 'attribute': 'STA', 'value': data.attributes.stamina },
        { 'attribute': 'DEX', 'value': data.attributes.dexterity },
        { 'attribute': 'SPD', 'value': data.attributes.speed },
        { 'attribute': 'VIT', 'value': data.attributes.vitality },
        { 'attribute': 'AGI', 'value': data.attributes.agility },
        { 'attribute': 'INT', 'value': data.attributes.intelligence },
        { 'attribute': 'CHA', 'value': data.attributes.charisma },
        { 'attribute': 'WIS', 'value': data.attributes.wisdom },
        { 'attribute': 'PER', 'value': data.attributes.perception },
        { 'attribute': 'FOC', 'value': data.attributes.focus },
        { 'attribute': 'WIL', 'value': data.attributes.willpower },
    ];

    return (
        <div className="grid grid-flow-col grid-cols-12 grid-rows-12 p-4 gap-4 h-full">
            <div className="bg-card col-span-3 row-span-6 text-white flex justify-center items-center flex-col">
                <div className="w-48">
                    <div className="flex flex-row justify-between border-b border-slate-900"><div className="flex flex-row gap-2 items-center justify-start"><div className="px-1 rounded-lg text-xs text-center italic w-10 text-gray-900 font-black shadow-md bg-[#cb364d]">STR</div> Strength</div> <div className="italic font-bold">{data.attributes.strength}</div></div>
                    <div className="flex flex-row justify-between border-b border-slate-900"><div className="flex flex-row gap-2 items-center justify-start"><div className="px-1 rounded-lg text-xs text-center italic w-10 text-gray-900 font-black shadow-md bg-[#e96745]">STA</div> Stamina</div> <div className="italic font-bold">{data.attributes.stamina}</div></div>
                    <div className="flex flex-row justify-between border-b border-slate-900"><div className="flex flex-row gap-2 items-center justify-start"><div className="px-1 rounded-lg text-xs text-center italic w-10 text-gray-900 font-black shadow-md bg-[#e7f49d]">DEX</div> Dexterity</div> <div className="italic font-bold">{data.attributes.dexterity}</div></div>
                    <div className="flex flex-row justify-between border-b border-slate-900"><div className="flex flex-row gap-2 items-center justify-start"><div className="px-1 rounded-lg text-xs text-center italic w-10 text-gray-900 font-black shadow-md bg-[#fade93]">SPD</div> Speed</div> <div className="italic font-bold">{data.attributes.speed}</div></div>
                    <div className="flex flex-row justify-between border-b border-slate-900"><div className="flex flex-row gap-2 items-center justify-start"><div className="px-1 rounded-lg text-xs text-center italic w-10 text-gray-900 font-black shadow-md bg-[#9a0040]">VIT</div> Vitality</div> <div className="italic font-bold">{data.attributes.vitality}</div></div>
                    <div className="flex flex-row justify-between border-b border-slate-900"><div className="flex flex-row gap-2 items-center justify-start"><div className="px-1 rounded-lg text-xs text-center italic w-10 text-gray-900 font-black shadow-md bg-[#f2a867]">AGI</div> Agility</div> <div className="italic font-bold">{data.attributes.agility}</div></div>
                    <div className="flex flex-row justify-between border-b border-slate-900"><div className="flex flex-row gap-2 items-center justify-start"><div className="px-1 rounded-lg text-xs text-center italic w-10 text-gray-900 font-black shadow-md bg-[#5c529e]">INT</div> Intelligence</div> <div className="italic font-bold">{data.attributes.intelligence}</div></div>
                    <div className="flex flex-row justify-between border-b border-slate-900"><div className="flex flex-row gap-2 items-center justify-start"><div className="px-1 rounded-lg text-xs text-center italic w-10 text-gray-900 font-black shadow-md bg-[#d76fa9]">CHA</div> Charisma</div> <div className="italic font-bold">{data.attributes.charisma}</div></div>
                    <div className="flex flex-row justify-between border-b border-slate-900"><div className="flex flex-row gap-2 items-center justify-start"><div className="px-1 rounded-lg text-xs text-center italic w-10 text-gray-900 font-black shadow-md bg-[#64b799]">WIS</div> Wisdom</div> <div className="italic font-bold">{data.attributes.wisdom}</div></div>
                    <div className="flex flex-row justify-between border-b border-slate-900"><div className="flex flex-row gap-2 items-center justify-start"><div className="px-1 rounded-lg text-xs text-center italic w-10 text-gray-900 font-black shadow-md bg-[#448aba]">PER</div> Perception</div> <div className="italic font-bold">{data.attributes.perception}</div></div>
                    <div className="flex flex-row justify-between border-b border-slate-900"><div className="flex flex-row gap-2 items-center justify-start"><div className="px-1 rounded-lg text-xs text-center italic w-10 text-gray-900 font-black shadow-md bg-[#b1dda9]">FOC</div> Focus</div> <div className="italic font-bold">{data.attributes.focus}</div></div>
                    <div className="flex flex-row justify-between border-b border-slate-900"><div className="flex flex-row gap-2 items-center justify-start"><div className="px-1 rounded-lg text-xs text-center italic w-10 text-gray-900 font-black shadow-md bg-[#9beae7]">WIL</div> Willpower</div> <div className="italic font-bold">{data.attributes.willpower}</div></div>
                </div>
            </div>
            <div className="bg-card col-span-3 row-span-6 text-white flex justify-center items-center">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart outerRadius="80%" width="100%" height="100%" data={chartData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="attribute" />
                        <PolarRadiusAxis angle={30}  />
                        <Radar dataKey="value" stroke="white" fill="white" fillOpacity={0.5} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
            <div className="bg-card col-span-6 row-span-4 text-white flex justify-center items-center">Stats (day/week/month/year/ever)</div>
            <div className="bg-card col-span-6 row-span-8 text-white flex justify-center items-center">Guilds progress (filters/sort)</div>
            <div className="bg-card col-span-3 row-span-full text-white flex justify-center items-center">Tracked Quests</div>
        </div>
    );
};

export default Character;
