import { Outlet } from "react-router-dom";
import ContractsMenu from "../features/contracts/ContractsMenu";

const contractsContainerStyle = "grid grid-flow-col grid-cols-12 grid-rows-12 gap-4 h-full";
const contractsOutletContainerStyle = "col-span-9 row-span-full text-white flex justify-center items-center";


function Contracts() {
    return (
        <div className={contractsContainerStyle}>
            <ContractsMenu />
            <div className={contractsOutletContainerStyle}>
                <Outlet />
            </div>
        </div>
    );
};

export default Contracts;