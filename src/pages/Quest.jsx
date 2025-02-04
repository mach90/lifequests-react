import { useParams } from "react-router-dom";
import { useQuest } from "../features/quests/useQuest";
import { useCreateContract } from "../features/contracts/useCreateContract";
import LoadingSpinner from "../ui/LoadingSpinner";
import QuestGuilds from "../features/quests/QuestGuilds";

const serverUrl = import.meta.env.VITE_SERVER_URL;

const questContainerStyle = "grid grid-flow-col grid-cols-8 grid-rows-12 gap-4 text-white w-full h-full";
const questCardStyle = "bg-variant6/50 col-span-5 row-span-full flex justify-start items-center flex-col rounded-lg border-4 border-variant6";
const questCard2Style = "bg-variant6/50 col-span-3 row-span-9 flex justify-start items-center flex-col rounded-lg border-4 border-variant6";
const questCard3Style = "bg-variant6/50 col-span-3 row-span-3 flex justify-start items-center flex-col rounded-lg border-4 border-variant6";
const questTitleStyle = "bg-variant6 w-full text-center text-base font-bold text-white py-1 px-2 uppercase";
const questInfosStyle = "overflow-scroll flex flex-col gap-2 justify-start items-start flex-col w-full h-full p-8 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-800 [&::-webkit-scrollbar-thumb]:bg-variant6 [&::-webkit-scrollbar-thumb]:hover:bg-variant6 [&::-webkit-scrollbar:horizontal]:hidden"
const questRewardStyle = "p-6 flex flex-col gap-1 w-full";
const questXpStyle = "font-bold";
const questMoneyStyle = "font-bold";
const questAttributesStyle = "flex flex-row gap-2 items-center";
const questAttributeKeyStyle = "uppercase font-bold text-white text-sm";
const questAttributeValueStyle = "font-bold text-green-400";

function Quest() {
    const { questId } = useParams();
    const {isLoading, quest, error} = useQuest(questId);
    
    const createContract = useCreateContract();

    const handleCreateContract = (qId) => {
        createContract.mutate(qId);
    };

    if(isLoading) return <LoadingSpinner size="lg" />

    console.log(quest)
    console.log(`${serverUrl}/quests/${quest?.imageCover}`)

    return (
        <div className={questContainerStyle}>
            <div className={questCardStyle}>
                <h2 className={questTitleStyle}>Quest Description</h2>
                <div className={questInfosStyle}>
                    <img src={`${serverUrl}/img/quests/${quest?.imageCover}`} alt="Quest image cover" className="h-40 w-full" />
                    <h3 className="text-xl font-bold">{quest?.name}</h3>
                    <p>{quest?.difficulty}</p>
                    <p>{quest?.duration}</p>
                    <p>{quest?.summary}</p>
                    <p>{quest?.description}</p>
                    <button onClick={() => handleCreateContract(questId)} disabled={createContract.isPending} className="p-2 bg-gray-500 rounded-md hover:bg-gray-300 cursor-pointer">CREATE CONTRACT</button>
                </div>
            </div>
            <div className={questCard2Style}>
                <h2 className={questTitleStyle}>Reward</h2>
                <div className={questRewardStyle}>
                    <p className={questXpStyle}>+{quest?.reward?.experience} XP</p>
                    <p className={questMoneyStyle}>+{quest?.reward?.money}🪙</p>
                    {Object.entries(quest?.reward?.attributes).map(([key, value]) => (
                        <div key={key} className={questAttributesStyle}>
                            <p className={questAttributeKeyStyle}>{key}</p>
                            <p className={questAttributeValueStyle}>+{value}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={questCard3Style}>
                <h2 className={questTitleStyle}>Guilds</h2>
                <QuestGuilds questId={quest?.id} />
            </div>
        </div>
    );
};

export default Quest;
