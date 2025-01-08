function Quests() {
    return (
        <div className="grid grid-flow-col grid-cols-12 grid-rows-12 p-4 gap-4 h-full">
            <div className="bg-stone-900 col-span-4 row-span-full text-gray-500 flex justify-center items-center">All Quests (active/finished)</div>
            <div className="bg-stone-900 col-span-8 row-span-full text-gray-500 flex justify-center items-center">Quest description</div>
        </div>
    );
};

export default Quests;