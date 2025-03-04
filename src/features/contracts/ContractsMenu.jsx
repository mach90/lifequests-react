import { useContracts } from "../contracts/useContracts";
import LoadingSpinner from "../../ui/LoadingSpinner";
import ContractLink from "./ContractLink";
import CardMenu from "../../ui/CardMenu";
import { FaFileContract } from "react-icons/fa6";

const contractsMenuContainerStyle = "col-span-3 row-span-full";
// const contractsListStyle = "overflow-scroll flex flex-col gap-2 justify-start items-center flex-col w-full p-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-800 [&::-webkit-scrollbar-thumb]:bg-variant6 [&::-webkit-scrollbar-thumb]:hover:bg-variant6 [&::-webkit-scrollbar:horizontal]:hidden";
const contractsListStyle = "overflow-hidden flex flex-col gap-2 justify-start items-center flex-col w-full p-4";

function ContractsMenu() {
    const { isPending, contracts, totalCount, error } = useContracts();

    return (
        <div className={contractsMenuContainerStyle}>
            <CardMenu title="Contracts" icon={FaFileContract} sort="Contracts" filter="Contracts" pagination={true} totalCount={totalCount}>
                {isPending && <LoadingSpinner size="sm" />}

                {!isPending && <div className={contractsListStyle}>
                    {contracts?.map(contract => <ContractLink key={contract.id} contractId={contract.id} name={contract.quest.name} status={contract.status} />)}
                </div>}
            </CardMenu>
        </div>
    );
};

export default ContractsMenu;