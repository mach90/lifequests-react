import { useQuests } from "./useQuests";
import LoadingSpinner from "../../ui/LoadingSpinner";
import QuestLink from "./QuestLink";

const questsMenuStyle = "bg-variant6/50 col-span-3 row-span-full flex justify-start items-center flex-col rounded-lg border-4 border-variant6";
const questsListTitleStyle = "bg-variant6 w-full text-center text-base font-bold text-white py-1 px-2 uppercase";
const questsListStyle = "overflow-scroll flex flex-col gap-2 justify-start items-center flex-col w-full h-full p-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-800 [&::-webkit-scrollbar-thumb]:bg-variant6 [&::-webkit-scrollbar-thumb]:hover:bg-variant6 [&::-webkit-scrollbar:horizontal]:hidden";

function QuestsMenu() {
    const {isLoading, quests, error} = useQuests();

    if(isLoading) return <LoadingSpinner size="lg" />

    return (
        <div className={questsMenuStyle}>
            <h2 className={questsListTitleStyle}>QUESTS</h2>
            <div>Filter/Sort</div>
            <div className={questsListStyle}>
                {quests.map(quest => <QuestLink key={quest.id} questId={quest.id} name={quest.name} />)}
            </div>
        </div>
    );
};

export default QuestsMenu;
