function QuestDetails({quest}) {
    return (
        <div className="col-span-2 row-span-1 flex flex-row gap-2 p-2 justify-between items-center">               
            <p className="uppercase">{quest?.difficulty}</p>
            <p>Duration: {quest?.duration}h</p>
        </div>
    );
};

export default QuestDetails;
