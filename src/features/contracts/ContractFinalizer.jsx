import { useQuest } from "../quests/useQuest";
import { useUpdateContract } from "../contracts/useUpdateContract";
import { useUpdateCharacter } from "../character/useUpdateCharacter";
import { useUpdateOrCreateContractRelatedProgress } from "../progress/useUpdateOrCreateContractRelatedProgress";
import { useUpdateSkillset } from "../skillsets/useUpdateSkillset";
import LoadingSpinner from "../../ui/LoadingSpinner";
import Modal from "../../ui/Modal";
import Confirm from "../../ui/Confirm";
import Button from "../../ui/Button";
import QuestReward from "../quests/QuestReward";
import toast from "react-hot-toast";

function ContractFinalizer({contractId, contractStatus, questId}) {
    const {isPending, quest, error: errorQuest} = useQuest(questId);
    const {isPending: isUpdatingContract, updateContract, error: errorUpdatingContract } = useUpdateContract();
    const {isUpdatingCharacter, updateCharacter, error: errorUpdatingCharacter} = useUpdateCharacter();
    const {isUpdatingRelatedProgress, updateRelatedProgress, error: errorUpdatingRelatedProgress} = useUpdateOrCreateContractRelatedProgress();
    const {isPending: isUpdadingSkillset, updateSkillset, error: errorUpdatingSkillset} = useUpdateSkillset();

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

        updateSkillset({
            "skills": quest?.reward?.skills
        });

        toast.success("Contract complete !");
        {quest?.reward?.money && toast.success(`Money: ${quest.reward.money}`)};
        {quest?.reward?.experience && toast.success(`Experience: ${quest.reward.experience}`)};
        {quest?.reward?.attributes && Object.entries(quest.reward.attributes).filter(([key, value]) => value > 0).forEach(([key, value]) => toast.success(`${key}: ${value}`))};
        {quest?.reward?.skills?.map(skill => toast.success(skill.name))};
    };

    if (isPending) return <LoadingSpinner size="md" />

    return (
        <div className="flex flex-col gap-4 w-full justify-between">
            <QuestReward quest={quest} />
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
