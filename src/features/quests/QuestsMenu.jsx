import { useQuests } from "./useQuests";
import LoadingSpinner from "../../ui/LoadingSpinner";
import QuestLink from "./QuestLink";
import CardMenu from "../../ui/CardMenu";
import { FaScroll } from "react-icons/fa";

const questsMenuContainerStyle = "col-span-3 row-span-full";
// const questsListStyle = "overflow-scroll flex flex-col gap-2 justify-start items-center flex-col w-full p-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-800 [&::-webkit-scrollbar-thumb]:bg-variant6 [&::-webkit-scrollbar-thumb]:hover:bg-variant6 [&::-webkit-scrollbar:horizontal]:hidden";
const questsListStyle = "overflow-hidden flex flex-col gap-2 justify-start items-center flex-col w-full p-4";

function QuestsMenu() {
    const {isPending, quests, totalCount, results, error} = useQuests();

    return (
        <div className={questsMenuContainerStyle}>
            <CardMenu title="Quests" icon={FaScroll} sort="Quests" filter="Quests" pagination={true} totalCount={totalCount} results={results}>
                {isPending && <LoadingSpinner size="sm" />}

                {!isPending && <div className={questsListStyle}>
                    {quests?.map(quest => <QuestLink key={quest.id} questId={quest.id} name={quest.name} />)}
                </div>}
            </CardMenu>
        </div>
    );
};

export default QuestsMenu;