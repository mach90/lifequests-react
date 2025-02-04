import { useContracts } from "../contracts/useContracts";
import LoadingSpinner from "../../ui/LoadingSpinner";
import ContractLink from "./ContractLink";
import ContractsMenuOperations from "./ContractsMenuOperations";
import Pagination from "../../ui/Pagination";

const contractsMenuStyle = "bg-variant2/50 col-span-4 row-span-full flex justify-start items-center flex-col rounded-lg border-4 border-variant2";
const contractsMenuTitleStyle = "bg-variant2 w-full text-center text-base font-bold text-white py-1 px-2 uppercase";
const contractsListStyle = "overflow-scroll flex flex-col gap-2 justify-start items-start flex-col w-full h-full p-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-800 [&::-webkit-scrollbar-thumb]:bg-variant2 [&::-webkit-scrollbar-thumb]:hover:bg-variant2 [&::-webkit-scrollbar:horizontal]:hidden";

function ContractsMenu() {
    const {isLoading, contracts, totalCount, error} = useContracts();

    if(isLoading) return <LoadingSpinner size="md" />;
    if(contracts.length === 0 || totalCount === 0) return <div className={contractsMenuStyle}>No contracts</div>

    return (
        <div className={contractsMenuStyle}>
            <h2 className={contractsMenuTitleStyle}>My Contracts</h2>
            {/* <div>- sort (name asc-desc) or (xp ..................)
            - filter (guild) or (company) and (active) or (finished)
            - paginate</div> */}
            <ContractsMenuOperations />
            <div className={contractsListStyle}>
                {contracts.map(contract => <ContractLink key={contract.id} contractId={contract.id} name={contract.quest.name} status={contract.status} />)}
            </div>
            <Pagination totalCount={totalCount} color="variant2" />
        </div>
    );
};

export default ContractsMenu;