const characterTrackedQuestsCardStyle = "bg-card col-span-4 row-span-full flex justify-start items-center flex-col rounded-lg border-4 border-variant1";
const characterTrackedQuestsTitleStyle = "bg-variant1 w-full text-center text-base font-bold text-white py-1 px-2 uppercase";

function CharacterTrackedQuests() {
    return (
        <div className={characterTrackedQuestsCardStyle}>
            <h2 className={characterTrackedQuestsTitleStyle}>Tracked Quests</h2>
        </div>
    );
};

export default CharacterTrackedQuests;
