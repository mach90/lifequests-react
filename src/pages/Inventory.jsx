import { Outlet } from "react-router-dom";
import InventoryMenu from "../features/inventory/InventoryMenu";

const inventoryContainerStyle = "grid grid-flow-col grid-cols-12 grid-rows-12 gap-4 h-full";
const inventoryOutletContainerStyle = "col-span-10 row-span-full text-white flex justify-center items-center";

function Inventory() {
    return (
        <div className={inventoryContainerStyle}>
            <InventoryMenu />
            <div className={inventoryOutletContainerStyle}>
                <Outlet />
            </div>
        </div>
    );
};

export default Inventory;
