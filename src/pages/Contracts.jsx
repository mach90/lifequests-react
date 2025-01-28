import { Outlet } from "react-router-dom";
import ContractsMenu from "../features/contracts/ContractsMenu";

const contractsContainerStyle = "grid grid-flow-col grid-cols-12 grid-rows-12 p-4 gap-4 h-full";

function Contracts() {
    return (
        <div className={contractsContainerStyle}>
            <ContractsMenu />
            <Outlet />
        </div>
    );
};

export default Contracts;