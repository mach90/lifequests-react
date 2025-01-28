import { useContracts } from "../contracts/useContracts";
import LoadingSpinner from "../../ui/LoadingSpinner";

const contractsMenuStyle = "bg-variant2/50 col-span-4 row-span-full text-white flex  flex-col justify-center items-center";

function ContractsMenu() {
    const {isLoading, contracts, error} = useContracts();

    if(isLoading) return <LoadingSpinner size="md" />;
    if(contracts.length === 0) return <div className={contractsMenuStyle}>No contracts</div>

    return (
        <div className={contractsMenuStyle}>
            {contracts && contracts.map(contract => <p key={contract.id}>{contract.quest.name}</p>)}
        </div>
    );
};

export default ContractsMenu;
