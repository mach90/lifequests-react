import { useParams } from "react-router-dom";
import { useContract } from "../features/contracts/useContract";
import ContractDetails from "../features/contracts/ContractDetails";

const contractContainerStyle = "grid grid-flow-col grid-cols-10 grid-rows-12 gap-4 text-white w-full h-full";

function Contract() {
    const { contractId } = useParams();

    const { isPending, contract = null, error } = useContract(contractId);

    return (
        <div className={contractContainerStyle}>
            <ContractDetails contract={contract} isPending={isPending}/>
        </div>
    );
};

export default Contract;