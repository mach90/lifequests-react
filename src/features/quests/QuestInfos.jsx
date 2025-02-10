function QuestInfos({quest, serverUrl}) {
    return (
        <div className="col-span-4 row-span-7 flex flex-row border-r border-main2 pr-4">
            <div className="col-span-2 h-full flex flex-col gap-8">
                <img src={`${serverUrl}/img/quests/${quest?.imageCover}`} alt="Quest image cover" className="w-full" />
                <p>{quest?.summary}</p>
                <p>{quest?.description}</p>
            </div>
            {/* <div className="flex flex-col gap-4 w-max items-center justify-center bg-red-800">
                <img src={`${serverUrl}/img/quests/${quest?.images[0]}`} alt="Quest image 001" className="h-40" />
                <img src={`${serverUrl}/img/quests/${quest?.images[1]}`} alt="Quest image 002" className="h-40" />
                <img src={`${serverUrl}/img/quests/${quest?.images[2]}`} alt="Quest image 003" className="h-40" />
            </div> */}
        </div>
    );
};

export default QuestInfos;
