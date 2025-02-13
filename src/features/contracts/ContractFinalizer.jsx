import { useQuest } from "../quests/useQuest";
import { useUpdateContract } from "../contracts/useUpdateContract";
import { useUpdateUser } from "../authentication/useUpdateUser";
import toast from "react-hot-toast";
import LoadingSpinner from "../../ui/LoadingSpinner";
import { useUpdateCharacter } from "../character/useUpdateCharacter";
import QuestReward from "../quests/QuestReward";
import { useUpdateOrCreateContractRelatedProgress } from "../progress/useUpdateOrCreateContractRelatedProgress";

const questRewardStyle = "flex flex-col gap-1 w-full";
const questXpStyle = "font-bold text-sm text-white";
const questMoneyStyle = "font-bold text-sm text-white";
const questAttributesStyle = "flex flex-row gap-2 items-center text-sm";
const questAttributeKeyStyle = "uppercase font-bold text-white text-sm";
const questAttributeValueStyle = "font-bold text-green2";

function ContractFinalizer({contractId, contractStatus, questId}) {
    const {isLoading, quest, error: errorFromQuest} = useQuest(questId);
    const {isUpdating: isUpdatingContract, updateContract } = useUpdateContract();
    const {isUpdatingCharacter, updateCharacter} = useUpdateCharacter();
    const {updateRelatedProgress, isUpdatingRelatedProgress, error} = useUpdateOrCreateContractRelatedProgress();

    const handleStatusUpdate = () => {
        const newStatus = "finished";
        const finishedAt = new Date(Date.now()).toISOString();
        updateContract({ 
            contractId, 
            status: newStatus,
            finishedAt
        });
        updateCharacter({
            "money": quest?.reward?.money,
            "experience": quest?.reward?.experience,
            "attributes": quest?.reward?.attributes
        });
        updateRelatedProgress({
            contractId,
            progressData: {
                experience: quest?.reward?.experience
            }
        });
        toast.success("Contract complete !");
        {quest?.reward?.money && toast.success(`Money: ${quest.reward.money}`)};
        {quest?.reward?.experience && toast.success(`Experience: ${quest.reward.experience}`)};
        {quest?.reward?.attributes && Object.entries(quest.reward.attributes).filter(([key, value]) => value > 0).forEach(([key, value]) => toast.success(`${key}: ${value}`))};
    };

    if (isLoading) return <LoadingSpinner size="md" />

    console.log(quest?.guilds)

    return (
        <div className="flex flex-col gap-4 w-full justify-between">
            <QuestReward quest={quest} />
            {/* <div className={questRewardStyle}>
                <p className={questXpStyle}>+{quest?.reward?.experience} XP</p>
                <p className={questMoneyStyle}>+{quest?.reward?.money}🪙</p>
                {Object.entries(quest?.reward?.attributes).filter(([key, value]) => value > 0).map(([key, value]) => (
                    <div key={key} className={questAttributesStyle}>
                        <p className={questAttributeKeyStyle}>{key}</p>
                        <p className={questAttributeValueStyle}>+{value}</p>
                    </div>
                ))}
            </div> */}
            {contractStatus === "active" && 
                <button className="p-2 bg-green1 text-white font-bold rounded-md cursor-pointer hover:bg-green2 w-full" onClick={handleStatusUpdate} disabled={isUpdatingContract}>
                    Mark this contract as finished and claim reward
                </button>
            }
        </div>
    );
};

export default ContractFinalizer;
