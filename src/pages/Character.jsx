import { useQuery } from "@tanstack/react-query";
import { getMe } from "../services/apiAuth";

function Character() {
    const { isLoading, data, error } = useQuery({
        queryKey: ["user"],
        queryFn: getMe,
    });

    return (
        <div className="grid grid-flow-col grid-cols-12 grid-rows-12 p-4 gap-4 h-full">
            <div className="bg-stone-900 col-span-3 row-span-6 text-gray-500 flex justify-center items-center flex-col">
                <li>
                    <ul>STR {data.attributes.strength}</ul>
                    <ul>STA {data.attributes.stamina}</ul>
                    <ul>DEX {data.attributes.dexterity}</ul>
                    <ul>SPD {data.attributes.speed}</ul>
                    <ul>VIT {data.attributes.vitality}</ul>
                    <ul>AGI {data.attributes.agility}</ul>
                </li>
                <li>
                    <ul>INT {data.attributes.intelligence}</ul>
                    <ul>CHA {data.attributes.charisma}</ul>
                    <ul>WIS {data.attributes.wisdom}</ul>
                    <ul>PER {data.attributes.perception}</ul>
                    <ul>FOC {data.attributes.focus}</ul>
                    <ul>WIL {data.attributes.willpower}</ul>
                </li>
            </div>
            <div className="bg-stone-900 col-span-3 row-span-6 text-gray-500 flex justify-center items-center">Chart</div>
            <div className="bg-stone-900 col-span-6 row-span-4 text-gray-500 flex justify-center items-center">Stats (day/week/month/year/ever)</div>
            <div className="bg-stone-900 col-span-6 row-span-8 text-gray-500 flex justify-center items-center">Guilds progress (filters/sort)</div>
            <div className="bg-stone-900 col-span-3 row-span-full text-gray-500 flex justify-center items-center">Tracked Quests</div>
        </div>
    );
};

export default Character;
