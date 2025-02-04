import { NavLink, useParams } from "react-router-dom";
import { useContract } from "../features/contracts/useContract";
import { useUpdateContract } from "../features/contracts/useUpdateContract";
import LoadingSpinner from "../ui/LoadingSpinner";
import QuestGuilds from "../features/quests/QuestGuilds";
import { FaCheckCircle } from "react-icons/fa";

const contractContainerStyle = "relative bg-variant2/50 col-span-8 row-span-full flex justify-start items-center flex-col rounded-lg border-4 border-variant2";
const contractTitleStyle = "bg-variant2 w-full text-center text-base font-bold text-white py-1 px-2 uppercase";
const contractStatusStampStyle = "absolute bottom-0 right-0 p-8 text-variant2";

function Contract() {
    const { contractId } = useParams();
    // const [searchParams] = useSearchParams();
    const { isLoading, contract, error } = useContract(contractId);
    const { isUpdating, updateContract } = useUpdateContract();
    
    if(isLoading) return <LoadingSpinner size="lg" />

    const handleStatusUpdate = () => {
        const newStatus = "finished";
        const finishedAt = new Date(Date.now()).toISOString();
        console.log(finishedAt)
        updateContract({ 
            contractId, 
            status: newStatus,
            finishedAt
        });
    };

    return (
        <div className={contractContainerStyle}>
            <h2 className={contractTitleStyle}>Contract</h2>
            <div>
                <div>THIS CONTRACT IS FOR THE QUEST: {contract?.quest?.name}</div>
                <div>THE QUEST ID IS: {contract?.quest?.id}</div>
                <NavLink to={`/quests/${contract?.quest?.id}`}>🔗LINK TO THE QUEST</NavLink>
                <div>THIS CONTRACT STATUS IS: {contract?.status}</div>
                <div>CREATED: {contract?.createdAt}</div>
                <div>FINISHED: {contract?.finishedAt}</div>
                <QuestGuilds questId={contract?.quest?.id} />
            </div>
            <div>
            {contract.status === "active" && <button className="p-2 bg-amber-400 text-black rounded-md cursor-pointer hover:bg-amber-300" onClick={handleStatusUpdate} disabled={isUpdating}>
                Mark this contract as finished
            </button>}
            CONTRACT on complete = updateMe (xp, money, attributes)
            </div>
            {contract.status === "finished" && <div className={contractStatusStampStyle}>FINISHED <FaCheckCircle size={96} /></div>}
        </div>
    );
};

export default Contract;