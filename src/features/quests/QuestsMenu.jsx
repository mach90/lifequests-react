import { useQuests } from "./useQuests";
import LoadingSpinner from "../../ui/LoadingSpinner";
import QuestLink from "./QuestLink";
import QuestsMenuOperations from "./QuestsMenuOperations";
import Pagination from "../../ui/Pagination";
import CardMenu from "../../ui/CardMenu";

const questsMenuContainerStyle = "col-span-4 row-span-full";
const questsListStyle = "overflow-scroll flex flex-col gap-2 justify-start items-center flex-col w-full p-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-800 [&::-webkit-scrollbar-thumb]:bg-variant6 [&::-webkit-scrollbar-thumb]:hover:bg-variant6 [&::-webkit-scrollbar:horizontal]:hidden";

function QuestsMenu() {
    const {isLoading, quests, totalCount, results, error} = useQuests();

    // console.log(quests.data.data)

    if(isLoading) return <LoadingSpinner size="lg" />

    return (
        <div className={questsMenuContainerStyle}>
            {/* <div>- sort (name asc-desc) or (xp ..................)
            - filter (guild) or (company) and (contract) or (no contract)
            - paginate</div> */}
            <CardMenu title="Quests">
                <QuestsMenuOperations />
                <div className={questsListStyle}>
                    {quests.map(quest => <QuestLink key={quest.id} questId={quest.id} name={quest.name} />)}
                </div>
                <Pagination totalCount={totalCount} results={results} />
            </CardMenu>
        </div>
    );
};

export default QuestsMenu;