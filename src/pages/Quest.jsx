import { useParams } from "react-router-dom";
import { useQuest } from "../features/quests/useQuest";
import { useContracts } from "../features/contracts/useContracts";
import { useCreateContract } from "../features/contracts/useCreateContract";
import LoadingSpinner from "../ui/LoadingSpinner";
import Card from "../ui/Card";
import Modal from "../ui/Modal";
import Confirm from "../ui/Confirm";
import Button from "../ui/Button";
import QuestHeader from "../features/quests/QuestHeader";
import QuestDetails from "../features/quests/QuestDetails";
import QuestInfos from "../features/quests/QuestInfos";
import QuestGuilds from "../features/quests/QuestGuilds";
import QuestReward from "../features/quests/QuestReward";

const serverUrl = import.meta.env.VITE_SERVER_URL;

const questContainerStyle = "grid grid-flow-col grid-cols-10 grid-rows-12 gap-4 text-white w-full h-full";
const questContainerCardStyle = "col-span-full row-span-full";
const questDataContainerStyle = "grid grid-flow-col grid-cols-6 grid-rows-8 w-full h-full gap-4";

function Quest() {
    const { questId } = useParams();
    const {isLoading, quest, error} = useQuest(questId);
    
    const { isLoading: isLoadingContracts, contracts } = useContracts({
        page: 1,
        limit: 9999
    });

    const createContract = useCreateContract();
    
    const handleCreateContract = (qId) => {
        createContract.mutate(qId);
    };

    if(isLoading || isLoadingContracts) return <LoadingSpinner size="lg" />

    const hasContract = contracts.some(contract => contract.quest.id === quest.id);
    const contractFinished = contracts.some(contract => contract.quest.id === quest.id && contract.status === "finished");

    return (
        <div className={questContainerStyle}>
            <div className={questContainerCardStyle}>
                <Card title="Quest Description">
                    <div className={questDataContainerStyle}>
                        <QuestHeader quest={quest} hasContract={hasContract} contractFinished={contractFinished} />
                        <QuestInfos quest={quest} serverUrl={serverUrl} />
                        <QuestDetails quest={quest} />
                        <QuestReward quest={quest}/>
                        <QuestGuilds questId={quest?.id} />
                        {!hasContract && <Modal>
                            <Modal.Open opens="confirm-create-contract">
                                <Button type="validation" label="Create contract" />
                            </Modal.Open>
                            <Modal.Window name="confirm-create-contract">
                                <Confirm actionType="validation" resourceName="Contract creation" onConfirm={() => handleCreateContract(questId)} disabled={createContract.isPending} />
                            </Modal.Window>
                        </Modal>}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Quest;
