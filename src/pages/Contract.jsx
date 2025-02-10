import { NavLink, useParams } from "react-router-dom";
import { useContract } from "../features/contracts/useContract";
import ContractFinalizer from "../features/contracts/ContractFinalizer";
import LoadingSpinner from "../ui/LoadingSpinner";
import Card from "../ui/Card";
import QuestGuilds from "../features/quests/QuestGuilds";
import { FaCheckCircle, FaExternalLinkSquareAlt } from "react-icons/fa";

const contractContainerStyle = "relative col-span-8 row-span-full";
const contractTitleStyle = "bg-variant2 w-full text-center text-base font-bold text-white py-1 px-2 uppercase";
const contractDetailsStyle = "flex flex-col p-4 gap-2 w-max h-max";
const contractDetailsTitleStyle = "text-xl font-bold text-white";
const contractDetailQuestLinkStyle = "text-white/50 hover:text-white border border-white/50 hover:border-white w-max rounded-md px-2 flex flex-row gap-2 items-center";
const contractDetailDateStyle = "text-sm text-white";
const contractStatusStampStyle = "absolute bottom-0 right-0 p-8 text-xl font-black text-variant2 flex flex-col items-center";

function Contract() {
    const { contractId } = useParams();
    const { isLoading, contract, error } = useContract(contractId);
    
    if(isLoading) return <LoadingSpinner size="lg" />

    return (
        <div className={contractContainerStyle}>
            <Card title="Contract">
                <div className={contractDetailsStyle}>
                    <h3 className={contractDetailsTitleStyle}>Quest: {contract?.quest?.name}</h3>
                    <NavLink to={`/quests/${contract?.quest?.id}`} className={contractDetailQuestLinkStyle}><FaExternalLinkSquareAlt /> See quest</NavLink>
                    <div className={contractDetailDateStyle}>Creation: {contract?.createdAt ? new Date(contract.createdAt).toLocaleDateString() : ""}</div>
                    <div className={contractDetailDateStyle}>Completion: {contract?.finishedAt ? new Date(contract.finishedAt).toLocaleDateString() : "Still active"}</div>
                    <QuestGuilds questId={contract?.quest?.id} />
                    <ContractFinalizer contractId={contractId} contractStatus={contract.status} questId={contract?.quest?.id} />
                </div>
                {contract.status === "finished" && <div className={contractStatusStampStyle}>FINISHED <FaCheckCircle size={96} /></div>}
            </Card>
        </div>
    );
};

export default Contract;