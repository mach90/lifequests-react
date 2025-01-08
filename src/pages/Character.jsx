function Character() {
    return (
        <div className="grid grid-flow-col grid-cols-12 grid-rows-12 p-4 gap-4 h-full">
            <div className="bg-stone-900 col-span-3 row-span-6 text-gray-500 flex justify-center items-center">Attributes</div>
            <div className="bg-stone-900 col-span-3 row-span-6 text-gray-500 flex justify-center items-center">Chart</div>
            <div className="bg-stone-900 col-span-6 row-span-4 text-gray-500 flex justify-center items-center">Stats (day/week/month/year/ever)</div>
            <div className="bg-stone-900 col-span-6 row-span-8 text-gray-500 flex justify-center items-center">Guilds progress (filters/sort)</div>
            <div className="bg-stone-900 col-span-3 row-span-full text-gray-500 flex justify-center items-center">Tracked Quests</div>
        </div>
    );
};

export default Character;
