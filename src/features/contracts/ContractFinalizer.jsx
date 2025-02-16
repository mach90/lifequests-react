import { useQuest } from "../quests/useQuest";
import { useUpdateContract } from "../contracts/useUpdateContract";
import { useUpdateUser } from "../authentication/useUpdateUser";
import toast from "react-hot-toast";
import LoadingSpinner from "../../ui/LoadingSpinner";
import Modal from "../../ui/Modal";
import Confirm from "../../ui/Confirm";
import Button from "../../ui/Button";
import { useUpdateCharacter } from "../character/useUpdateCharacter";
import QuestReward from "../quests/QuestReward";
import { useUpdateOrCreateContractRelatedProgress } from "../progress/useUpdateOrCreateContractRelatedProgress";

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
            {/* {contractStatus === "active" && 
                <button className="p-2 bg-green1 text-white font-bold rounded-md cursor-pointer hover:bg-green2 w-full" onClick={handleStatusUpdate} disabled={isUpdatingContract}>
                    Mark this contract as finished and claim reward
                </button>
            } */}
            {contractStatus === "active" && <Modal>
                <Modal.Open opens="confirm-finish-contract">
                    <Button type="validation" label="Finish contract and claim reward"/>
                </Modal.Open>
                <Modal.Window name="confirm-finish-contract">
                    <Confirm actionType="validation" resourceName="Contract completion" onConfirm={handleStatusUpdate} disabled={isUpdatingContract} />
                </Modal.Window>
            </Modal>}
        </div>
    );
};

export default ContractFinalizer;
