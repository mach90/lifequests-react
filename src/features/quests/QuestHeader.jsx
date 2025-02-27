function QuestHeader({quest, hasContract, contractFinished}) {
    return (
        <div className="col-span-full row-span-1 bg-main2 flex flex-row justify-start items-center p-4 gap-4 rounded-xl">
            {hasContract && !contractFinished && <p className="bg-blue2 text-blue1 px-2 font-bold">ACTIVE</p>}
            {contractFinished && <p className="bg-green2 text-green1 px-2 font-bold">FINISHED</p>}
            <h3 className="text-xl font-bold uppercase">{quest?.name}</h3>
        </div>
    );
};

export default QuestHeader;
