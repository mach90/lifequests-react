import { useContracts } from "../contracts/useContracts";
import LoadingSpinner from "../../ui/LoadingSpinner";
import ContractLink from "./ContractLink";
import ContractsMenuOperations from "./ContractsMenuOperations";
import Pagination from "../../ui/Pagination";
import CardMenu from "../../ui/CardMenu";

const contractsMenuContainerStyle = "col-span-3 row-span-full";
const contractsListStyle = "overflow-scroll flex flex-col gap-2 justify-start items-center flex-col w-full p-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-800 [&::-webkit-scrollbar-thumb]:bg-variant6 [&::-webkit-scrollbar-thumb]:hover:bg-variant6 [&::-webkit-scrollbar:horizontal]:hidden";

function ContractsMenu() {
    const {isLoading, contracts, totalCount, error} = useContracts();

    if(isLoading) return <LoadingSpinner size="md" />;
    if(contracts.length === 0 || totalCount === 0) return <div className={contractsMenuContainerStyle}>No contracts</div>

    return (
        <div className={contractsMenuContainerStyle}>
            <CardMenu title="Contracts" sort="Contracts" filter="Contracts" pagination={true} totalCount={totalCount}>
                {/* <ContractsMenuOperations /> */}
                <div className={contractsListStyle}>
                    {contracts.map(contract => <ContractLink key={contract.id} contractId={contract.id} name={contract.quest.name} status={contract.status} />)}
                </div>
                {/* <Pagination totalCount={totalCount} color="variant2" /> */}
            </CardMenu>
        </div>
    );
};

export default ContractsMenu;