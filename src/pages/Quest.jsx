import { useParams } from "react-router-dom";
import { useQuest } from "../features/quests/useQuest";
import LoadingSpinner from "../ui/LoadingSpinner";
import QuestGuilds from "../features/quests/QuestGuilds";

const questContainerStyle = "grid grid-flow-col grid-cols-10 grid-rows-12 gap-4 text-white w-full h-full";
const questCardStyle = "bg-variant6/50 col-span-10 row-span-full flex justify-start items-center flex-col rounded-lg border-4 border-variant6";
const questTitleStyle = "bg-variant6 w-full text-center text-base font-bold text-white py-1 px-2 uppercase";

function Quest() {
    const { questId } = useParams();
    const {isLoading, quest, error} = useQuest(questId);

    if(isLoading) return <LoadingSpinner size="lg" />

    return (
        <div className={questContainerStyle}>
            <div className={questCardStyle}>
                <h2 className={questTitleStyle}>Quest Description</h2>
                <div>{quest?.name}</div>
                <QuestGuilds questId={quest?.id} />
            </div>
        </div>
    );
};

export default Quest;
