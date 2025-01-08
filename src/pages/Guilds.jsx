import { useEffect, useState } from "react";

function Guilds() {
    const [guildsData, setGuildsData] = useState();

    useEffect(() => {
        const fetchGuilds = async () => {
            try {
                const response = await fetch("http://127.0.0.1:3000/api/v1/guilds");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data);
                console.log(data.data.data[0].name);

                setGuildsData(data.data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchGuilds();
        
    }, []);


    return (
        <div className="grid grid-flow-col grid-cols-12 grid-rows-12 p-4 gap-4 h-full">
            <div className="bg-stone-900 col-span-3 row-span-full overflow-scroll p-4">
                <div className="flex flex-col gap-2">
                    {guildsData && guildsData.map(guild => <div to={`/guilds/${guild._id}`} key={guild._id} className=" bg-green-800 p-1 ">{guild.name}</div>)}
                </div>
            </div>
            <div className="bg-stone-900 col-span-6 row-span-7 text-gray-500 flex justify-center items-center">Guild interactive character</div>
            <div className="bg-stone-900 col-span-6 row-span-5 text-gray-500 flex justify-center items-center">Chatbot to ask advices</div>
            <div className="bg-stone-900 col-span-3 row-span-6 text-gray-500 flex justify-center items-center">Guild description</div>
            <div className="bg-stone-900 col-span-3 row-span-4 text-gray-500 flex justify-center items-center">Guild progress (level)</div>
            <div className="bg-stone-900 col-span-3 row-span-2 text-gray-500 flex justify-center items-center">See Quests</div>
        </div>
    );
};

export default Guilds;