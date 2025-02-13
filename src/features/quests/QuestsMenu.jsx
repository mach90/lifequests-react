import { useQuests } from "./useQuests";
import LoadingSpinner from "../../ui/LoadingSpinner";
import QuestLink from "./QuestLink";
import CardMenu from "../../ui/CardMenu";
import { FaScroll } from "react-icons/fa";

const questsMenuContainerStyle = "col-span-3 row-span-full";
const questsListStyle = "overflow-scroll flex flex-col gap-2 justify-start items-center flex-col w-full p-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-800 [&::-webkit-scrollbar-thumb]:bg-variant6 [&::-webkit-scrollbar-thumb]:hover:bg-variant6 [&::-webkit-scrollbar:horizontal]:hidden";

function QuestsMenu() {
    const {isLoading, quests, totalCount, results, error} = useQuests();

    // console.log(quests.data.data)

    if(isLoading) return <LoadingSpinner size="lg" />

    return (
        <div className={questsMenuContainerStyle}>
            <CardMenu title="Quests" icon={FaScroll} sort="Quests" filter="Quests" pagination={true} totalCount={totalCount} results={results}>
                {/* <QuestsMenuOperations /> */}
                <div className={questsListStyle}>
                    {quests.map(quest => <QuestLink key={quest.id} questId={quest.id} name={quest.name} />)}
                </div>
                {/* <Pagination totalCount={totalCount} results={results} /> */}
            </CardMenu>
        </div>
    );
};

export default QuestsMenu;